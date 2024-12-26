<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import PageTransition from './transition.svelte';
	import 'open-props/style'
	import 'open-props/normalize'
	import 'open-props/buttons'
	import '../base.css';
	import { page } from '$app/state';
	import { LOCALE, SITE } from '$lib/config';
	const googleSiteVerification = import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION;

	interface Props {
		title?: string;
		author?: string;
		description?: string;
		ogImage?: string;
		canonicalURL?: string;
		pubDatetime?: Date;
		modDatetime?: Date | null;
		scrollSmooth?: boolean;
		children?: any;
		data: any;
	}

	let {
		children,
		data,
		title = SITE.title,
		author = SITE.author,
		description = SITE.desc,
		ogImage = SITE.ogImage,
		// canonicalURL = new URL(page.url.pathname).href,
		pubDatetime,
		modDatetime,
		scrollSmooth = false
	}: Props = $props();
</script>

<svelte:head>
	<!-- <link rel="canonical" href={canonicalURL} /> -->

	<!-- General Meta Tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<meta name="author" content={author} />
	<link rel="sitemap" href="/sitemap-index.xml" />

	<!-- Open Graph / Facebook -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<!-- <meta property="og:url" content={canonicalURL} /> -->

	<!-- Article Published/Modified time -->
	{#if pubDatetime}
		<meta property="article:published_time" content={pubDatetime.toISOString()} />
	{/if}
	{#if modDatetime}
		<meta property="article:modified_time" content={modDatetime.toISOString()} />
	{/if}

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<!-- <meta property="twitter:url" content={canonicalURL} /> -->
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />

	<meta name="theme-color" content="" />

	{#if googleSiteVerification}
		<meta name="google-site-verification" content={googleSiteVerification} />
	{/if}
</svelte:head>

<div class="layout">
	<Header />

	<main>
		<PageTransition url={data.url}>
			{@render children?.()}
		</PageTransition>
	</main>

	<Footer />
</div>

<style>
	.layout {
		height: 100%;
		max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);

		@media (min-width: 1440px) {
			padding-inline: 0;
		}

		main {
			padding-block: var(--size-9);
		}
	}
</style>
