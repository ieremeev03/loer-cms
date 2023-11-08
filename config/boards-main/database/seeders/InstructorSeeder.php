<?php

namespace Database\Seeders;

use App\Models\Discipline;
use App\Models\Instructor;
use App\Models\InstructorDiscipline;
use Illuminate\Database\Seeder;

class InstructorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Instructor::factory()
        ->count(10)
        ->create();

        foreach (Instructor::all() as $instructor) {
            InstructorDiscipline::firstOrCreate([
                'instructor_id' => $instructor->id,
                'discipline_id' => Discipline::all()->random()->id
            ]);
        }
    }
}
