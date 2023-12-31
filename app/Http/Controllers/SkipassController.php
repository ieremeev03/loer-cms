<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateSkipassRequest;
use App\Http\Requests\TopupSkipassRequest;
use App\Models\Skipass;
use App\Models\Tariff;
use App\Services\PaymentService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class SkipassController extends Controller
{
    public function getTariffs(Request $request)
    {
        $selectedDate = $request->input('selected_date');
        $isChild = (bool)$request->input('is_child');

        $date = Carbon::parse($selectedDate . '00:00:00', 'UTC');
        $isWeekend = in_array($date->dayOfWeek, [0,6]);

        $price = Tariff::query()
            ->where('visible', true)
            ->where(function($groupQuery)  use ($isChild, $isWeekend) {
                $groupQuery->where(function($query) use ($isChild, $isWeekend) {
                    $query->where('is_child', $isChild)
                        ->where('is_weekend', $isWeekend);
                })
                ->orWhere(function($query) use ($isChild) {
                    $query->where('is_child', $isChild)
                        ->where('is_weekend', null);
                })
                ->orWhere(function($query) {
                    $query->where('is_child', null)
                        ->where('is_weekend', null);
                });
            })
            ->get()
            ->map(function($item) {
                return [
                    'id' => $item->id,
                    'label' => $item->title.' ('.$item->price.'₽)'
                ];
            });

        return $price;
    }

    public function getCardPrice()
    {
        return Tariff::where('id', 2)
            ->select(['price', 'external_id'])
            ->first();
    }

    public function create(CreateSkipassRequest $request)
    {
        $data = $request->validated();

        $tariff = Tariff::find($data['tariff_id']);
        $skipassCard = Tariff::find(2);

        if (!$tariff) {
            return response()->json([
                'errors' => [
                    'message' => 'Произошла ошибка'
                ]
            ], 422);
        }

        // найти клиента
        $user = Http::withHeaders([
            'Authorization' => config('lime.token'),
        ])
            ->post(config('lime.url').'/ClientManagement/GetClientInfoByEmail',
                [
                    'email' => $data['email'],
                    'installationId' => config('lime.installation_id'),
                ])
            ->json();

        Log::info('поиск клиента: '.json_encode($user));

        $data['operation'] = Skipass::OPERATION_CREATE;
        $data['skipass'] = 'NEW';
        $data['skipass_data'] = $user ? ['clientId' => $user[0]['userData']['id']] : [];
        $data['tariff_id'] = $tariff->external_id;
        $data['price'] = $tariff->price;
        $data['sum'] = $tariff->price + $skipassCard->price ?? 0;

        return $this->createSkipass($data);
    }

    public function topup(TopupSkipassRequest $request)
    {
        // информация о скипассе
        $skipass = Http::withHeaders([
            'Authorization' => config('lime.token'),
        ])
            ->get(config('lime.url').'/ClientManagement/GetCardInfoByCardUid', [
                'uid' => $request->input('skipass'),
            ])
            ->json();


        if ($skipass === null) {
            return response()->json([
                'errors' => [
                    'skipass' => 'Ски-пасс не найден'
                ]
            ], 422);
        }

        $data = $request->validated();

        $tariff = Tariff::find($data['tariff_id']);

        if (!$tariff) {
            return response()->json([
                'errors' => [
                    'message' => 'Произошла ошибка'
                ]
            ], 422);
        }

        $data['operation'] = Skipass::OPERATION_TOPUP;
        $data['skipass_data'] = [
            'cardId' => $skipass['card']['id'],
            'clientId' => $skipass['card']['userId'],
        ];
        $data['tariff_id'] = $tariff->external_id;
        $data['price'] = $tariff->price;
        $data['sum'] = $tariff->price;

        return $this->createSkipass($data);
    }

    private function createSkipass($data)
    {
        $skipass = Skipass::create($data);

        $paymentData = array();
        $paymentData['orderNumber'] = 'S-'.$skipass->id;
        $paymentData['amount'] = $skipass->sum * 100;

        $response = (new PaymentService())->registerPayment($paymentData);

        if (!$response) {
            return response()->json([
                'errors' => [
                    'payment' => 'Ошибка соединения'
                ]
            ], 422);
        }

        if (isset($response->errorCode)) {
            Log::info('Sberbank API error code: '.$response->errorCode);

            return response()->json([
                'errors' => [
                    'payment' => 'Ошибка соединения'
                ]
            ], 422);
        }

        $skipass->sber_id = $response['orderId'] ?? null;
        $skipass->sber_status = $response['orderStatus'] ?? null;
        $skipass->save();

        return [
            'success' => true,
            'url' => $response['formUrl'],
        ];
    }
}