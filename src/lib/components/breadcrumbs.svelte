<script lang="ts">
	import { page } from '$app/state';
	// Remove current url path and remove trailing slash if exists
	let currentUrlPath = $derived(page.url.pathname.replace(/\/+$/, ''));
	let currentPage = $derived(page.url.searchParams.get('page') || '1');

	// Get url array from path
	// eg: /tags/tailwindcss => ['tags', 'tailwindcss']
	let breadcrumbList = $derived(currentUrlPath.split('/').slice(1));
</script>

<nav class="breadcrumb" aria-label="breadcrumb">
	<ul>
		<li>
			<a href="/">Home</a>
			<span aria-hidden="true">&raquo;</span>
		</li>
		{#each breadcrumbList as breadcrumb, index}
			{#if index + 1 === breadcrumbList.length}
				<li>
					<span style={`text-transform: ${index > 0 ? 'capitalize' : 'none'}`} aria-current="page">
						<!-- make the last part lowercase in Home > Tags > some-tag -->
						{#if breadcrumb === 'posts'}
							{@html decodeURIComponent(`Posts (page ${currentPage || 1})`)}
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
</nav>

<style>
	.breadcrumb {
		margin-inline: auto;
		width: 100%;
		max-inline-size: var(--width-medium);
		margin-block: 0 var(--size-2);
	}
	.breadcrumb ul li {
		display: inline;
	}
	.breadcrumb ul li a {
		text-decoration: none;
		color: var(--text-2);
		text-transform: capitalize;
	}
	.breadcrumb ul li span {
		color: var(--text-2);
	}
	.breadcrumb ul li span[aria-hidden='true'] {
		margin-inline: var(--size-1);
	}
	.breadcrumb ul li:not(:last-child) a:hover {
		color: var(--text-1);
	}
</style>
