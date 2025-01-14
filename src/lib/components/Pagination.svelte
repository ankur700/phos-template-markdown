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

</script>

{#if totalPages > 1}
	<nav class="pagination-wrapper" aria-label="Pagination">
		<a href={prevUrl}>
			<button disabled={!prev} class={prev ? 'handdrawn__button' : 'disabled handdrawn__button'}>
				<ArrowLeft />
				Previous
			</button>
		</a>
		<span>Page {currentPage + " of " + totalPages}</span>
		<!-- <ul>
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
		</ul> -->
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

		span {
			font-size: var(--size-4);
			white-space: break-spaces;
		}

		.disabled {
			opacity: 0.7;
		}

		.disabled:hover {
			color: var(--text-2);
		}
	}
</style>
