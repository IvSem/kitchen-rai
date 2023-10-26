<!doctype html>
<html lang="uk" class="scroll-smooth">
<x-sections.head />
<body>
<div class="wrapper ">
        <x-sections.header />
    	@yield('content')
    	<x-sections.footer />
</div>
	{{-- <x-popups.popup /> --}}
	{{-- <x-popups.order/> --}}
	@livewireScripts
    @vite('resources/assets/js/app.js')
</body>

</html>

