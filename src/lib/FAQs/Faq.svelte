<script>
	export let faq;
</script>

<div class="faq border mb-4">
	<div class="question text-gray-100 bg-secondary-800 p-4 cursor-pointer">
		<p>{faq.question}</p>
	</div>
	<div class="answer p-4">
		<p>{faq.answer}</p>
	</div>
</div>
