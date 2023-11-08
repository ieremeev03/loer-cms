<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Instructor;
use App\Models\OrderSchedule;
use App\Models\Schedule;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $selectedDate = $request->input('selected_date');
        $instructors = Instructor::select(['id', 'name'])->get();

        $schedules = Schedule::where('start_date', $selectedDate)
            ->select(['id', 'start_time', 'instructor_id', 'discipline_id', 'active', 'selected'])
            ->get();

        $orderShedules = OrderSchedule::with(['order:id,count,payed,email,phone,name'])
            ->whereHas('order', function ($query) use ($selectedDate) {
                $query->where('date', $selectedDate)
                    ->where('payed', true);
            })
            ->get();

        $header = array();
        for ($i = 9; $i <= 20; $i++) {
            $header[] = Carbon::parse($selectedDate . ' ' . $i . ':00:00', 'UTC')->format('H:i');
        }

        $instructors->map(function ($instructor) use ($selectedDate, $schedules, $orderShedules) {
            $times = array();
            for ($i = 9; $i <= 20; $i++) {
                $start = Carbon::parse($selectedDate . ' ' . $i . ':00:00', 'UTC');
                $findSchedule = $schedules->first(function ($value) use ($start, $instructor) {
                    return $value->instructor_id === $instructor->id && $start->format('H:i:s') === $value->start_time;
                });

                $payed = $orderShedules->first(function ($value) use ($findSchedule) {
                    return $findSchedule && $value->schedule_id === $findSchedule->id;
                });

                $times[] = [
                    'start' => $start->format('H:i'),
                    'end' => Carbon::parse($selectedDate . ' ' . $i + 1 . ':00:00', 'UTC')->format('H:i'),
                    'active' => $findSchedule && $findSchedule->active ? true : false,
                    'selected' => $findSchedule && $findSchedule->selected ? true : false,
                    'discipline' => $findSchedule->discipline->name ?? null,
                    'order' => $payed->order ?? null,
                ];
            }
            $instructor->times = $times;
            return $instructor;
        });

        return [
            'header' => $header,
            'instructors' => $instructors
        ];
    }
}
