<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\InstructorPrice;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InstructorPriceController extends Controller
{
    public function index()
    {
        $price = InstructorPrice::get([
            'id',
            'is_weekend',
            'count',
            'price'
        ]);

        return Inertia::render('Admin/Price/Index', [
            'price' => $price
        ]);
    }

    public function save(Request $request)
    {
        $price = $request->input('price', []);

        foreach ($price as $item) {
            InstructorPrice::find($item['id'])->update([
                'price' => $item['price']
            ]);
        }
    }
}
