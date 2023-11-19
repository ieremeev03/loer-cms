<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateSkipassRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'date_visit' => 'required',
            'tariff_id' => 'required',
            'name' => 'required',
            'phone' => 'required',
            'email' => 'required',
            'is_child' => 'required',
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
            'skipass' => 'Введите скипасс',
            'date_visit' => 'Введите дату катания',
            'tariff_id' => 'Выберите тариф',
            'phone' => 'Введите телефон',
            'email' => 'Введите e-mail',
        ];
    }
}
