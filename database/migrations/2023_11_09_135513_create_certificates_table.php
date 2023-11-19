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
        Schema::create('certificates', function (Blueprint $table) {
            $table->id();
            $table->string('buyer');
            $table->string('recipient');
            $table->string('phone');
            $table->string('email');
            $table->string('nominal');
            $table->boolean('payed')->default(false);
            $table->string('sber_id')->nullable();
            $table->string('sber_status')->nullable();
            $table->timestamp('email_sented')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('certificates');
    }
};
