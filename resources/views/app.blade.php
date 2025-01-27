<!doctype html>
<html>

<head>
    <title>Laravel 11</title>
    @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    @endif
</head>

<body>
    <h1 class="text-3xl font-bold text-red-500 underline">
        Hello world!
    </h1>
</body>

</html>
