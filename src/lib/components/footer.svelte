<script lang="ts">
	import { SITE } from '$lib/config'
	import Socials from './Socials.svelte'
</script>

<footer>
	<p>{SITE.title} &copy {new Date().getFullYear()}</p>
	<div>
		<Socials centered />
	</div>
</footer>

<style>
	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--size-4);
		width: 100%;
		max-inline-size: var(--width-medium);
		margin-inline: auto;
		border-top: 1px solid var(--border);

		p {
			color: var(--text-2);
			font-size: var(--size-3);
		}
	}
</style>
