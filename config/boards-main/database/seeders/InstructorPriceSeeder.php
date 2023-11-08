<?php

namespace Database\Seeders;

use App\Models\InstructorPrice;
use Illuminate\Database\Seeder;

class InstructorPriceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        InstructorPrice::firstOrCreate([
            'is_weekend' => false,
            'count' => 1,
            'price' => 1400,
        ]);

        InstructorPrice::firstOrCreate([
            'is_weekend' => false,
            'count' => 2,
            'price' => 2400,
        ]);

        InstructorPrice::firstOrCreate([
            'is_weekend' => false,
            'count' => 3,
            'price' => 3400,
        ]);
        InstructorPrice::firstOrCreate([
            'is_weekend' => true,
            'count' => 1,
            'price' => 1600,
        ]);

        InstructorPrice::firstOrCreate([
            'is_weekend' => true,
            'count' => 2,
            'price' => 2800,
        ]);

        InstructorPrice::firstOrCreate([
            'is_weekend' => true,
            'count' => 3,
            'price' => 3900,
        ]);
    }
}
