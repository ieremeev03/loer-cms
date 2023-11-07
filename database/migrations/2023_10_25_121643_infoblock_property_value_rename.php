<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('infoblock_property_value', function(Blueprint $table) {
            $table->renameColumn('field_id', 'property_id');
        });
    }


    public function down()
    {
        Schema::table('infoblock_property_value', function(Blueprint $table) {
            $table->renameColumn('property_id', 'field_id');
        });
    }
};
