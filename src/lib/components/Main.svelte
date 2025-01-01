<script lang="ts">
	import Breadcrumbs from '$lib/components/breadcrumbs.svelte';

	let { pageTitle = null, pageDescription = null, children } = $props();
</script>

<main id="main-content">
	<!-- <Spacer space="10" /> -->
	{#if pageTitle !== ''}
		<Breadcrumbs />
	{/if}
	{#if pageTitle}
		<h1>{pageTitle}</h1>
	{/if}
	{#if pageDescription}
		<p>{pageDescription}</p>
	{/if}
	{@render children?.()}
</main>

<style>
	#main-content {
		margin-inline: auto;
		width: 100%;
		min-height: calc(100vh - 6rem);
		max-inline-size: var(--width-medium);
		padding-block: var(--size-6) var(--size-4);
		padding-inline: var(--size-4);

		h1 {
			font-size: var(--size-fluid-3);
			font-weight: 600;
			text-transform: capitalize;
		}
		p {
			margin-block: var(--size-1) var(--size-3);
			font-style: italic;
		}
	}
</style>
