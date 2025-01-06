<script lang="ts">
	import Breadcrumbs from '$lib/components/breadcrumbs.svelte';
	import type { Snippet } from 'svelte';
	import { page } from '$app/state';

	interface Props {
		pageTitle: string | null;
		children: Snippet;
	}

	let pageName = $derived(page.url.pathname.replace('/', ''));

	let { pageTitle = null, children }: Props = $props();
</script>

<main id="main-content">
	<!-- <Spacer space="10" /> -->
	{#if !page.error}
		{#if pageTitle !== ''}
			<Breadcrumbs />
		{/if}
		{#if pageTitle}
			<h1>{pageTitle}</h1>
		{/if}
		{#if pageName === 'blog'}
			<p>{'All the articles published in the blog.'}</p>
		{:else if pageName === 'categories'}
			<p>{'All the tags used in the blog.'}</p>
		{:else if pageName === 'search'}
			<p>
				{`Results for search query: `}
				<span class="search__query">
					{page.url.searchParams.get('query')}
				</span>
				{' in the blog.'}
			</p>
		{/if}
	{/if}
	{@render children?.()}
</main>

<style>
	#main-content {
		margin-inline: auto;
		width: 100%;
		min-height: calc(100svh - 6rem);
		max-inline-size: var(--size-content-3);
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

			span {
				background: var(--surface-accent);
				padding-inline: var(--size-2);
				padding-block: var(--size-1);
				color: var(--text-accent);
			}
		}
	}
</style>
