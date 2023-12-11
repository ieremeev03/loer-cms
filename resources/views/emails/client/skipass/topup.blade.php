<x-mail::message>
Благодарим вас за выбор горнолыжного курорта «Такман»!

Вы пополнили ски-пасс № {{ $skipass->skipass }} тарифом: {{ $tariff->title }}

Остаток тарифов:

<x-mail::table>
| Информация           | Остаток               | Действует&nbsp;с    | Действует&nbsp;по  |
| -------------------- |:---------------------:| --------------------| -------------------|
@foreach ($installations as $item)
| {{ $item['title'] }} | {{ $item['amount'] }} | {{ $item['from'] }} | {{ $item['to'] }}  |
@endforeach
</x-mail::table>

<img src="{{ asset('qr/'.$skipass->id.'.png') }}" alt="">
</x-mail::message>
