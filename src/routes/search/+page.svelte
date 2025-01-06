<script lang="ts">
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import Card from '$lib/components/card.svelte';

	let { data } = $props();
</script>

<PageWrapper>
	{#await data.posts}
		<Loading />
	{:then posts}
		{#each posts as post}
			<Card {post} />
		{/each}
	{/await}
</PageWrapper>
