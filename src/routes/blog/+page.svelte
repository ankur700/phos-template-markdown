<script lang="ts">
	import { SITE } from '$lib/config.ts';
	import type { PageData } from './$types';
	import Post from '$lib/components/Post.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import Spacer from '$lib/components/Spacer.svelte';

	let { data }: { data: PageData } = $props();
	let totalPages = $derived(data.posts.totalPages);
</script>

<svelte:head>
	<title>{SITE.title + ' Posts'}</title>
</svelte:head>

<PageWrapper>
	<div class="posts">
		{#await data.posts.posts}
			<Loading />
		{:then posts}
			{#if !posts}
				<p>No posts found</p>
			{:else}
				{#each posts as post, idx}
					<Post {post} />
				{/each}
			{/if}
		{/await}
	</div>

	<Spacer space="8" />
	<Pagination {totalPages} />
</PageWrapper>

<style>
	.posts {
		display: grid;
		gap: var(--size-7);
		margin-bottom: var(--size-6);
	}
</style>
