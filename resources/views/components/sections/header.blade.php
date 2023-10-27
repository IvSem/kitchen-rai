<?php
use Illuminate\Support\Facades\Auth;
?>
<header class="fixed left-0 top-0 z-10 flex w-full flex-wrap items-center justify-between p-6"
        x-data="{ menuIsOpen: false }"
        @keydown.escape="menuIsOpen = false"
        :class="{ 'shadow-lg bg-indigo-900': menuIsOpen, 'bg-red-800': !menuIsOpen }">
	<!--Logo etc-->
	<div class="mr-6 flex flex-shrink-0 items-center text-white">
		<a class="text-white no-underline hover:text-white hover:no-underline"
			href="#">
			<span class="pl-2 text-2xl"><i class="em em-grinning"></i> Brand McBrandface</span>
		</a>
	</div>

	<button>

	</button>

	<!--Menu-->
	<nav class="w-full flex-grow lg:flex lg:w-auto lg:items-center"
		:class="!menuIsOpen ? 'hidden' : ''"
		@click.away="menuIsOpen = false"
		x-show.transition="true">
		<ul class="list-reset flex-1 items-center justify-end pt-6 lg:flex lg:pt-0">
			<li class="mr-3">
				<a class="inline-block px-4 py-2 text-white no-underline"
					href="#"
					@click="menuIsOpen = false">
					Active
				</a>
			</li>
            <li class="mr-3">
                <a class="hover:text-underline inline-block px-4 py-2 text-gray-600 no-underline hover:text-gray-200"
                   href="#"
                   @click="menuIsOpen = false">link
                </a>
            </li>
			<li class="mr-3">
				<a class="hover:text-underline inline-block px-4 py-2 text-gray-600 no-underline hover:text-gray-200"
					href="#"
					@click="menuIsOpen = false">link
				</a>
			</li>
            <?php if (Auth::check()): ?>
            <form method="POST" action="{{ route('logout') }}">
                @csrf


                <li class="mr-3">
                    <x-dropdown-link :href="route('logout')"
                                     onclick="event.preventDefault();
                                                    this.closest('form').submit();">
                        {{ __('Log Out') }}
                    </x-dropdown-link>
                </li>
            </form>
            <?php else:?>
                <li class="mr-3">
                    <a class="hover:text-underline inline-block px-4 py-2 text-gray-600 no-underline hover:text-gray-200"
                       href="/login"
                       @click="menuIsOpen = false">Login
                    </a>
                </li>
            <?php endif; ?>
		</ul>
	</nav>
</header>


