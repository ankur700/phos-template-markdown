<script lang="ts">
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import { SITE } from '$lib';
	import Spacer from '$lib/components/Spacer.svelte';
	import SimplePost from '$lib/components/Post.svelte';
	import { ArrowRight } from 'lucide-svelte';

	let featuredPosts: Post[] = $state([]);
	let recentPosts: Post[] = $state([]);

	$effect(() => {
		getFeaturedPosts();
		getRecentPosts();
	});

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
		<h1>Introduction</h1>

		<p class="prose">
			A minimal blog template using <a
				href="https://github.com/ankur700/phos-template-markdown"
				target="_blank">sveltekit</a
			>, markdown(MDSVEX) provided in sveltekit and
			<a href="https://open-props.style/" target="_blank">open-props</a>.
		</p>

		<p class="prose">
			Phos is a minimal, responsive, accessible and SEO-friendly sveltekit blog template. This theme
			follows best practices and provides accessibility out of the box. Light and dark mode are
			supported by default with easy customization options. Read the blog posts or check <a
				href="https://github.com/ankur700/phos-template-markdown#">README</a
			> for more info.
		</p>
	</section>

	<Spacer space="10" />

	{#if featuredPosts.length > 0}
		<section id="featured">
			<h2 class="section-header">Featured</h2>

			<div class="list">
				{#each featuredPosts as post}
					<SimplePost {post} showDate={false} />
				{/each}
			</div>
		</section>
	{/if}

	<Spacer space="10" />

	<section id="recent-posts">
		<h2 class="section-header">Recent Posts</h2>
		<div class=" list">
			{#each recentPosts as post}
				<SimplePost {post} showDate={false} />
			{/each}
		</div>
		<div class="all-posts-btn-wrapper">
			<a href="/blog">
				<button class="link__button">
					All Posts
					<ArrowRight class="icon" style="width: var(--size-4); height: var(--size-4);" />
				</button>
			</a>
		</div>
	</section>
</PageWrapper>

<style>
	#hero {
		h1 {
			font-size: var(--size-7);
			font-weight: 700;
			margin-block: 0 var(--size-6);
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

	.all-posts-btn-wrapper {
		text-align: center;
		margin-block: var(--size-4);
	}
</style>
