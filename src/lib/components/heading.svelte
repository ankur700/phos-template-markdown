<script lang="ts">
  let { as = "h1", className = "", text = "" } = $props();
</script>


{#if as === "h1"}
  <h1 class={className}>{text}</h1>
{:else if as === "h2"}
  <h2 class={className}>{text}</h2>
{:else if as === "h3"}
  <h3 class={className}>{text}</h3>
{:else if as === "h4"}
  <h4 class={className}>{text}</h4>
{:else if as === "h5"}
  <h5 class={className}>{text}</h5>
{:else if as === "h6"}
  <h6 class={className}>{text}</h6>
{:else}
  <p class={className}>{text}</p>
{/if}