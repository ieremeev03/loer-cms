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
        Schema::create('tariffs', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->boolean('is_child')->nullable();
            $table->boolean('is_weekend')->nullable();
            $table->double('price');
            $table->integer('external_id')->unique();
            $table->boolean('visible')->default(true);
            $table->timestamps();
            $table->index(['title', 'is_child', 'is_weekend']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tariffs');
    }
};
