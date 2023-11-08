<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'max:255',
            'phone' => 'required',
            'email' => 'max:255',
            'date' => 'required',
            'time_ids' => 'required',
            'discipline_id' => 'required',
            'instructor_id' => 'required',
            'selected_count' => 'required',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'name' => 'Введите имя',
            'phone' => 'Введите телефон',
            'email' => 'Введите email',
            'date' => 'Выберите дату',
            'time_ids' => 'Выберите время',
            'discipline_id' => 'Выберите дисциплину',
            'instructor_id' => 'Выберите инструктора',
            'selected_count' => 'Выберите количество участников',
        ];
    }
}
