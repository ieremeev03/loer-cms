<?php

namespace App\Console\Commands;

use App\Mail\SkipassShipped;
use App\Models\Skipass;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class SendQrCodeCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'send-qr-code';

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
        $orders = Skipass::where('payed', true)
            ->where('operation', Skipass::OPERATION_CREATE)
            ->where('email_sented', null)
            ->limit(1)
            ->get();

        foreach ($orders as $order) {
            $cardId = $order->skipass_data['cardId'] ?? null;

            $qr = Http::withHeaders([
                'Authorization' => config('lime.token'),
            ])
                ->get(config('lime.url').'/CashdeskServer/GenerateQr', [
                    'cardId' => $cardId
                ])
                ->json();

            $order->qrcode = $qr ?? null;
            $order->save();

            if ($order->qrcode) {
                $filePath = public_path('/qr/'.$order->id.'.png');
                QrCode::format('png')->size(250)->margin(0)->generate($order->qrcode, $filePath);

                Mail::to($order->email)->send(new SkipassShipped($order, $filePath));
                // if(File::exists($filePath)){
                //     File::delete($filePath);
                // }
                $order->email_sented = Carbon::now();
                $order->save();
            }
        }

    }
}
