<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Такман') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            var lazyVideos = [].slice.call(document.querySelectorAll("video[preload='none']"));
            console.log(lazyVideos)

            if ("IntersectionObserver" in window) {
                var videoObserver = new IntersectionObserver(function(entries, observer) {
                    entries.forEach(function(video) {
                        if (video.isIntersecting) {
                            var source = video.target.querySelector('source');
                            source.src = source.dataset.src;
                            video.target.load();
                            video.target.play();
                            videoObserver.unobserve(video.target);
                        }
                    });
                });

                lazyVideos.forEach(function(lazyVideo) {
                    videoObserver.observe(lazyVideo);
                });
            } else {
                // Обратный вызов для браузеров без поддержки IntersectionObserver
                lazyVideos.forEach(function(lazyVideo) {
                    var source = lazyVideo.querySelector('source');
                    source.src = source.dataset.src;
                    lazyVideo.load();
                    lazyVideo.play();
                });
            }
        });
    </script>
</html>
