<script lang="ts">
  interface Props {
    href: string;
    className?: string;
    ariaLabel?: string;
    title?: string;
    disabled?: boolean;
  }

let { href, className, ariaLabel, title, disabled = false, children } = $props();
</script>

{#if disabled}

    <span
      class={`group inline-block ${className}`}
      aria-label={ariaLabel}
      title={title}
      aria-disabled={disabled}
    >
     {@render children?.()}
    </span>
 {:else}
    <a
      {href}
      class={`group inline-block hover:text-skin-accent ${className}`}
      aria-label={ariaLabel}
      title={title}
    >
     {@render children?.()}
    </a>
{/if}
