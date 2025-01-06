<script lang="ts">
	import { page } from '$app/state';
	import { ArrowRight, ArrowLeft } from 'lucide-svelte';

	interface Props {
		totalPages: number;
	}

	let currentPage = $derived(Number(page.url.searchParams.get('page')) || 1);
	let nextUrl: string | null = $state(null);
	let prevUrl: string | null = $state(null);
	let { totalPages }: Props = $props();
	let baseUrl: string = '/blog';

	let prev = $derived(currentPage > 1);
	let next = $derived(currentPage < totalPages);

	$effect(() => {
		nextUrl = currentPage < totalPages ? `${baseUrl}?page=${currentPage + 1}` : null;
		prevUrl = currentPage > 1 ? `${baseUrl}?page=${currentPage - 1}` : null;
	});

	function generatePaginationArray(current: number, total: number): (number | string)[] {
		const delta = 1; // Number of pages to show before and after current page
		const range: (number | string)[] = [];

		for (let i = 1; i <= total; i++) {
			if (
				i === 1 || // First page
				i === total || // Last page
				(i >= current - delta && i <= current + delta) // Pages around current
			) {
				range.push(i);
			} else if (range[range.length - 1] !== '...') {
				range.push('...');
			}
		}

		return range;
	}

	let paginationArray = $derived(generatePaginationArray(currentPage, totalPages));
	const isCurrentPage = (page: number) => page === currentPage;
</script>

{#if totalPages > 1}
	<nav class="pagination-wrapper" aria-label="Pagination">
		<a href={prevUrl}>
			<button disabled={!prev} class={prev ? 'handdrawn__button' : 'disabled handdrawn__button'}>
				<ArrowLeft />
				Previous
			</button>
		</a>
		<!-- <span>Page {currentPage} of {totalPages}</span> -->
		<ul>
			{#each paginationArray as page}
				{#if page === '...'}
					<li>
						<span>&hellip;</span>
					</li>
				{:else if typeof page === 'number'}
					<li>
						<a
							href={`/blog?page=${page}`}
							class={isCurrentPage(page) ? 'current' : 'handdrawn__button'}
							aria-current={isCurrentPage(page)}
						>
							<span class="sr-only">
								{#if isCurrentPage(page)}
									Current page:
								{:else}
									Go to page
								{/if}
							</span>
							{page}
						</a>
					</li>
				{/if}
			{/each}
		</ul>
		<a href={nextUrl}>
			<button disabled={!next} class={next ? 'handdrawn__button' : 'disabled handdrawn__button'}>
				Next <ArrowRight />
			</button>
		</a>
	</nav>
{/if}

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: auto;
		margin-bottom: var(--size-6);
		gap: var(--size-4);
		gap: var(--size-2);

		ul {
			display: flex;
			gap: var(--size-4);

			li {
				& > a {
					color: var(--_link-text);
					padding-inline: var(--size-3);
					padding-block: var(--size-2);
					text-decoration: none;
					outline-offset: 3px;
					transition:
						background-color 0.2s var(--ease-3),
						color 0.2s var(--ease-3);

					&[href]:is(.current, :hover, :focus-visible) {
						background: var(--surface-accent);
						color: var(--text-accent);
					}

					&:not([href]) {
						cursor: not-allowed;
						background: transparent;
					}
				}
			}
		}

		.disabled {
			opacity: 0.7;
		}

		.disabled:hover {
			color: var(--text-2);
		}
	}
</style>
