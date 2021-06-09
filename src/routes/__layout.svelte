<script lang="ts">
	import Header from '$lib/Header/index.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<div class="container mx-auto grid grid-cols-3 gap-4">
		<div>
			<a class="block" href="/about/">About</a>
			<a class="block" href="/faq/">Frequently Asked Questions</a>
			<a class="block" href="/contact/">Contact</a>
		</div>
		<div>
			<p>Test address<br>
			1234 N. test address drive<br>
			tucson, arizona 12345</p>
		</div>
		<div>
			<a class="block" href="#">Facebook</a>
			<a class="block" href="#">Instagram</a>
			<a class="block" href="#">Linkedin</a>
		</div>
	</div>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
