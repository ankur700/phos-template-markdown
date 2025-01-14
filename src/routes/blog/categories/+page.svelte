<script lang="ts">
	import { SITE } from '$lib/config.js';
	import Tag from '$lib/components/Tag.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{SITE.title + ' | Tags'}</title>
	<meta property="og:type" content="categories" />
	<meta property="og:title" content={'Tags'} />
	<meta name="title" content={'Tags'} />
	<meta name="description" content={'All the tags used in the blog posts.'} />
	<meta name="author" content={SITE.author} />

	<!-- Open Graph / Facebook -->
	<meta property="og:title" content={'Tags'} />
	<meta property="og:description" content={'All the tags used in the blog posts.'} />
	<meta property="og:url" content={SITE.website + '/tags'} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={SITE.website + '/tags'} />
	<meta property="twitter:title" content={'Tags'} />
	<meta property="twitter:description" content={'All the tags used in the blog posts.'} />
</svelte:head>

<PageWrapper>
	<div class="tags">
		{#each data.tags as tag}
			<Tag {tag} style="tag" />
		{/each}
	</div>
</PageWrapper>

<style>
	.tags {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: var(--size-3);
	}
</style>
