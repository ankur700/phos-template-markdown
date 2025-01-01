<script lang="ts">
	import FormatedDateTime from '$lib/components/FormatedDateTime.svelte';
	import { CalendarDays } from 'lucide-svelte';
	let { pubDatetime, modDatetime, readingTime = '', size = 'sm', className = '' } = $props();
</script>

<div class={`date ${className}`}>
	<CalendarDays style="height: var(--size-4); height: var(--size-4);" />

	{#if modDatetime}
		<span class={`italic ${size === 'sm' ? 'text-sm' : 'text-base'}`}> Updated: </span>
	{:else}
		<span class="sr-only">Published:</span>
	{/if}
	<span class={`italic ${size === 'sm' ? 'text-sm' : 'text-base'}`}>
		<FormatedDateTime {pubDatetime} {modDatetime} />
	</span>

	<span class="reading-time"> {readingTime}</span>
</div>

<style>
	.date {
		display: flex;
		padding: var(--size-2);
		background-color: hsl(var(--color-background / 40%));
		gap: var(--size-2);
		color: var(--text-2);

		span {
			font-size: var(--size-fluid-1);
		}

		.reading-time {
			padding-left: var(--size-2);
		}

	}
</style>
