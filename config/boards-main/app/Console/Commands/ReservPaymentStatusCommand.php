<?php

namespace App\Console\Commands;

use App\Models\Order;
use App\Services\PaymentService;
use Carbon\Carbon;
use Illuminate\Console\Command;

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

        // проверить если оплаты нет более 25 минут -
        $orders = Order::where('payed', false)->get();

        foreach ($orders as $order) {
            if ($order->created_at > Carbon::now()->subMinutes(21)) {
                $response = (new PaymentService())->statusPayment(['orderNumber' => $order->id]);
                if ($response['orderStatus'] === 2) {
                    $order->payed = $response['orderStatus'] === 2 ? true : false;
                    $order->sber_status = $response['orderStatus'] ?? null;
                    $order->save();
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
