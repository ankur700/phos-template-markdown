<script lang="ts">
	import { SITE } from '$lib/config';
	import Tag from '$lib/components/Tag.svelte';
	import DateTime from '$lib/components/dateTime.svelte';
	import ShareLinks from '$lib/ShareLinks.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { attachCopyButtons } from '$lib/utils';

	let { data }: { data: PageData } = $props();

	onMount(() => {
		attachCopyButtons();
	});
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta name="title" content={data.meta.title} />
	<meta name="description" content={data.meta.description} />
	<meta name="author" content={data.meta.author} />
	<link rel="sitemap" href="/sitemap-index.xml" />

	<!-- Open Graph / Facebook -->
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:url" content={SITE.website + '/posts/' + data.meta.slug} />

	<!-- Article Published/Modified time -->
	{#if data.meta.pubDatetime}
		<meta
			property="article:published_time"
			content={new Date(data.meta.pubDatetime).toISOString()}
		/>
	{/if}
	{#if data.meta.modDatetime}
		<meta
			property="article:modified_time"
			content={new Date(data.meta.modDatetime).toISOString()}
		/>
	{/if}

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={SITE.website + '/posts/' + data.meta.slug} />
	<meta property="twitter:title" content={data.meta.title} />
	<meta property="twitter:description" content={data.meta.description} />
</svelte:head>

<article>
	<hgroup>
		<h1>{data.meta.title}</h1>
		<DateTime
			pubDatetime={data.meta.pubDatetime}
			modDatetime={data.meta.modDatetime}
			readingTime={data.meta.readingTime.text}
		/>
	</hgroup>

	<div class="prose">
		<data.content />
	</div>
	<div class="tags">
		{#each data.meta.tags as category}
			<Tag tag={category} />
		{/each}
	</div>
	<div class="share__links">
		<ShareLinks />
	</div>
</article>

<style>
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
		margin-block: var(--size-7);

		h1 {
			font-size: var(--size-fluid-3);
			max-inline-size: var(--size-content-3);
			text-transform: capitalize;
			text-wrap: balance;
		}

		.prose {
			margin-block: var(--size-7);
		}

		.tags {
			display: flex;
			gap: var(--size-3);
			margin-block: 0 var(--size-3);
		}

		.share__links {
			width: 100%;
			max-inline-size: var(--size-content-3);
			display: flex;
			align-items: center;
			justify-content: flex-start;
			margin-block: var(--size-7);
		}
	}
</style>
