<script lang="ts">
	import { SITE } from '$lib';
	import Tag from '$lib/components/Tag.svelte';
	import DateTime from '$lib/components/dateTime.svelte';
	import ShareLinks from '$lib/components/ShareLinks.svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { attachCopyButtons, getTableOfContents } from '$lib';

	let { data }: { data: PageData } = $props();

	onMount(() => {
		attachCopyButtons();
		getTableOfContents();
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

<div class="wrapper">
	<article>
		<hgroup>
			<h1>{data.meta.title}</h1>

			{#if data.meta.cover}
				<img class="cover-image" src={data.meta.cover} alt={data.meta.title} />
			{/if}

			<DateTime
				pubDatetime={data.meta.publishedDate}
				modDatetime={data.meta.modifiedDate}
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
</div>

<style>
	.wrapper {
		position: relative;
		width: 100%;
		height: 100%;

		article {
			max-inline-size: var(--size-content-3);
			margin-inline: auto;
			margin-block: var(--size-7);

			h1 {
				text-transform: capitalize;
			}

			.cover-image {
				width: 100%;
				aspect-ratio: var(--ratio-widescreen);
			}

			.prose {
				margin-block: var(--size-7);
			}

			.tags {
				display: flex;
				gap: var(--size-3);
				margin-block: 0 var(--size-3);
				flex-wrap: wrap;
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
	}
</style>
