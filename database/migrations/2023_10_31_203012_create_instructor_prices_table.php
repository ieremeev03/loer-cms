<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('instructor_prices', function (Blueprint $table) {
            $table->id();
            $table->boolean('is_weekend');
            $table->tinyInteger('count');
            $table->double('price');
            $table->timestamps();
            $table->index(['is_weekend', 'count']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('instructor_prices');
    }
};
