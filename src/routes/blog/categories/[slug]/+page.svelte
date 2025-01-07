<script lang="ts">
	import Post from '$lib/components/Post.svelte'
	import PageWrapper from '$lib/components/PageWrapper.svelte'

	let { data } = $props();
</script>

<PageWrapper>
	<div class="posts">
		{#each data.posts.posts as post}
			<Post {post} />
		{/each}
		</div>
	</PageWrapper>

<style>
	.posts {
		display: grid;
		gap: var(--size-7);
	}
</style>
