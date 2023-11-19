<?php

namespace App\Console\Commands;

use App\Mail\Admin\CertPayed;
use App\Models\Certificate;
use App\Services\PaymentService;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class CertPaymentStatusCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cert-payment-status';

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
        $certificates = Certificate::where('payed', false)
            ->where('created_at', '>', Carbon::now()->subMinutes(21))
            ->get();

        foreach ($certificates as $certificate) {
            $response = (new PaymentService())->statusPayment(['orderNumber' => 'C-' . $certificate->id]);
            if ($response['orderStatus'] === 2) {
                $certificate->payed = true;
                $certificate->sber_status = $response['orderStatus'] ?? null;
                $certificate->save();

                Mail::to(config('takman.admin_email'))->send(new CertPayed($certificate));
                $certificate->email_sented = Carbon::now();
                $certificate->save();
            }
        }
    }
}
