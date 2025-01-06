<script lang="ts">
	let { className = "", children } = $props();
</script>

<section class={className}>
	{@render children?.()}
</section>

<style>
	section {
		margin-block: var(--size-6);
		margin-inline: auto;
		max-inline-size: var(--size-content-3);
	}
</style>
