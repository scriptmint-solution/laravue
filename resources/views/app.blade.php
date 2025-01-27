<html>

<head>
    <title>Laravel 11</title>
    @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    @endif
</head>

<body>
    <div class="container">
        <h1>Hello World</h1>
    </div>
</body>

</html>
