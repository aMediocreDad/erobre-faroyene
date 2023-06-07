<script>
	export let data;

	$: component = data.component;
</script>

<div class="prose dark:prose-invert prose-img:my-0 max-w-none">
	<svelte:component this={component} />
</div>
