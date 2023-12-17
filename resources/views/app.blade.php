<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css">
        <link rel="stylesheet" href="assets/css/style.css?v=124">
        <link rel="shortcut icon" href="/favicon-32x32.png" type="image/png">
        <link rel="apple-touch-icon"  href="/apple-touch-icon.png" >
        <meta name="description" content="Takman">
        <meta name="keywords" content="Takman">
        <meta name="robots" content="index, follow">
        <link rel="canonical" href="#">
        <meta property="og:title" content="Takman">
        <meta property="og:description" content="Takman">
        <meta property="og:image" content="assets/img/logo.svg">
        <meta name="twitter:title" content="Takman">
        <meta name="twitter:description" content="Takman">
        <meta name="twitter:image" content="assets/img/logo.svg">
        <title inertia>{{ config('app.name', 'Такман') }}</title>


        <!-- Scripts -->
        @routes
        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead

    </head>
    <body class="font-sans antialiased">
        @inertia


    </body>
    <script type="text/javascript" src="https://bookonline24.ru/widget.js" />
</html>
