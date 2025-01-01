<script lang="ts">
	import { SITE } from '$lib/config.ts';
	import type { Post } from '$lib/types.ts';
	import Card from '$lib/components/card.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import Loading from '$lib/components/Loading.svelte';

	let { data } = $props();
	// let pageSize = SITE.postPerPage;
	let totalPages = $derived(data.posts.totalPages);

	let loading = $state(true);
	let posts: Post[] = $state([]);


	$effect(() => {
		if (data) {
			posts = data.posts.posts;
			loading = false;
		}
	});
</script>

<svelte:head>
	<title>{SITE.title + ' Posts'}</title>
</svelte:head>

<PageWrapper>
	<div class="posts">
		{#if loading}
			<Loading />
		{:else}
			{#each posts as post}
				<Card {post} href={`/posts/${post.slug}`} />
			{/each}
		{/if}
	</div>

	<Pagination {totalPages} />
</PageWrapper>

<style>
	.posts {
		display: grid;
		gap: var(--size-7);
		margin-bottom: var(--size-6);
	}
</style>
