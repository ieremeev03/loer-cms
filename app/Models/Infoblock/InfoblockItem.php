<?php

namespace App\Models\Infoblock;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class InfoblockItem extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function fields()
    {
        return $this->hasMany(InfoblockField::class, 'infoblock_id','id');
    }


}
