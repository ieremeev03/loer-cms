<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class Instructor extends Model
{
    use HasFactory;

    public function disciplineIds(): HasMany
    {
        return $this->hasMany(InstructorDiscipline::class);
    }

    public function schedule(): HasMany
    {
        return $this->hasMany(Schedule::class);
    }

    public function disciplines(): HasManyThrough
    {
        return $this->hasManyThrough(
            Discipline::class,
            InstructorDiscipline::class,
            'instructor_id',
            'id',
            'id',
            'discipline_id',
        )->orderBy('disciplines.name');
    }

}
