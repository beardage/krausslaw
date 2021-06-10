<script lang="ts">
	import { page } from '$app/stores';
</script>

<header class="container mx-auto flex">
	<div class="logo">
		<a class="p-4" href="/">KraussLaw</a>
	</div>
	<nav>
		<ul class="flex justify-start uppercase">
			<li class="inline-block" class:active={$page.path === '/'}><a class="p-4" sveltekit:prefetch href="/">Home</a></li>
			<li class="inline-block" class:active={$page.path === '/about'}><a class="p-4" sveltekit:prefetch href="/about">About</a></li>
			<li class="inline-block" class:active={$page.path === '/faq'}><a class="p-4" sveltekit:prefetch href="/faq">Frequently Asked Questions</a></li>
			<li class="inline-block" class:active={$page.path === '/contact'}><a class="p-4" sveltekit:prefetch href="/contact">Contact</a></li>
		</ul>
	</nav>

</header>

