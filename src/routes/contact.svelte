<script context="module">
	import { browser, dev } from '$app/env';
    
	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<script lang="ts">
    import Contact from '$lib/Contact/index.svelte';
</script>


<svelte:head>
	<title>Contact</title>
</svelte:head>

<div class="content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
	<h1 class="text-gray-300 text-center text-3xl">Contact</h1>
    <Contact/>
</div>

