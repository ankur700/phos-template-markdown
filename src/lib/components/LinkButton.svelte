<script lang="ts">
	import type { Snippet } from 'svelte';
	interface Props {
		href: string;
		className?: string;
		ariaLabel?: string;
		title?: string;
		disabled?: boolean;
		children: Snippet;
	}

	let { href, className, ariaLabel, title, disabled, children }: Props = $props();
</script>

{#if disabled}
	<span class={`group ${className}`} aria-label={ariaLabel} {title} aria-disabled={disabled}>
		{@render children?.()}
	</span>
{:else}
	<a role="button" {href} class={`group ${className}`} aria-label={ariaLabel} {title}>
		{@render children?.()}
	</a>
{/if}

<style>
	a,
	span {
		transition: transform 0.2s ease-in-out;
		display: inline-flex;
		gap: var(--size-2);
		align-items: center;
		color: var(--text-primary);
		font-size: var(--size-4);
	}

	a:hover {
		color: var(--accent);
		text-decoration: none;
	}

	span[aria-disabled='true'] {
		pointer-events: none;
		cursor: not-allowed;
		color: var(--text-secondary);
	}
</style>
