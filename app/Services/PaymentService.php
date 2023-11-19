<?php
namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class PaymentService
{
    public function registerPayment($data)
    {
        $data['userName'] = config('sberbank.username');
        $data['password'] = config('sberbank.password');
        $url = config('sberbank.url') . '/register.do';

        $payment = Http::asForm()
            ->withOptions(["verify"=>false])
            ->post($url, $data)
            ->json();


        return $payment;
    }

    public function statusPayment($data)
    {
        $data['userName'] = config('sberbank.username');
        $data['password'] = config('sberbank.password');
        $url = config('sberbank.url') . '/getOrderStatusExtended.do';

        $payment = Http::asForm()->withHeaders([
            'Authorization' => config('lime.token'),
        ])
            ->withOptions(["verify"=>false])
            ->post($url, $data)
            ->json();

        return $payment;
    }
}
