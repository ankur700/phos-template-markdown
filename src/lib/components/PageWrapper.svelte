<script lang="ts">
	let { className = "", children } = $props();
</script>

<section class={className}>
	{@render children?.()}
</section>

<style>
	section {
		/* padding-inline: var(--size-3); */
		padding-block: 0 var(--size-8);
		margin-block: var(--size-6);
		margin-inline: auto;
		max-width: var(--width-medium);
	}
</style>
