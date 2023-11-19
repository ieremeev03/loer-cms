<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Certificate extends Model
{
    protected $guarded = ['id', 'created_at', 'updated_at'];

    protected $table = 'certificates';

    protected $casts = [
        'payed' => 'boolean',
        'created_at' => 'datetime:d.m.Y H:i:s',
    ];

}
