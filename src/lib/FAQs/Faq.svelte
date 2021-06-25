<script>
	export let faq;
	
	let active = false;
	let activeAnswerStyle = 'block';	
	
	function toggleActive() {
		active = !active;	
	}
</script>

<div class:active={active} class="faq mb-4 border transition-all duration-150 ease-in-out">
	<div on:click={toggleActive} class="question z-20 text-gray-100 bg-secondary-800 p-4 cursor-pointer after:empty-content relative">
		<p>{faq.question}</p>
		<div class:rotate-90={active} class="indicator transform transition-rotate origin-center duration-150 ease-in-out rotate absolute right-3 top-2/4 -translate-y-2/4">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
				</svg>
		</div>
	</div>
	<div class:answer--hidden={!active} class:answer--active={active} class="answer z-10 overflow-hidden transition-all transform-gpu duration-150 ease-in-out">
		<p class="z-10">{faq.answer}</p>
	</div>
</div>

<style>
	.answer--hidden {
		@apply -translate-y-10 pt-0 pb-0 pl-4 pr-4 max-h-0 opacity-0;
	}
	.answer--active {
		@apply translate-y-0 p-4 max-h-full opacity-100;
	}
</style>
