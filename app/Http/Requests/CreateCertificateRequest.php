<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateCertificateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'buyer' => 'required|max:255',
            'recipient' => 'required|max:255',
            'phone' => 'required',
            'email' => 'required|max:255',
            'nominal' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            'buyer' => 'Введите ваши ФИО',
            'recipient' => 'Введите ФИО получателя сертификата',
            'phone' => 'Введите телефон',
            'email' => 'Введите email',
            'nominal' => 'Выберите номинал',
        ];
    }
}
