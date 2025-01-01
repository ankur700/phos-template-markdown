<script lang="ts">
interface Props {
  noPadding?: boolean;
  ariaHidden?: boolean;
}

const { noPadding = true, ariaHidden = true } = $props();
</script>

<div style={`${noPadding ? "padding-inline: 0" : "padding-inline: var(--size-4)"}`}>
  <hr aria-hidden={ariaHidden} />
</div>

<style>
  hr {
    border: 0;
    border-top: 1px var(--color-border);
    margin-inline: auto;
    max-inline-size: var(--width-medium);
  }
</style>