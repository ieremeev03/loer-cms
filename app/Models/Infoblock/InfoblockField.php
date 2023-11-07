<?php

namespace App\Models\Infoblock;

use App\Models\Menu\MenuItem;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class InfoblockField extends Model
{
    use HasFactory;
    protected $guarded = [];
    public $timestamps = false;


    public function value()
    {
        return $this->hasOne(InfoblockFieldValue::class);
    }

    public function valueField()
    {
        return $this->hasOneThrough(InfoblockField::class, InfoblockFieldValue::class , 'id', 'id');
    }
}
