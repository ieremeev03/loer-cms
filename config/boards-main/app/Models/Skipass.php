<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Skipass extends Model
{
    protected $guarded = ['id', 'created_at', 'updated_at'];

    protected $table = 'skipasses';

    protected $casts = [
        'skipass_data' => 'array',
        'payed' => 'boolean',
        'created_at' => 'datetime:d.m.Y H:i:s',
        'date_visit' => 'date:d.m.Y',
    ];

    const OPERATION_CREATE = 1;
    const OPERATION_TOPUP = 2;

    public function tariff(): BelongsTo
    {
        return $this->belongsTo(Tariff::class, 'tariff_id', 'external_id');
    }
}
