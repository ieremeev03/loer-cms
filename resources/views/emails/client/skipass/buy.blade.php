<x-mail::message>
Благодарим вас за выбор горнолыжного курорта «Такман»!

Вы приобрели {{ $skipass->is_kind ? 'детский' : 'взрослый' }} ски-пасс с тарифом: {{ $tariff->title }}

Для получения электронного пропуска в виде пластиковой карты – Вам необходимо подойти на любую из касс ГК «Такман» и предъявить QR-код

<img src="{{ asset('qr/'.$skipass->id.'.png') }}" alt="">
</x-mail::message>