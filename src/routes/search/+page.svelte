<script lang="ts">
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import Post from '$lib/components/Post.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<PageWrapper>
	{#if data.posts}
		{#each data.posts as post}
			<Post {post} />
		{/each}
	{:else}
		<p>No posts found.</p>
	{/if}
</PageWrapper>
