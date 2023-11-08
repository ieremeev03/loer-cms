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
        Schema::create('skipasses', function (Blueprint $table) {
            $table->id();
            $table->string('skipass');
            $table->boolean('is_child');
            $table->date('date_visit');
            $table->integer('tariff_id');
            $table->double('price');
            $table->double('sum');
            $table->string('name')->nullable();
            $table->string('phone');
            $table->string('email')->nullable();
            $table->boolean('payed')->default(false);
            $table->string('sber_id')->nullable();
            $table->string('sber_status')->nullable();
            $table->json('skipass_data');
            $table->integer('operation');
            $table->text('qrcode')->nullable();
            $table->timestamp('email_sented')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('skipasses');
    }
};
