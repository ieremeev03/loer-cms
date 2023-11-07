<?php

use App\Http\Controllers\InfoblockController;
use App\Http\Controllers\InstructorController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\ModuleController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PageController;
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

require __DIR__.'/auth.php';

Route::get('/', [PageController::class, 'home']);

Route::middleware('auth')->group(function () {
    Route::get('/admin', [PageController::class, 'index'])->name('pages.index');

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
Route::middleware('auth')->post('/fileUpload', [InfoblockController::class, 'upload']);
Route::get('/{pSlug}', [PageController::class, 'getPage'])->name('pages.getPage');





