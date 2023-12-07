<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Certificate;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CertificateController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Certificates/Index', [
            'certificates' => Certificate::where('payed', true)->get()->sortBy('created_at')
        ]);
    }
}
