<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        if (! \App\Models\User::where('email', 'test@example.com')->first()) {
            \App\Models\User::factory()->create([
                'name' => 'Test User',
                'email' => 'test@example.com',
            ]);
        }

        $this->call([
            DisciplineSeeder::class,
            InstructorSeeder::class,
            TariffSeeder::class,
            InstructorPriceSeeder::class,
        ]);
    }
}
