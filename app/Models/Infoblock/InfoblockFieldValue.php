<?php

namespace App\Models\Infoblock;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InfoblockFieldValue extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $table = "infoblock_field_value";


    public function info()
    {
        return $this->belongsTo(InfoblockField::class);
    }
}
