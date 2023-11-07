<?php

use App\Http\Controllers\InfoblockController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\ModuleController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PageController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

        Route::resource('pages', PageController::class);
        Route::resource('module', ModuleController::class);
        Route::resource('menus', MenuController::class);
        Route::resource('infoblocks', InfoblockController::class);

