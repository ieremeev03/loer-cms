<?php

use App\Models\Discipline;
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
        Schema::table('disciplines', function (Blueprint $table) {
            $table->string('morph')->after('name');
        });
        Discipline::where('id', 1)->update([
            'morph' => 'лыжам'
        ]);
        Discipline::where('id', 2)->update([
            'morph' => 'сноуборду'
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('disciplines', function (Blueprint $table) {
            $table->dropColumn('morph');
        });
    }
};
