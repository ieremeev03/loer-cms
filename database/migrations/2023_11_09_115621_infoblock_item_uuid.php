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
        Schema::table('infoblock_items', function (Blueprint $table) {
            $table->string('infoblock_bunch')->nullable();
        });

        Schema::table('page_infoblock', function (Blueprint $table) {
            $table->string('bunch')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
