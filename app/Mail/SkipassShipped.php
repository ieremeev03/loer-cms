<?php

namespace App\Mail;

use App\Models\Skipass;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Http;


class SkipassShipped extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct(
        public Skipass $skipass,
        public $qrImage
    ) {}

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address(config('mail.from.address'), config('mail.from.name')),
            subject: $this->skipass->operation === Skipass::OPERATION_CREATE ?
            'Покупка ски-пасса на ГК «Такман»' :
            'Пополнение ски-пасса на ГК «Такман»',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        $installations = null;
        if ($this->skipass->operation === Skipass::OPERATION_TOPUP) {
            // информация о скипассе
            $skipassInfo = Http::withHeaders([
                'Authorization' => config('lime.token'),
            ])
            ->post(config('lime.url').'/ClientManagement/GetClientInfoByCardUid', [
                'uid' => $this->skipass->skipass,
                'installationId' => config('lime.installation_id'),
            ])
            ->json();

            if ($skipassInfo) {
                $installations = Http::withHeaders([
                    'Authorization' => config('lime.token'),
                ])
                ->post(config('lime.url').'/ClientManagement/GetRights', [
                    'clientId' => $skipassInfo['userData']['id'],
                    'installationId' => config('lime.installation_id'),
                ])
                ->json();
                if ($installations) {
                    $result = null;
                    foreach ($installations as $installation) {
                        $result[] = [
                            'title' => $installation['right']['goodTypeName'],
                            'amount' => $installation['right']['amount'],
                            'from' => Carbon::parse($installation['right']['from'])->setTimezone('Asia/Yekaterinburg')->format('d.m.Y H:i'),
                            'to' => Carbon::parse($installation['right']['to'])->setTimezone('Asia/Yekaterinburg')->format('d.m.Y H:i'),
                        ];
                    }
                    $installations = $result;
                }
            }
        }

        return new Content(
            markdown: $this->skipass->operation === Skipass::OPERATION_CREATE ? 'emails.client.skipass.buy' : 'emails.client.skipass.topup',
            with: [
                'skipass' => $this->skipass,
                'tariff' => $this->skipass->tariff,
                'installations' => $installations,
                'qrImage' => $this->qrImage,
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
        return [
            $this->qrImage
        ];
    }
}
