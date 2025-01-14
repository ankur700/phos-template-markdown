<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		className?: string;
		children: Snippet;
	};

	let { className, children }: Props = $props();
</script>

<div class={className}>
	{@render children?.()}
</div>

<style>
	div {
		margin-block: var(--size-6);
		margin-inline: auto;
		max-inline-size: var(--size-content-3);
	}
</style>
