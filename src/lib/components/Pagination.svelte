<script lang="ts">
	import { page } from '$app/state';

	interface Props {
		totalPages: number;
	}

	let currentPage = $derived(Number(page.url.searchParams.get('page')) || 1);
	let nextUrl: string | null = $state(null);
	let prevUrl: string | null = $state(null);
	let { totalPages }: Props = $props();

	let prev = $derived(currentPage > 1);
	let next = $derived(currentPage < totalPages);

	$effect(() => {
		nextUrl = currentPage < totalPages ? `/posts?page=${currentPage + 1}` : null;
		prevUrl = currentPage > 1 ? `/posts?page=${currentPage - 1}` : null;
	})

</script>

{#if totalPages > 1}
	<nav class="pagination-wrapper" aria-label="Pagination">
		<button disabled={!prev} class={prev ? '' : 'disabled'}>
			<a href={prevUrl} data-sveltekit-reload> &larr; Previous </a>
		</button>
		<span>Page {currentPage} of {totalPages}</span>
		<button disabled={!next} class={next ? '' : 'disabled'}>
			<a href={nextUrl} data-sveltekit-reload> Next &rarr; </a>
		</button>
	</nav>
{/if}

<style>
	.pagination-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: auto;
		margin-bottom: var(--size-6);
		gap: var(--size-4);
	}
	nav {
		--_link-bg: var(--surface-4);
		--_link-text: var(--text-1);

		display: flex;
		gap: var(--size-2);

    .disabled {
      opacity: 0.7;
    }

    .disabled a:hover {
      color: var(--text-2);
    }

		/* & > a {
			background-color: var(--_link-bg);
			color: var(--_link-text);
			padding-inline: var(--size-3);
			padding-block: var(--size-2);
			border-radius: var(--radius-round);
			text-decoration: none;
			outline-offset: 3px;
			transition:
				background-color 0.2s var(--ease-3),
				color 0.2s var(--ease-3);

			&[href]:is(.current, :hover, :focus-visible) {
				--_link-bg: var(--brand);
				opacity: 0.8;
				--_link-text: white;
			}

			&:not([href]) {
				cursor: not-allowed;
				--_link-bg: transparent;
			}
		} */
	}
</style>
