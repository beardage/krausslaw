<script>
	export let faq;
	
	let active = false;
	let activeAnswerStyle = 'block';	
	
	function toggleActive() {
		active = !active;	
	}
</script>

<div class:active={active} class="faq border mb-4">
	<div on:click={toggleActive} class="question text-gray-100 bg-secondary-800 p-4 cursor-pointer">
		<p>{faq.question}</p>
	</div>
	<div class:hidden={!active} class="answer p-4">
		<p>{faq.answer}</p>
	</div>
</div>
