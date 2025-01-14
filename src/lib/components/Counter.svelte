<script lang="ts">
	let value: number = $state(0);
</script>

<div class="counter">
	<button class="handdrawn__button" onclick={() => value++}> + </button>

	<span>{value}</span>
	<button class="handdrawn__button" onclick={() => value--}> - </button>
</div>

<style>
	.counter {
		display: flex;
		justify-content: start;
		align-items: center;
		gap: var(--size-4);

		span {
			color: var(--brand);
			font-size: var(--size-8);
		}
	}
</style>
