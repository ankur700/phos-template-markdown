<script lang="ts">
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import Post from '$lib/components/Post.svelte';

	let { data } = $props();
</script>

<PageWrapper>
	{#await data.posts}
		<Loading />
	{:then posts}
		{#each posts as post}
			<Post {post} />
		{/each}
	{/await}
</PageWrapper>
