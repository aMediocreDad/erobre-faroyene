<script>
	export let data;

	$: component = data.component;
</script>

<div class="prose dark:prose-invert max-w-none">
	<svelte:component this={component} />
</div>
