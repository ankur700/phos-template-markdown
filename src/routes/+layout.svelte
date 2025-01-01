<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import PageTransition from './transition.svelte';

	import Main from '$lib/components/Main.svelte';

	import '../base.css';
	import { page } from '$app/state';
	import { LOCALE, SITE } from '$lib/config';
	const googleSiteVerification = import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION;

	let pageTitle = $derived(
		page.url.pathname.split('/').length > 2 ? null : page.url.pathname.split('/')[1]
	);
	let pageDescription = $derived(
		page.url.pathname.replace('/', '') === 'posts'
			? 'All the articles published in the blog.'
			: page.url.pathname.replace('/', '') === 'tags'
				? 'All the tags used in the blog.'
				: page.url.pathname.replace('/', '') === 'search'
					? 'Search for articles in the blog.'
					: null
	);

	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="canonical" href={SITE.website} />

	<!-- General Meta Tags -->
	<title>{SITE.title}</title>
	<meta name="title" content={SITE.title} />
	<meta name="description" content={SITE.desc} />
	<meta name="author" content={SITE.author} />

	<!-- Open Graph / Facebook -->
	<meta property="og:title" content={SITE.title} />
	<meta property="og:description" content={SITE.desc} />
	<meta property="og:url" content={SITE.website} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={SITE.website} />
	<meta property="twitter:title" content={SITE.title} />
	<meta property="twitter:description" content={SITE.desc} />

	<meta name="theme-color" content="" />

	{#if googleSiteVerification}
		<meta name="google-site-verification" content={googleSiteVerification} />
	{/if}
</svelte:head>

<Header activeNav={page.url.pathname.replace('/', '')} />

<Main {pageTitle} {pageDescription}>
	<PageTransition url={data.url}>
		{@render children?.()}
	</PageTransition>
</Main>

<Footer />

