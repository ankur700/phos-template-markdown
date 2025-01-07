<script lang="ts">
	interface TOCItem {
		id: string;
		depth: number;
		title: string;
		children: TOCItem[];
	}

	export let items: TOCItem[];
</script>

<nav class="toc-container">
	<ul class="space-y-2">
		{#each items as item}
			<li class="toc-item" style="margin-left: {(item.depth - 2) * 1}rem">
				<a href="#{item.id}" class="hover:text-blue-600 transition-colors">
					{item.title}
				</a>
				{#if item.children.length > 0}
					<svelte:self items={item.children} />
				{/if}
			</li>
		{/each}
	</ul>
</nav>

<style>
	:is(ul) {
		list-style-type: '○';
		padding-left: var(--size-5);
	}

	:is(ul) li {
		margin-block: var(--size-1);
		padding-inline-start: var(--size-2);
	}

	a {
		background: linear-gradient(0deg, var(--brand), var(--brand)) no-repeat right bottom / 0
			var(--bg-h);
		transition: background-size 350ms;
		padding-bottom: var(--size-1);
		--bg-h: var(--size-1);
		color: var(--brand);
	}

	a:where(:hover, :focus-visible) {
		background-size: 100% var(--bg-h);
		background-position-x: left;
		color: var(--text-2);
	}
</style>
