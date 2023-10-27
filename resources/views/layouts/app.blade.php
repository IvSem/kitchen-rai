<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
<x-sections.head/>

<body>
<div class="wrapper ">
    <x-sections.header/>
    @yield('content')
    <x-sections.footer/>
</div>

@livewireScripts
@vite('resources/assets/js/app.js')
</body>
</html>
