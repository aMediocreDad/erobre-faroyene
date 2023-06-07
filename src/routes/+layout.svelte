<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-modern.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { AppShell } from '@skeletonlabs/skeleton';
	import { i } from '@inlang/sdk-js';

	import { page } from '$app/stores';

	export let data;

	$: path = $page.route.id;
	$: routeIndex = parseInt($page.params.index?.match(/\d+/g)?.[0] ?? '0');

	$: prevSlide = Math.max(routeIndex - 1, 0) || '';
	$: nextSlide = data.numSlides > routeIndex ? routeIndex + 1 : '';
</script>

<svelte:window
	on:keydown={(e) => {
		if (e.key === 'ArrowRight' || e.key === 'j' || e.key === 'l' || e.key === ' ')
			window.location.pathname = `/${nextSlide}`;
		else if (e.key === 'ArrowLeft' || e.key === 'k' || e.key === 'h' || e.key === 'Backspace')
			window.location.pathname = `/${prevSlide}`;
	}}
/>
<AppShell>
	<!-- Main content -->
	<slot />

	<!-- Footer -->
	<footer slot="footer">
		{#if path === '/[index]'}
			<nav class="flex justify-between max-w-2xl mx-auto text-4xl">
				<a href="/{prevSlide}">&DoubleLeftArrow;</a>
				<a href="/{nextSlide}">&DoubleRightArrow;</a>
			</nav>
		{/if}
		<p class="text-center text-gray-400 select-none">
			{new Date().getFullYear()} &copy; {i('companyName')}
		</p>
	</footer>
</AppShell>
