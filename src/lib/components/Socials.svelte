<script lang="ts">
	import { SOCIALS } from '$lib/config';
	import LinkButton from './LinkButton.svelte';
	import socialIcons from '$lib/socialIcons';
	interface Props {
		centered?: boolean;
	}

	const { centered = false }: Props = $props();
</script>

<div class="social-icons" class:centered>
	{#each SOCIALS.filter((social) => social.active) as social}
		<LinkButton
			href={social.href}
			className="link-button"
			ariaLabel={social.linkTitle}
			title={social.linkTitle}
		>
			<span class="icon">
				{@html socialIcons[social.name]}
			</span>
			<span class="sr-only">{social.linkTitle}</span>
		</LinkButton>
	{/each}
</div>

<style>
	.social-icons {
		display: flex;
		flex-wrap: wrap;
		gap: var(--size-2);


		.icon {
			display: flex;
			width: var(--size-5);
			height: var(--size-5);
      color: var(--text-2);

			/* &:hover {
				transform: rotate(15deg);
        color: var(--brand);
			} */
		}
	}
	.centered {
		justify-content: center;
	}
</style>
