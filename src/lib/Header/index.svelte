<script lang="ts">
	import { page } from '$app/stores';

	let mobileNavOpen = false;

	function toggleMobileNav() {
		mobileNavOpen = !mobileNavOpen;
	}
</script>

<header>
	<nav class="">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 flex-grow flex-col">
				<div class="flex flex-between justify-between pt-5 pb-5 border-b border-primary-900 relative">
					<div class="flex-shrink-0 flex items-center text-primary-700 font-serif text-2xl">
						<a sveltekit:prefetch href="/">KraussLaw</a>
					</div>
					<div class="hidden flex-grow sm:ml-8 sm:flex sm:space-x-8 uppercase content-end justify-end">
						<a
							sveltekit:prefetch
							href="/"
							class="text-secondary-800 inline-flex items-center px-1 pt-1 text-sm font-semibold"
						>
							Home
						</a>
						<a
							sveltekit:prefetch
							href="/about/"
							class="border-transparent text-secondary-800 hover:text-secondary-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold"
						>
							About
						</a>
						<a
							sveltekit:prefetch
							href="/practice-areas/"
							class="border-transparent text-secondary-800 hover:text-secondary-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold"
						>
							Practice Areas
						</a>
						<a
							sveltekit:prefetch
							href="/faq/"
							class="border-transparent text-secondary-800 hover:text-secondary-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold"
						>
							FAQs
						</a>
						<a
							sveltekit:prefetch
							href="/contact"
							class="border-transparent text-secondary-800 hover:text-secondary-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold"
						>
							Contact
						</a>
					</div>
					<button
						type="button"
						id="mobileNavToggle"
						class="inline-flex items-center justify-center p-2 rounded-md text-primary-800 hover:text-secondary-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-700"
						aria-controls="mobile-menu"
						aria-expanded="false"
						on:click={toggleMobileNav}
					>
						<span class="sr-only">Open main menu</span>
						<!--
            Icon when menu is closed.
 
            Heroicon name: outline/menu
 
            Menu open: "hidden", Menu closed: "block"
          -->
						<svg
							class="block h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
						<!--
            Icon when menu is open.
 
            Heroicon name: outline/x
 
            Menu open: "block", Menu closed: "hidden"
          -->
						<svg
							class="hidden h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
				<div class="-mr-2 flex items-center sm:hidden">
					<!-- Mobile menu button -->
				</div>
			</div>
		</div>

		<div class:nav-visible={mobileNavOpen} class:hidden={!mobileNavOpen} id="mobile-menu">
			<div class="absolute right-0 z-50 pt-2 pb-3 space-y-1 bg-primary-800">
				<!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
				<a
					sveltekit:prefetch
					href="/"
					class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
					>Home</a
				>
				<a
					sveltekit:prefetch
					href="/about/"
					class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
					>About</a
				>
				<a
					sveltekit:prefetch
					href="/practice-areas/"
					class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
					>Practice Areas</a
				>
				<a
					sveltekit:prefetch
					href="/faq/"
					class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
					>FAQs</a
				>
				<a
					sveltekit:prefetch
					href="/contact/"
					class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
					>Contact</a
				>
			</div>
		</div>
	</nav>
</header>
