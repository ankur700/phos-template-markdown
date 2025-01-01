<script lang="ts">
  import { SITE } from '$lib/config.js'

  let { data } = $props()
</script>

<svelte:head>
	<title>{SITE.title + " | Tags" }</title>
	<meta property="og:type" content="categories" />
	<meta property="og:title" content={"Tags"} />
	<meta name="title" content={"Tags"} />
	<meta name="description" content={"All the tags used in the blog posts."} />
	<meta name="author" content={SITE.author} />

	<!-- Open Graph / Facebook -->
	<meta property="og:title" content={"Tags"} />
	<meta property="og:description" content={"All the tags used in the blog posts."} />
	<meta property="og:url" content={SITE.website + "/tags"} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={SITE.website + "/tags"} />
	<meta property="twitter:title" content={"Tags"} />
	<meta property="twitter:description" content={"All the tags used in the blog posts."} />
</svelte:head>

<section>
  {#each data.tags as tag}
    <a href={`/tags/${tag.replace(' ', '-').toLowerCase()}`} class="tag">{tag}</a>
  {/each}
</section>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
    gap: var(--size-3);
  }

  .tag {
    padding: var(--size-2) var(--size-3);
    border-radius: var(--radius-round);
    background-color: var(--surface-4);
    color: var(--text-2);
    text-decoration: none;
  }

  </style>