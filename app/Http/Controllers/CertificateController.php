<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateCertificateRequest;
use App\Models\Certificate;
use App\Services\PaymentService;
use Illuminate\Support\Facades\Log;

class CertificateController extends Controller
{
    public function buy(CreateCertificateRequest $request)
    {
        $data = $request->validated();

        $certificate = Certificate::create($data);

        $paymentData = array();
        $paymentData['orderNumber'] = 'C-'.$certificate->id;
        $paymentData['amount'] = $certificate->nominal * 100;

        $pageUrl = $request->session()->previousUrl();
        $pageUrl = explode('?', $pageUrl)[0];

        $paymentData['returnUrl'] = $pageUrl . '?result=success&form=cert';
        $paymentData['failUrl'] = $pageUrl . '?result=error&form=cert';

        $paymentData['customerDetails'] = json_encode([
            'email' => $certificate->email,
            'phone' => preg_replace('/[^+0-9]/', '', $certificate->phone)
        ]);

        $paymentData['orderBundle'] = json_encode([
            'cartItems' => [
                'items' => [
                    [
                        'positionId' => 1,
                        'name' => 'Покупка сертификата',
                        'quantity' => array(
                            'value' => 1,
                            'measure' => 'шт'
                        ),
                        'itemAmount' => $certificate->nominal * 100,
                        'itemPrice' => $certificate->nominal * 100,
                        'itemCode' => '1', // Номер (идентификатор) товарной позиции в системе магазина
                        'tax' => array(
                            'taxType' => 0,
                            'taxSum' => 0
                        ),
                        'itemAttributes' => [
                            'attributes' => [
                                [
                                    'name' => 'paymentMethod',
                                    'value' => 3, // аванс
                                ],
                                [
                                    'name' => 'paymentObject',
                                    'value' => 1, // товар
                                ],
                            ],
                        ],
                    ],
                ],
            ],
        ]);


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

        $certificate->sber_id = $response['orderId'] ?? null;
        $certificate->sber_status = $response['orderStatus'] ?? null;
        $certificate->save();

        //dd($response);
        return [
            'success' => true,
            'url' => $response['formUrl'],
        ];
    }
}
