<x-mail::message>
Благодарим вас за выбор горнолыжного курорта «Такман»!

Вы забронировали занятия по {{ $discipline->morph }} у инструктора {{ $instructor->name }}.

Дата и время занятия: {{ $order->date }}, {{ $times }}
</x-mail::message>