<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Models\Discipline;
use App\Models\Instructor;
use App\Models\InstructorPrice;
use App\Models\Order;
use App\Models\OrderSchedule;
use App\Models\Schedule;
use App\Services\PaymentService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class InstructorController extends Controller
{
    public function index() {
        $disciplines = Discipline::select(['id', 'name as label'])->get();
        return $disciplines;
        /*return Inertia::render('Welcome', [
            'disciplines' => $disciplines
        ]);*/
    }

    public function getById($id) {
        $instructor = Instructor::findOrFail($id);
        $instructor->disciplines = $instructor->disciplines->map(function($item) {
            return [
                'id' => $item->id,
                'label' => $item->name,
            ];
        });
        return Inertia::render('ReserveInstructor', [
            'disciplines' => $instructor->disciplines,
            'instructor' => $instructor
        ]);
    }

    private function getPrice($selectedDate)
    {
        $date = Carbon::parse($selectedDate . '00:00:00', 'UTC');

        $price = InstructorPrice::query()
            ->where('is_weekend', in_array($date->dayOfWeek, [0, 6]))
            ->get()
            ->keyBy('count')
            ->map(function($item) {
                return $item->price;
            });

        return $price;
    }


    public function getInstructors(Request $request)
    {
        $selectedDate = $request->input('selected_date');
        $discpline = $request->input('discpline');
        $currentDay = Carbon::now()->timezone('Asia/Yekaterinburg');

        $instructors = Instructor::select(['id', 'name'])
            ->whereHas('disciplineIds', function ($query) use ($discpline) {
                $query->where('discipline_id', $discpline);
            })
            ->whereHas('schedule', function ($query) use ($selectedDate, $currentDay) {
                $query->where('start_date', $selectedDate)
                    ->where('active', true)
                    ->where('selected', false);
                if ($currentDay->format('Y-m-d') === $selectedDate) {
                    $query->where('start_time', '>', $currentDay->format('H:i'));
                }
            })
            ->get();

        $price = $this->getPrice($selectedDate);

        return [
            'instructors' => $instructors,
            'price' => $price,
        ];

    }


    public function getTimes(Request $request)
    {
        $instructorId = $request->input('instructor_id');
        $selectedDate = $request->input('selected_date');
        $currentDay = Carbon::now()->timezone('Asia/Yekaterinburg');

        $schedule = Schedule::where('instructor_id', $instructorId)
            ->where('start_date', $selectedDate)
            ->where('active', true)
            ->where('selected', false)
            ->select(['id', 'start_time', 'selected'])
            ->orderBy('start_time');

        if ($currentDay->format('Y-m-d') === $selectedDate) {
            $schedule->where('start_time', '>', $currentDay->format('H:i'));
        }

        $schedule = $schedule->get()->map(function ($item) {
            $start = Carbon::parse($item->start_time, 'UTC');
            $item->start_time = $start->format('H:i');
            $item->end_time = $start->addHour()->format('H:i');
            return $item;
        });

        $price = $this->getPrice($selectedDate);

        return [
            'schedule' => $schedule,
            'price' => $price,
        ];
    }

    public function addOrder(OrderRequest $request)
    {
        $name = $request->input('name');
        $phone = $request->input('phone');
        $email = $request->input('email');
        $timeIds = $request->input('time_ids');
        $disciplineId = $request->input('discipline_id');
        $instructorId = $request->input('instructor_id');
        $selectedCount = $request->input('selected_count');
        $selectedDate = $request->input('date');

        $schedules = Schedule::whereIn('id', $timeIds)
            ->where('active', true)
            ->where('selected', false)
            ->get();

        if ($schedules->count() !== count($timeIds)) {
            return response()->json([
                'errors' => [
                    'dublicate' => 'Выберите другое время'
                ]
            ], 422);
        }

        $price = $this->getPrice($selectedDate)[$selectedCount] ?? 0;
        $sum = $price * count($timeIds);

        DB::beginTransaction();

        try {
            $order = Order::create([
                'name' => $name,
                'phone' => $phone,
                'email' => $email,
                'date' => $selectedDate,
                'discipline_id' => $disciplineId,
                'instructor_id' => $instructorId,
                'count' => $selectedCount,
                'sum' => $sum,
            ]);

            foreach ($schedules as $item) {
                OrderSchedule::create([
                    'order_id' => $order->id,
                    'schedule_id' => $item->id,
                ]);
                $item->selected = true;
                $item->discipline_id = $disciplineId;
                $item->save();
            }
            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json([
                'errors' => [
                    'dublicate' => 'Выберите другое время'
                ]
            ], 422);
        }

        $data = array();
        $data['orderNumber'] = $order->id;
        $data['amount'] = $order->sum * 100;

        $response = (new PaymentService())->registerPayment($data);

        if (!$response) {
            return response()->json([
                'errors' => [
                    'payment' => 'Ошибка соединения'
                ]
            ], 422);
        }

        if (isset($response->errorCode)) {
            Log::info('Sberbank API error code: '.$response->errorCode);

            return response()->json([
                'errors' => [
                    'payment' => 'Ошибка соединения'
                ]
            ], 422);
        }

        $order->sber_id = $response['orderId'] ?? null;
        $order->sber_status = $response['orderStatus'] ?? null;
        $order->save();

        return [
            'success' => true,
            'url' => $response['formUrl'],
        ];
    }

    public function paymentStatus(Request $request)
    {
        Log::info($request);
    }


}
