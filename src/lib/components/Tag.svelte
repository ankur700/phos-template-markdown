<script lang="ts">
  import { fade } from "svelte/transition";

  let { tag, style = 'link', size="normal" } = $props();
</script>

{#if style === 'link'}
  <a in:fade href={`/blog/categories/${tag.replace(' ', '-').toLowerCase()}`} class={size === "small" ? "small tag-link" : "tag-link"}>&num;{tag}</a>
  {:else}
  <a in:fade href={`/blog/categories/${tag.replace(' ', '-').toLowerCase()}`} class={size === "small" ? "small tag handdrawn__button" : "tag handdrawn__button"}>&num;{tag}</a>
{/if}
<style>
   .tag {
    padding: var(--size-2) var(--size-3);
    color: var(--text-1);
    text-decoration: none;
  }

  .small {
    font-size: 0.85rem;
    padding: var(--size-1) var(--size-2);
  }

  .tag-link {
    color: var(--text-1);
    text-decoration: underline;
    /* text-decoration-thickness: 0.1em; */
    text-underline-offset: 0.2em;
    text-decoration-style: dashed;

    &:hover {
     color: var(--brand);
     transform: translateY(-0.1em);
    }
  }
</style>
