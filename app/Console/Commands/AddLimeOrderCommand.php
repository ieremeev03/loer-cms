<?php

namespace App\Console\Commands;

use App\Models\Skipass;
use App\Models\Tariff;
use App\Services\PaymentService;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class AddLimeOrderCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'add-lime-order';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $orders = Skipass::where('payed', false)->get();

        foreach ($orders as $order) {
            // заказы за последние 21 минуту
            if ($order->created_at > Carbon::now()->subMinutes(21)) {
                if ($order->sber_id) {
                    $this->createSkipass($order);
                }
            } else {
                $order->delete();
            }
        }
    }

    private function createSkipass($order)
    {
        $skipassCard = Tariff::findOrFail(2);
        $qrCode = Tariff::findOrFail(1);
        $created_at = $order->created_at->format('Y-m-d\TH:i:s');
        $created_at_tz = $order->created_at->setTimezone('Europe/Moscow')->format('Y-m-d\TH:i:s');

        $response = (new PaymentService())->statusPayment(['orderNumber' => 'S-' . $order->id]);

        $clientId = $order->skipass_data['clientId'] ?? null;

        if ($response['orderStatus'] === 2) {
            $order->payed = true;
            $order->sber_status = $response['orderStatus'];
            $order->save();

            if ($order->operation === Skipass::OPERATION_CREATE) {
                if (!$clientId) {
                    // регистрация клиента
                    $user = Http::withHeaders([
                        'Authorization' => config('lime.token'),
                    ])
                        ->post(config('lime.url').'/ClientManagement/Insert', [
                            'email' => $order->email,
                            'phoneNumber' => preg_replace('![^0-9]+!', '', $order->phone),
                            'displayName' => $order->name,
                        ])
                        ->json();

                    Log::info('продажа билета: '.json_encode($user));

                    if (!$user) {
                        return response()->json([
                            'errors' => [
                                'skipass' => 'Клиент не создан'
                            ]
                        ], 422);
                    }
                    $clientId = $user;
                }

                // создать скипасс
                $skipass = Http::withHeaders([
                    'Authorization' => config('lime.token'),
                ])
                    ->get(config('lime.url').'/CashdeskServer/GenerateCard', [
                        'cashdeskId' => config('lime.cashdeck_id'),
                        'installationId' => config('lime.installation_id'),
                    ])
                    ->json();

                if ($skipass === null) {
                    return response()->json([
                        'errors' => [
                            'skipass' => 'Ски-пасс не создан'
                        ]
                    ], 422);
                }

                $order->skipass = $skipass['card']['code'];
                $order->skipass_data = [
                    'cardId' => $skipass['card']['id'],
                    'clientId' => $clientId,
                ];
                $order->save();
            }

            // продажа билета
            $createOrder = Http::withHeaders([
                'Authorization' => config('lime.token'),
            ])
                ->get(config('lime.url').'/CashdeskServer/GetOrCreateRight', [
                    'cardId' => $order->skipass_data['cardId'],
                    'clientId' => $clientId,
                    'cashdeskId' => config('lime.cashdeck_id'),
                    'goodTypeId' => $order->tariff_id,
                    'time' => $created_at
                ])
                ->json();


            Log::info('продажа билета: '.json_encode($createOrder));

            // создание ID чека
            $createCheck = Http::withHeaders([
                'Authorization' => config('lime.token'),
            ])
                ->get(config('lime.url').'/CashdeskServer/GetNextCheckId')
                ->json();

            Log::info('создание ID чека: '.json_encode($createCheck));

            // даные для формирования чека
            $data = array();
            $data['check'] = [
                "installationTime" => $created_at,
                "id" => $createCheck, // ID который вернул запрос СОЗДАНИЕ ID чека
                "installationId" => config('lime.installation_id'),
                "cashdeskId" => config('lime.cashdeck_id'),
                "userId" => 158934,  //не меняем
                "time" => $created_at_tz,
                "type" => 0,
                "administrative" => false,
                "delayFiscalization" => false
            ];

            // продажа билета
            if ($order->operation === Skipass::OPERATION_CREATE) {
                $data['entries'][] = [
                    "entry" => [// QR код
                        "checkId" => $createCheck, // ID который вернул запрос СОЗДАНИЕ ID чека
                        "id" => 0,
                        "amount" => 1,
                        "price" => $qrCode->price,
                        "basePrice" => $qrCode->price,
                        "goodTypeId" => $qrCode->external_id,
                        "cardId" => $order->skipass_data['cardId'], //ID карты
                        "userId" => $clientId, //ID клиента
                        "printedInQr" => true,
                        "count" => 1
                    ],
                    "payments" => [],
                    "checkEntryDiscounts" => []
                ];
            }

            $data['entries'][] = [
                "entry" => [
                    "checkId" => $createCheck, // ID который вернул запрос СОЗДАНИЕ ID чека
                    "id" => 0,
                    "rightId" => $createOrder['id'],     // ID права который вернул запрос ПРОДАЖА БИЛЕТА
                    "amount" => 1,
                    "price" => $order->price,
                    "basePrice" => $order->price,
                    "goodTypeId" => $order->tariff_id,
                    "cardId" => $order->skipass_data['cardId'], //ID карты
                    "userId" => $clientId, //ID клиента
                    "printedInQr" => $order->operation === Skipass::OPERATION_CREATE ? true : false,
                    "count" => 1
                ],
                "payments" => [
                    [
                        "checkEntryId" => 0,
                        "id" => 0,
                        "processingId" => config('lime.processing_id'),
                        "amount" => $order->price,
                        "transactionReference" => $order->sber_id,
                    ]
                ],
                "checkEntryDiscounts" => []
            ];

            // если продажа - добавить покупку пластикой карты
            if ($order->operation === Skipass::OPERATION_CREATE) {
                $data['entries'][] = [
                    "entry" => [  // QR код
                        "checkId" => $createCheck, // ID который вернул запрос СОЗДАНИЕ ID чека
                        "id" => 1,
                        "amount" => 1,
                        "price" => $qrCode->price,
                        "basePrice" => $qrCode->price,
                        "goodTypeId" => $qrCode->external_id,
                        "cardId" => $order->skipass_data['cardId'], //ID карты
                        "userId" => $clientId ?? null, //ID клиента
                        "printedInQr" => true,
                        "count" => 1
                    ],
                    "payments" => [], // Оплат нет
                    "checkEntryDiscounts" => []
                ];
                $data['entries'][] = [
                    "entry" => [  // покупка пластикой карты
                        "checkId" => $createCheck, // ID который вернул запрос СОЗДАНИЕ ID чека
                        "id" => 1,
                        "amount" => 1,
                        "price" => $skipassCard->price ?? 0,
                        "basePrice" => $skipassCard->price ?? 0,
                        "goodTypeId" => $skipassCard->external_id,
                        "cardId" => $order->skipass_data['cardId'], //ID карты
                        "userId" => $clientId, //ID клиента
                        "printedInQr" => true,
                        "count" => 1
                    ],
                    "payments" => [
                        [
                            "checkEntryId" => 1,
                            "id" => 0,
                            "processingId" => config('lime.processing_id'),
                            "amount" => $skipassCard->price ?? 0,
                            "transactionReference" => $order->sber_id,
                        ]
                    ],
                    "checkEntryDiscounts" => []
                ];
            }

            // формирование чека
            $check = Http::withHeaders([
                'Authorization' => config('lime.token'),
            ])
                ->post(config('lime.url').'/CashdeskServer/PutCheck', $data)
                ->json();

            Log::info('формирование чека: '.json_encode($check));

        }
    }
}
