<script lang="ts">
	interface Props {
		href: string;
		className?: string;
		ariaLabel?: string;
		title?: string;
		disabled?: boolean;
	}

	let { href, className="", ariaLabel=null, title=null, disabled = false, children } = $props();
</script>

{#if disabled}
	<span class={`group ${className}`} aria-label={ariaLabel} {title} aria-disabled={disabled}>
		{@render children?.()}
	</span>
{:else}
	<a {href} class={`group ${className}`} aria-label={ariaLabel} {title}>
		{@render children?.()}
	</a>
{/if}

<style>
	a, span {
		transition: transform 0.2s ease-in-out;
		display: inline-flex;
		gap: var(--size-2);
		align-items: center;
		color: var(--color-text);
		font-size: var(--size-4);
	}

	a:hover {
		color: var(--brand);
		text-decoration: none;
	}

	span[aria-disabled='true'] {
		pointer-events: none;
		cursor: not-allowed;
	}
</style>
