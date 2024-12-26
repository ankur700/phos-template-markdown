<script lang="ts">
  import { SITE } from '$lib/config.js'

  let { data } = $props()
</script>

<svelte:head>
  <title>{SITE.title + " Tags"}</title>
</svelte:head>

<section>
  {#each Object.keys(data.tags) as tag}
    <a href={`/tags/${tag}`} class="tag">{tag}</a>
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