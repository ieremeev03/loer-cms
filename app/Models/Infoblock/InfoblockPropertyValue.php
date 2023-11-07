<?php

namespace App\Models\Infoblock;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class InfoblockPropertyValue extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $table = "infoblock_property_value";


}
