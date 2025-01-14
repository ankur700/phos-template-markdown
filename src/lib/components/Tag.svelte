<script lang="ts">
	import { fade } from 'svelte/transition';
	type Props = {
		tag: string;
		style?: 'link' | 'tag';
		size?: 'normal' | 'small' | 'large';
	};

	let { tag, style = 'link', size = 'normal' }: Props = $props();
	let href = $derived(`/blog/categories/${tag.replace(' ', '-').toLowerCase()}`);
	let className: string = $derived(
		style === 'tag' ? `${size} ${style} handdrawn__button` : `${size} ${style}`
	);
</script>

<a in:fade {href} class={className}>&num;{tag}</a>

<style>
	.tag {
		padding: var(--size-2) var(--size-3);
		color: var(--text-primary);
		text-decoration: none;
	}

	.small {
		font-size: 0.85rem;
		padding: var(--size-1) var(--size-2);
	}

	.large {
		font-size: var(--size-4);
	}

	.link {
		color: var(--text-primary);
		text-decoration: underline;
		/* text-decoration-thickness: 0.1em; */
		text-underline-offset: 0.2em;
		text-decoration-style: dashed;

		&:hover {
			color: var(--accent);
			transform: translateY(-0.1em);
		}
	}
</style>
