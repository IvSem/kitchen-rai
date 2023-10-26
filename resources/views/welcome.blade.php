<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite('resources/css/app.css')
    @livewireStyles
</head>
<body>
<h1 class="text-3xl font-bold underline">
    Hello world!
</h1>


<div x-data="{ open: false }">
    <button @click="open = ! open">Toggle Content</button>
    <div x-show="open">
        Content...
    </div>
</div>

@livewireScripts
</body>
</html>
