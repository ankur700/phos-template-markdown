<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import PageTransition from './transition.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
	import Main from '$lib/components/Main.svelte';
	import { backToTop } from '$lib/utils';
	import { ChevronUp } from 'lucide-svelte';

	import '../base.css';
	import { page } from '$app/state';
	import { LOCALE, SITE } from '$lib/config';

	const googleSiteVerification = import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION;

	let pageTitle = $derived(
		page.url.pathname.split('/').length > 2 ? null : page.url.pathname.split('/')[1]
	);





	const { children, data } = $props();
	let showBackToTopButton: boolean = $state(false);

	function scrollListener() {
		if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
			showBackToTopButton = true;
		} else {
			showBackToTopButton = false;
		}
	}

	$effect(() => {
		window.addEventListener('scroll', scrollListener);
		return () => window.removeEventListener('scroll', scrollListener);
	});
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

<Spacer space="10" />

<Main {pageTitle}>
	<PageTransition url={data.url}>
		{@render children?.()}
	</PageTransition>
</Main>

<Footer />
{#if showBackToTopButton}
	<button id="back-to-top" class="handdrawn__button" onclick={backToTop}>
		<ChevronUp />
		<span>Back to Top</span>
	</button>
{/if}

<style>
	button {
		position: fixed;
		z-index: var(--layer-important);
		bottom: 5rem;
		right: 3rem;
		animation:
			var(--animation-fade-in) forwards,
			var(--animation-slide-in-up);
		animation-timing-function: var(--ease-spring-3);
		animation-duration: 1s;
		color: var(--color-text-1);

		&:hover {
			opacity: 0.8;
			color: var(--brand);
		}
	}
</style>
