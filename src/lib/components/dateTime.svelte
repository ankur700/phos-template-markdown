<script lang="ts">
	import FormatedDateTime from '$lib/components/FormatedDateTime.svelte';
	import { CalendarDays, Clock } from 'lucide-svelte';
	let { pubDatetime, modDatetime, readingTime = '', size = 'sm', className = '' } = $props();
</script>

<div class={`date ${className}`}>
	<div>
		{#if modDatetime}
			<span class={`italic ${size === 'sm' ? 'text-sm' : 'text-base'}`}> Updated: </span>
		{:else}
			<span class="sr-only">Published:</span>
		{/if}
		<span class={`italic ${size === 'sm' ? 'text-sm' : 'text-base'}`}>
			<FormatedDateTime {pubDatetime} {modDatetime} />
		</span>
	</div>

	<div>
		<span class="italic reading-time">{readingTime}</span>
	</div>
</div>

<style>
	.date {
		display: flex;
		align-items: center;
		padding: var(--size-2);
		font-size: var(--size-2);
		font-family: var(--font-monospace-code);
		background-color: hsl(var(--color-background / 40%));
		gap: var(--size-4);
		color: var(--text-secondary);

		.italic {
			font-style: italic;
		}

		div {
			display: flex;
			align-items: center;
			gap: var(--size-1);
		}

		span {
			font-size: var(--size-3);
		}

		.reading-time {
			padding-left: var(--size-2);
		}

	}
</style>
