<script lang="ts">
	let { as = 'h1', className = '', text = '', link = null } = $props();
</script>

{#if as === 'h2'}
	<h2 class="title">
		{#if link}
			<a href={link}>{text}</a>
		{:else}
			{text}
		{/if}
	</h2>
{:else if as === 'h3'}
	<h3 class="title">
		{#if link}
			<a href={link}>{text}</a>
		{:else}
			{text}
		{/if}
	</h3>
{/if}

<style>
	.title {
		display: inline-block;
		max-inline-size: var(--size-content-3);
		font-size: var(--size-4);
		font-weight: 600;
		text-transform: capitalize;
		color: var(--brand);
		text-wrap: wrap;

		& a {
			color: inherit;
			text-decoration: none;

			&:hover {
				text-decoration: none;
			}
		}

		&:hover {
			color: var(--brand);
			text-decoration: underline;
			text-underline-offset: 0.2em;
			text-decoration-style: dashed;
		}
	}
</style>
