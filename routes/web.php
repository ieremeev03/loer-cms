<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\InstructorPriceController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InfoblockController;
use App\Http\Controllers\Admin\InstructorController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\ModuleController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\SkipassController;
use App\Http\Controllers\Admin\SkipassController as AdminSkipassController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\InstructorController as FrontInstructorController;
use App\Http\Controllers\CertificateController as FrontCertificateController;
use App\Http\Controllers\Admin\CertificateController;
use App\Mail\SkipassShipped;
use App\Models\Skipass;



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

require __DIR__.'/auth.php';

Route::get('/', [PageController::class, 'home']);

Route::get('/mailable', function () {
    $skipass = Skipass::find(109);
    $filePath = public_path('/qr/'.$skipass->id.'.png');

    //dd($filePath);
    return new SkipassShipped($skipass, $filePath);
});


Route::middleware('auth')->group(function () {
    Route::get('/admin', [PageController::class, 'index'])->name('pages.index');

    Route::resource('/admin/pages', PageController::class);
    Route::resource('/admin/menus', MenuController::class);
    Route::resource('/admin/infoblocks', InfoblockController::class);

    Route::prefix('/admin/instructors')->controller(InstructorController::class)->group(function () {
        Route::get('/', 'index')->name('instructors');
        Route::get('edit/{id?}', 'edit')->name('instructor.edit');
        Route::post('save', 'save')->name('instructor.save');
        Route::post('schedule', 'schedule')->name('instructor.schedule');
        Route::get('table', 'table')->name('instructor.table');
        Route::prefix('price')->controller(InstructorPriceController::class)->group(function () {
            Route::get('/', 'index')->name('instructor.price');
            Route::post('save', 'save')->name('price.save');
        });
    });

    Route::get('/admin/skipasses', [AdminSkipassController::class, 'index'])->name('skipasses');
    Route::post('/admin/get-table', [DashboardController::class, 'index'])->name('get-table');

    Route::prefix('/admin/certificates')->controller(CertificateController::class)->group(function () {
        Route::get('/', 'index')->name('certificates');
    });


});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::middleware('auth')->get('/InfoBlocks/getProperties', [InfoblockController::class, 'getProperties']);
Route::middleware('auth')->get('/InfoBlocks/getItems', [InfoblockController::class, 'getItems']);
Route::middleware('auth')->post('/InfoBlocks/addItems', [InfoblockController::class, 'addItems']);
Route::middleware('auth')->get('/InfoBlocks/copy', [InfoblockController::class, 'copy']);
Route::middleware('auth')->post('/fileUpload', [InfoblockController::class, 'upload']);

Route::get('/instructor/{id}', [FrontInstructorController::class, 'getById']);
Route::post('/get-instructors', [FrontInstructorController::class, 'getInstructors']);
Route::post('/get-times', [FrontInstructorController::class, 'getTimes']);
Route::post('/add-order', [FrontInstructorController::class, 'addOrder']);

Route::get('/payment-success', function () {
    return Inertia::render('Payment/Success');
})->name('payment-success');
Route::get('/payment-error', function () {
    return Inertia::render('Payment/Error');
})->name('payment-error');
Route::any('/payment-status', [FrontInstructorController::class, 'paymentStatus'])->name('payment-status');

Route::post('/get-card-price', [SkipassController::class, 'getCardPrice'])->name('get-card-price');
Route::post('/get-tariffs', [SkipassController::class, 'getTariffs'])->name('get-tariffs');
Route::post('/topup-skipass', [SkipassController::class, 'topup'])->name('topup-skipass');
Route::post('/create-skipass', [SkipassController::class, 'create'])->name('create-skipass');
Route::get('/get-disciplines', [FrontInstructorController::class, 'index'])->name('get-disciplines');
Route::post('/buy-certificate', [FrontCertificateController::class, 'buy'])->name('buy-certificate');
Route::get('/test', [FrontInstructorController::class, 'test']);
Route::post('/skipass-info', [SkipassController::class, 'getInfo'])->name('skipass-info');

Route::get('/{pSlug}', [PageController::class, 'getPage'])->name('pages.getPage');






