<script>
	export let data;

	$: component = data.component;
</script>

<main class="prose prose-2xl">
	<svelte:component this={component} />
</main>
