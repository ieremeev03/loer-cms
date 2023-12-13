<?php

namespace App\Console\Commands;

use App\Mail\ReservShipped;
use App\Models\Order;
use App\Services\PaymentService;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class ReservPaymentStatusCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'reserv-payment-status';

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
        $orders = Order::where('payed', false)->get();

        foreach ($orders as $order) {
            // заказы за последние 21 минуту
            if ($order->created_at > Carbon::now()->subMinutes(21)) {
                if ($order->sber_id) {
                    $response = (new PaymentService())->statusPayment(['orderNumber' => $order->id]);
                    if ($response['orderStatus'] === 2) {
                        $order->payed = $response['orderStatus'] === 2 ? true : false;
                        $order->sber_status = $response['orderStatus'] ?? null;
                        $order->save();
                        Mail::to($order->email)->send(new ReservShipped($order));
                        $order->email_sented = Carbon::now();
                        $order->save();
                    }
                }
            } else {
                // удалить неоплаченное резервирование
                foreach ($order->schedules as $schedule) {
                    $schedule->schedule->discipline_id = null;
                    $schedule->schedule->selected = false;
                    $schedule->schedule->save();
                }
                $order->schedules()->delete();
                $order->delete();
            }
        }
    }
}
