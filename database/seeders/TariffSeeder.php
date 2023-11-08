<?php

namespace Database\Seeders;

use App\Models\Tariff;
use Illuminate\Database\Seeder;

class TariffSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Tariff::firstOrCreate([
            'external_id' => 5094
        ],[
            'title' => 'QR код',
            'price' => 0,
            'visible' => false,
        ]);

        Tariff::firstOrCreate([
            'external_id' => 5095
        ],[
            'title' => 'Карта SKI-PASS',
            'price' => 100,
            'visible' => false,
        ]);

        // разовый
        Tariff::firstOrCreate([
            'external_id' => 5100
        ],[
            'title' => 'Разовый подъем',
            'price' => 150,
            'is_child' => false,
            'is_weekend' => false,
        ]);

        Tariff::firstOrCreate([
            'external_id' => 5101
        ],[
            'title' => 'Разовый подъем',
            'price' => 170,
            'is_child' => false,
            'is_weekend' => true,
        ]);

        Tariff::firstOrCreate([
            'external_id' => 5102
        ],[
            'title' => 'Разовый подъем',
            'price' => 100,
            'is_child' => true,
            'is_weekend' => false,
        ]);

        Tariff::firstOrCreate([
            'external_id' => 5103
        ],[
            'title' => 'Разовый подъем',
            'price' => 130,
            'is_child' => true,
            'is_weekend' => true,
        ]);

        // 3 часа
        Tariff::firstOrCreate([
            'external_id' => 5104
        ],[
            'title' => '3 часа',
            'price' => 900,
            'is_child' => false,
            'is_weekend' => false,
        ]);

        Tariff::firstOrCreate([
            'external_id' => 5105
        ],[
            'title' => '3 часа',
            'price' => 1100,
            'is_child' => false,
            'is_weekend' => true,
        ]);

        Tariff::firstOrCreate([
            'external_id' => 5106
        ],[
            'title' => '3 часа',
            'price' => 650,
            'is_child' => true,
            'is_weekend' => false,
        ]);

        Tariff::firstOrCreate([
            'external_id' => 5107
        ],[
            'title' => '3 часа',
            'price' => 800,
            'is_child' => true,
            'is_weekend' => true,
        ]);

        // 2 часа (вечер)
        Tariff::firstOrCreate([
            'external_id' => 5108
        ],[
            'title' => '2 часа (вечер)',
            'price' => 550,
            'is_child' => false,
            'is_weekend' => false,
        ]);

        Tariff::firstOrCreate([
            'external_id' => 5109
        ],[
            'title' => '2 часа (вечер)',
            'price' => 700,
            'is_child' => false,
            'is_weekend' => true,
        ]);

        Tariff::firstOrCreate([
            'external_id' => 5110
        ],[
            'title' => '2 часа (вечер)',
            'price' => 650,
            'is_child' => true,
            'is_weekend' => false,
        ]);

        Tariff::firstOrCreate([
            'external_id' => 5111
        ],[
            'title' => '2 часа (вечер)',
            'price' => 800,
            'is_child' => true,
            'is_weekend' => true,
        ]);

        // 1 день
        Tariff::firstOrCreate([
            'external_id' => 5119
        ],[
            'title' => '1 день',
            'price' => 1200,
            'is_child' => false,
            'is_weekend' => false,
        ]);

        Tariff::firstOrCreate([
            'external_id' => 5120
        ],[
            'title' => '1 день',
            'price' => 1700,
            'is_child' => false,
            'is_weekend' => true,
        ]);

        Tariff::firstOrCreate([
            'external_id' => 5121
        ],[
            'title' => '1 день',
            'price' => 800,
            'is_child' => true,
            'is_weekend' => false,
        ]);

        Tariff::firstOrCreate([
            'external_id' => 5122
        ],[
            'title' => '1 день',
            'price' => 1100,
            'is_child' => true,
            'is_weekend' => true,
        ]);

        // 50 подъемов
        Tariff::firstOrCreate([
            'external_id' => 5112
        ],[
            'title' => '50 подъемов',
            'price' => 7000,
            'is_child' => false,
        ]);

        Tariff::firstOrCreate([
            'external_id' => 5113
        ],[
            'title' => '50 подъемов',
            'price' => 5000,
            'is_child' => true,
        ]);

        // 100 подъемов
        Tariff::firstOrCreate([
            'external_id' => 5114
        ],[
            'title' => '100 подъемов',
            'price' => 12000,
            'is_child' => false,
        ]);

        Tariff::firstOrCreate([
            'external_id' => 5115
        ],[
            'title' => '100 подъемов',
            'price' => 9000,
            'is_child' => true,
        ]);

        // 200 подъемов
        Tariff::firstOrCreate([
            'external_id' => 5116
        ],[
            'title' => '200 подъемов',
            'price' => 20000,
            'is_child' => false,
        ]);

        Tariff::firstOrCreate([
            'external_id' => 5117
        ],[
            'title' => '200 подъемов',
            'price' => 16000,
            'is_child' => true,
        ]);

        Tariff::firstOrCreate([
            'external_id' => 5118
        ],[
            'title' => 'Разовый подъем тюбинг',
            'price' => 70,
        ]);
    }
}
