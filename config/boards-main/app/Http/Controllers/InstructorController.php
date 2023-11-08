<?php

namespace App\Http\Controllers;

use App\Models\Discipline;
use App\Models\Instructor;
use Inertia\Inertia;

class InstructorController extends Controller
{
    public function index() {
        $disciplines = Discipline::select(['id', 'name as label'])->get();
        return Inertia::render('Welcome', [
            'disciplines' => $disciplines
        ]);
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
}
