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
        Schema::create('infoblock_properties', function (Blueprint $table) {
            $table->id();
            $table->string('infoblock_id');
            $table->string('type');
            $table->string('title');
            $table->string('name');
            $table->string('default');
            $table->integer('sort');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::drop('infoblock_properties', function (Blueprint $table) {

        });
    }
};
