<?php

namespace App\Mail;

use App\Models\Order;
use App\Models\OrderSchedule;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ReservShipped extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct(
        public Order $order,
    ) {}

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address(config('mail.from.address'), config('mail.from.name')),
            subject: 'Бронирование инструктора на ГК «Такман»',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        $times = OrderSchedule::join('schedules', 'order_schedules.schedule_id', '=', 'schedules.id')
            ->where('order_schedules.order_id', $this->order->id)
            ->get('start_time')
            ->pluck('start_time');

        $times = $times->map(function ($item) {
            return mb_substr($item, 0, 5);
        })->toArray();

        $this->order->date = Carbon::createFromFormat('Y-m-d', $this->order->date)->format('d.m.Y');
        return new Content(
            markdown: 'emails.client.reserv',
            with: [
                'order' => $this->order,
                'discipline' => $this->order->discipline,
                'instructor' => $this->order->instructor,
                'times' => implode(', ', $times),
            ]
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
