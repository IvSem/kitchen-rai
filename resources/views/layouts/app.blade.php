<!doctype html>
<html class="scroll-smooth"
	x-data="{ darkMode: $persist('auto').as('darkMode') }"
	:class="{
	    'dark': darkMode === true ||
	        (darkMode === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)
	}"
	lang="uk">
<x-sections.head />

<body class="antialiased">
	<div class="wrapper ">
		<x-sections.header />
		@yield('content')
		<x-sections.footer />
	</div>
	{{-- <x-popups.popup /> --}}
	{{-- <x-popups.order/> --}}
	@livewireScripts
	@vite('resources/assets/js/app.js')

	<x-cookies />
	<x-theme-toggle />
</body>

</html>

