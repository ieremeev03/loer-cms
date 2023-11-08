<?php

namespace App\Console\Commands;

use App\Models\Tariff;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class SyncPriceCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sync-price';

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
        $goodTypes = Http::withHeaders([
            'Authorization' => config('lime.token'),
        ])
            ->post(config('lime.url').'/GoodTypes/Select', [
                'filter' => [
                    'installationId' => 2
                ],
                'page' => [
                    'skip' => 0,
                    'take' => 100
                ]
            ])
            ->json();


        foreach($goodTypes['data'] as $item) {
            Tariff::where('external_id', $item['id'])->update([
                'price' => $item['basePrice']
            ]);
        }
    }
}
