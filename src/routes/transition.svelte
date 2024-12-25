<script lang="ts">
	import type { Snippet } from 'svelte'
	import { fade } from 'svelte/transition'

	type Props = {
		children: Snippet
		url: string
	}

	let { children, url }: Props = $props()
</script>

{#key url}
	<div class="transition" in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 300 }}>
		{@render children?.()}
	</div>
{/key}

<style>
	.transition {
		height: 100%;
	}
</style>
