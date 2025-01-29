<!doctype html>
<html>

<head>
    <title>Laravel 11</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body>
    <div id="root">
        {{-- <Testing /> --}}
        <router-view></router-view>
    </div>
</body>

</html>
