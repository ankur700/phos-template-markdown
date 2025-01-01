<script lang="ts">
	import Card from '$lib/components/card.svelte'
	import PageWrapper from '$lib/components/PageWrapper.svelte'

	let { data } = $props();
</script>

<PageWrapper>
	<div class="posts">
		{#each data.posts as post}
			<Card {post} />
		{/each}
		</div>
	</PageWrapper>

<style>
	.posts {
		display: grid;
		gap: var(--size-7);
	}
</style>
