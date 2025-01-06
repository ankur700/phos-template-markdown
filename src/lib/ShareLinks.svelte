<script lang="ts">
	import LinkButton from '$lib/components/LinkButton.svelte';
	import socialIcons from '$lib/socialIcons';
	import { page } from '$app/state';

	const URL = page.url;

	const shareLinks = [
		{
			name: 'WhatsApp',
			href: 'https://wa.me/?text=',
			linkTitle: `Share this post via WhatsApp`
		},
		{
			name: 'Facebook',
			href: 'https://www.facebook.com/sharer.php?u=',
			linkTitle: `Share this post on Facebook`
		},
		{
			name: 'Twitter',
			href: 'https://twitter.com/intent/tweet?url=',
			linkTitle: `Tweet this post`
		},
		{
			name: 'Telegram',
			href: 'https://t.me/share/url?url=',
			linkTitle: `Share this post via Telegram`
		},
		{
			name: 'Pinterest',
			href: 'https://pinterest.com/pin/create/button/?url=',
			linkTitle: `Share this post on Pinterest`
		},
		{
			name: 'Mail',
			href: 'mailto:?subject=See%20this%20post&body=',
			linkTitle: `Share this post via email`
		}
	] as const;
</script>

<div class={`social-icons`}>
	<span class="italic">Share this post on:</span>
	<div class="text-center">
		{#each shareLinks as social}
			<a href={`${social.href + URL}`} class="link-button" title={social.linkTitle}>
				{@html socialIcons[social.name]}
			</a>
		{/each}
	</div>
</div>

<style>
	.social-icons {
		display: flex;
		flex-direction: column;
		gap: var(--size-2);
	}

	.italics {
		font-style: italic;
	}

	.text-center {
		text-align: center;
		display: flex;
    align-items: center;
		gap: var(--size-2);
	}

	.link-button {
		display: inline-block;
		flex-shrink: 0;
	}
</style>
