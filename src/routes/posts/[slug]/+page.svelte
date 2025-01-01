<script lang="ts">
	import { formatDate } from '$lib/utils'
	import { SITE } from '$lib/config'

	let { data } = $props()

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
	<meta property="og:url" content={SITE.website + "/posts/" + data.meta.slug} />

	<!-- Article Published/Modified time -->
	{#if data.meta.pubDatetime}
		<meta property="article:published_time" content={new Date(data.meta.pubDatetime).toISOString()} />
	{/if}
	{#if data.meta.modDatetime}
		<meta property="article:modified_time" content={new Date(data.meta.modDatetime).toISOString()} />
	{/if}

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={SITE.website + "/posts/" + data.meta.slug} />
	<meta property="twitter:title" content={data.meta.title} />
	<meta property="twitter:description" content={data.meta.description} />
</svelte:head>

<article>
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>Published at {formatDate(new Date(data.meta.pubDatetime).toLocaleDateString())}</p>
	</hgroup>

	<div class="tags">
		{#each data.meta.tags as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>

	<div class="prose">
		<data.content />
	</div>
</article>

<style>
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;

		h1 {
			font-size: var(--size-8);
			max-inline-size: var(--size-content-3);
			text-transform: capitalize;
		}

		h1 + p {
			margin-top: var(--size-2);
			color: var(--text-2);
		}

		.tags {
			display: flex;
			gap: var(--size-3);
			margin-block: var(--size-7) var(--size-3);

			> * {
				padding: var(--size-2) var(--size-3);
				border-radius: var(--radius-round);
			}
		}

		.prose p {
			margin-block: var(--size-4);
		}
	}
</style>
