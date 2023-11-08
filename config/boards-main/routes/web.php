<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\InstructorController;
use App\Http\Controllers\Admin\InstructorPriceController;
use App\Http\Controllers\Admin\SkipassController as AdminSkipassController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InstructorController as FrontInstructorController;
use App\Http\Controllers\SkipassController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [FrontInstructorController::class, 'index']);
Route::get('/instructor/{id}', [FrontInstructorController::class, 'getById']);

Route::post('/get-instructors', [HomeController::class, 'getInstructors']);
Route::post('/get-times', [HomeController::class, 'getTimes']);
Route::post('/add-order', [HomeController::class, 'addOrder']);

Route::get('/payment-success', function () {
    return Inertia::render('Payment/Success');
})->name('payment-success');
Route::get('/payment-error', function () {
    return Inertia::render('Payment/Error');
})->name('payment-error');
Route::any('/payment-status', [HomeController::class, 'paymentStatus'])->name('payment-status');

Route::post('/get-card-price', [SkipassController::class, 'getCardPrice'])->name('get-card-price');
Route::post('/get-tariffs', [SkipassController::class, 'getTariffs'])->name('get-tariffs');
Route::post('/topup-skipass', [SkipassController::class, 'topup'])->name('topup-skipass');
Route::post('/create-skipass', [SkipassController::class, 'create'])->name('create-skipass');


Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->prefix('admin')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('dashboard');
    Route::post('/get-table', [DashboardController::class, 'index'])->name('get-table');

    Route::get('skipasses', [AdminSkipassController::class, 'index'])->name('skipasses');

    Route::prefix('instructors')->controller(InstructorController::class)->group(function () {
        Route::get('/', 'index')->name('instructors');
        Route::get('edit/{id?}', 'edit')->name('instructor.edit');
        Route::post('save', 'save')->name('instructor.save');
        Route::post('schedule', 'schedule')->name('instructor.schedule');
    });

    Route::prefix('price')->controller(InstructorPriceController::class)->group(function () {
        Route::get('/', 'index')->name('price');
        Route::post('save', 'save')->name('price.save');
    });
});