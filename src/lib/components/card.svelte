<script lang="ts">
	import { formatDate } from '$lib/utils';
	import Datetime from './dateTime.svelte';
	import Heading from './heading.svelte';
	import type { Post } from '$lib/types';

	interface Props {
		href?: string;
		post: Post;
		showDate?: boolean;
		secHeading?: boolean;
	}

	let { href, post, secHeading = true, showDate = false }: Props = $props();
	const { title, pubDatetime, modDatetime, description } = post;
</script>

<article class="card post">
	<Heading as={secHeading ? 'h2' : 'h3'} link={href} text={title} className="heading" />

	{#if showDate}
		<Datetime {pubDatetime} {modDatetime} />
	{/if}
	<p class="description">{description}</p>
</article>

<style>
	.post {
		max-inline-size: var(--width-medium);

		&:not(:last-child) {
			border-bottom: 1px solid var(--border);
			padding-bottom: var(--size-7);
		}

		.description {
			margin-top: var(--size-1);
		}
	}
</style>
