<?php

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('pages')->delete();
        Page::factory(6)->create(['parent_id' => null]);
        foreach (range(4, 5) as $p) {
            Page::factory(2)->create(['parent_id' => $p]);
        }
    }
}
