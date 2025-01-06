<script lang="ts">
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import { SOCIALS, SITE } from '$lib/config';
	import Socials from '$lib/components/Socials.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
	import { Rss } from 'lucide-svelte';
	import type { Post } from '$lib/types';
	import Card from '$lib/components/card.svelte';
	import { ArrowRight } from 'lucide-svelte';

	const socialCount = SOCIALS.filter((social) => social.active).length;

	let featuredPosts: Post[] = $state([]);
	let recentPosts: Post[] = $state([]);

	$effect(() => {
		getFeaturedPosts();
		getRecentPosts();
	})

	async function getFeaturedPosts() {
		const res = await fetch(`/api/posts?page=1&limit=3&featured=true`);
		const featuredPostsData = await res.json();
		featuredPosts = featuredPostsData.posts;
	}

	async function getRecentPosts() {
		const res = await fetch(`/api/posts?page=1&limit=${SITE.postsPerPage}`);
		const recentPostsData = await res.json();
		recentPosts = recentPostsData.posts.slice(0, 3);
	}
</script>

<PageWrapper>
	<section id="hero">
		<div class="section-title">
			<h1>{SITE.title}</h1>
			<a target="_blank" href="/rss.xml" class="rss-link" aria-label="rss feed" title="RSS Feed">
				<Rss style="width: var(--size-7); height: var(--size-7)" />
				<span class="sr-only">RSS Feed</span>
			</a>
		</div>

		<p class="prose">
			But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
			was born and I will give you a complete account of the system, and expound the actual
			teachings of the great explorer of the truth, the master-builder of human happiness.
		</p>

		<p class="prose">
			No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those
			who do not know how to pursue pleasure rationally encounter consequences that are extremely
			painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
			because it is pain, but because occasionally circumstances occur in which toil and pain can
			procure him some great pleasure.
		</p>

		{#if socialCount > 0}
			<div class="social-wrapper">
				<div class="social-links">Social handles:</div>
				<Socials />
			</div>
		{/if}
	</section>

	<Spacer space="11" />

	{#if featuredPosts.length > 0}
		<section id="featured">
			<h2 class="section-header">Featured</h2>

			<div class="list">
				{#each featuredPosts as post}
					<Card {post} showDate={false} />
				{/each}
			</div>
		</section>
	{/if}

	<Spacer space="11" />

	<section id="recent-posts">
		<h2 class="section-header">Recent Posts</h2>
		<div class=" list">
			{#each recentPosts as post}
				<Card {post} showDate={false} />
			{/each}
		</div>
		<div class="all-posts-btn-wrapper">
			<LinkButton href="/blog">
				<button>
					All Posts
					<ArrowRight style="width: var(--size-4); height: var(--size-4);" />
				</button>
				</LinkButton>
		</div>
	</section>
</PageWrapper>

<style>
	#hero {
		.section-title {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			gap: var(--size-5);
			margin-bottom: var(--size-4);

			h1 {
				font-size: var(--size-7);
				font-weight: 700;
				margin: 0;
			}

			a {
				color: var(--color-text);
				transition: color 0.2s ease-in-out;

				&:hover {
					color: var(--brand);
				}
			}
		}
		p:not(last-child) {
			margin-bottom: var(--size-6);
			max-inline-size: var(--size-content-3);
		}
	}
	#featured .list,
	#recent-posts .list {
		display: flex;
		flex-direction: column;
		gap: var(--size-3);
	}

	.section-header {
		font-size: var(--size-6);
		font-weight: 700;
		margin-block: 0 var(--size-4);
	}

	#recent-posts .all-posts-btn-wrapper {
		text-align: center;
		margin-block: var(--size-4);
	}

	.social-wrapper {
		display: flex;
		align-items: center;
		gap: var(--size-2);
		margin-top: var(--size-4);
	}
</style>
