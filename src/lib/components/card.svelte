<script lang="ts">
	import Datetime from './dateTime.svelte';
	import type { Post } from '$lib/types';

	interface Props {
		post: Post;
		showDate?: boolean;
	}

	let {  post, showDate = false }: Props = $props();
</script>

<article class="card post">
	<h5 class="card-header">
		<a href={`/blog/${post.slug}`}>{post.title}</a>
	</h5>

	{#if showDate}
		<Datetime pubDatetime={post.publishedDate} modDatetime={post.modifiedDate} />
	{/if}
	<p class="description">{post.description}</p>
</article>

<style>
	.post {
		max-inline-size: var(--size-content-3);

		&:not(:last-child) {
			border-bottom: 1px solid var(--border);
			padding-bottom: var(--size-7);
		}

		&:not(:first-child) {
			padding-top: var(--size-7);
		}

		.card-header {
			display: inline-block;
			max-inline-size: var(--size-content-3);
			font-size: var(--size-4);
			font-weight: 600;
			text-transform: capitalize;
			color: var(--text-1);
			text-wrap: wrap;

			& a {
				color: var(--brand);
				text-decoration: none;

				&:hover {
					text-decoration: underline;
					text-underline-offset: 0.2em;
					text-decoration-style: dashed;
				}
			}
		}

		.description {
			margin-top: var(--size-1);
			color: var(--text-2);
			font-size: var(--size-3);
		}
	}
</style>
