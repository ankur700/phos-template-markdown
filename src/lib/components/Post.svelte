<script lang="ts">
	import Datetime from './dateTime.svelte';

	interface Props {
		post: Post;
		showDate?: boolean;
	}

	let { post, showDate = false }: Props = $props();
</script>

<article class="post">
	<h5 class="post-header">
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
			padding-bottom: var(--size-2);
		}

		&:not(:first-child) {
			padding-top: var(--size-2);
		}

		.post-header {
			display: inline-block;
			max-inline-size: var(--size-content-3);
			font-size: var(--size-4);
			font-weight: 600;
			text-transform: capitalize;
			color: var(--text-primary);
			text-wrap: wrap;

			& a {
				color: var(--accent);
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
			color: var(--text-secondary);
			font-size: var(--size-3);
		}
	}
</style>
