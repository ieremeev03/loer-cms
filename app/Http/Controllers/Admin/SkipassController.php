<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Skipass;
use Inertia\Inertia;

class SkipassController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Skipass/Index', [
            'skipasses' => Skipass::with('tariff')->orderByDesc('id')->paginate(10),
        ]);
    }
}
