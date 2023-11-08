<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\InstructorController;
use App\Http\Controllers\Admin\InstructorPriceController;
use App\Http\Controllers\InfoblockController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\ModuleController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PageController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Admin\SkipassController as AdminSkipassController;

        Route::resource('pages', PageController::class);
        Route::resource('module', ModuleController::class);
        Route::resource('menus', MenuController::class);
        Route::resource('infoblocks', InfoblockController::class);

        Route::prefix('instructors')->controller(InstructorController::class)->group(function () {
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

        Route::get('skipasses', [AdminSkipassController::class, 'index'])->name('skipasses');
        Route::post('/get-table', [DashboardController::class, 'index'])->name('get-table');


