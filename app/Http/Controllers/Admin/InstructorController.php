<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\InstructorRequest;
use App\Models\Discipline;
use App\Models\Instructor;
use App\Models\InstructorDiscipline;
use App\Models\Schedule;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InstructorController extends Controller
{
    public function index() {
        return Inertia::render('Admin/Instructors/Index', [
            'instructors' => Instructor::with('disciplines')->get()
                ->transform(fn ($instructor) => [
                    'id' => $instructor->id,
                    'name' => $instructor->name,
                    'disciplines' => $instructor->disciplines,
                ]),
        ]);
    }

    public function table() {
        return Inertia::render('Admin/Instructors/Shedule', [
            'instructors' => Instructor::with('disciplines')->get()
                ->transform(fn ($instructor) => [
                    'id' => $instructor->id,
                    'name' => $instructor->name,
                    'disciplines' => $instructor->disciplines,
                ]),
        ]);
    }

    public function edit($id = null) {
        $instructor = Instructor::where('id', $id)->firstOrNew();
        $disciplineIds = $instructor->disciplineIds()->pluck('discipline_id')->toArray();
        $disciplines = Discipline::get(['id', 'name']);
        $disciplines = $disciplines->map(function($item) use ($disciplineIds) {
            $item->selected = in_array($item->id, $disciplineIds);
            return $item;
        })->keyBy('id');

        return Inertia::render('Admin/Instructors/Edit', [
            'instructor' => $instructor,
            'disciplines' => $disciplines,
        ]);
    }

    public function schedule(Request $request)
    {
        $instructorId = $request->input('instructor_id');
        $selectedDate = $request->input('selected_date');
        $schedule = Schedule::with(['discipline'])
            ->where('instructor_id', $instructorId)
            ->where('start_date', $selectedDate)
            ->get();

        $arr = [];

        for ($i=9; $i <= 20; $i++) {
            $start = Carbon::parse($selectedDate . ' ' . $i . ':00:00', 'UTC');
            $time = $schedule->first(function ($value) use ($start) {
                return $value->start_time == $start->format('H:i:s');
            });

            $arr[] = [
                'start' => $start->format('H:i'),
                'end' => Carbon::parse($selectedDate . ' ' . $i+1 . ':00:00', 'UTC')->format('H:i'),
                'active' => $time && $time->active ? true : false,
                'selected' => $time && $time->selected ? true : false,
                'discipline' => $time->discipline->name ?? null,
            ];
        }

        return $arr;
    }

    public function save(InstructorRequest $request)
    {
        $instructorId = $request->input('instructor_id', null);
        $instructorName = $request->input('instructor_name');
        $instructorImage = $request->input('instructor_image');
        $selectedDate = $request->input('selected_date');
        $activeTimes = $request->input('active_times');
        $disciplines = $request->input('disciplines');

        try {
            $instructor = Instructor::where('id', $instructorId)->firstOrNew();
            $instructor->name = $instructorName;
            $instructor->image = $instructorImage;
            $instructor->save();

            if ($instructor) {
                foreach($disciplines as $discipline) {
                    if ($discipline['selected'] === true) {
                        InstructorDiscipline::firstOrCreate([
                            'instructor_id' => $instructor->id,
                            'discipline_id' => $discipline['id'],
                        ]);
                    } else {
                        InstructorDiscipline::where('instructor_id', $instructor->id)
                            ->where('discipline_id', $discipline['id'])
                            ->delete();
                    }
                }

                if ($selectedDate && $activeTimes) {
                    Schedule::where('instructor_id', $instructor->id)
                        ->where('active', true)
                        ->where('selected', false)
                        ->where('start_date', $selectedDate)
                        ->update([
                            'active' => false
                        ]);

                    foreach ($activeTimes as $item) {
                        Schedule::updateOrCreate([
                            'instructor_id' => $instructor->id,
                            'start_date' => $selectedDate,
                            'start_time' => $item['start'],
                        ], [
                            'active' => true
                        ]);
                    }
                }
            }
            return $this->index();
        } catch (\Throwable $th) {
            return false;
        }
    }
}
