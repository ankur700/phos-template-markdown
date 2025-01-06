<script lang="ts">
	import { page } from '$app/state';
	import { ChevronLeft } from 'lucide-svelte';
	// Remove current url path and remove trailing slash if exists
	let currentUrlPath = $derived(page.url.pathname.replace(/\/+$/, ''));
	let currentPage = $derived(page.url.searchParams.get('page') || '1');

	// Get url array from path
	// eg: /tags/tailwindcss => ['tags', 'tailwindcss']
	let breadcrumbList = $derived(currentUrlPath.split('/').slice(1));
</script>

<nav class="breadcrumb" aria-label="breadcrumb">
	{#if breadcrumbList.length >= 3}
		<div class=" back-button mx-auto flex w-full max-w-3xl justify-start px-2">
			<button
				class="focus-outline mb-2 mt-8 flex hover:opacity-75"
				onclick={() => history.back()}
			>
				<ChevronLeft />
			<span>Go back</span>
			</button>
		</div>
		{:else}
	<ul>
		<li>
			<a href="/">Home</a>
			<span aria-hidden="true">&raquo;</span>
		</li>
			{#each breadcrumbList as breadcrumb, index}
				{#if index + 1 === breadcrumbList.length}
					<li>
						<span
							style={`text-transform: ${index > 0 ? 'capitalize' : 'none'}`}
							aria-current="page"
						>
							<!-- make the last part lowercase in Home > Tags > some-tag -->
							{#if breadcrumb === 'blog'}
								{@html decodeURIComponent(`Blog (page ${currentPage || 1})`)}
							{:else}
								{@html decodeURIComponent(breadcrumb.replace(/-/g, ' '))}
							{/if}
						</span>
					</li>
				{:else}
					<li>
						<a href={`/${breadcrumb}`}>{breadcrumb}</a>
						<span aria-hidden="true">&raquo;</span>
					</li>
				{/if}
			{/each}
		</ul>
		{/if}
</nav>

<style>
	.breadcrumb {
		margin-inline: auto;
		width: 100%;
		max-inline-size: var(--size-content-3);
		margin-block: 0 var(--size-2);

		ul li {
			display: inline;
			a {
				text-decoration: none;
				color: var(--text-2);
				text-transform: capitalize;
			}
			span {
				color: var(--text-2);
			}
			span[aria-hidden='true'] {
				margin-inline: var(--size-1);
			}
		}
		li:not(:last-child) a:hover {
			color: var(--text-1);
		}

		.back-button {
			display: flex;
			justify-content: flex-start;
			/* padding-inline: var(--size-2); */
			width: 100%;
			max-inline-size: var(--size-content-3);
			margin-inline: auto;

			button {
				display: flex;
				background: transparent;
				border: none;
				color: var(--text-2);
				padding: 0;
				cursor: pointer;
				box-shadow: none;
			}

		}
	}
</style>
