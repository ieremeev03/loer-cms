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
        Schema::table('infoblocks', function (Blueprint $table) {
            $table->text('content')->nullable()->after('title');
            $table->string('button_text')->nullable();
            $table->string('button_link')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('infoblocks', function (Blueprint $table) {

        });
    }
};
