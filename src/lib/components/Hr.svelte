<script lang="ts">
interface Props {
  noPadding?: boolean;
  ariaHidden?: boolean;
}

const { noPadding = false, ariaHidden = true } = $props();
</script>

<div class={`max-w-3xl mx-auto ${noPadding ? "px-0" : "px-4"}`}>
  <hr class="border-skin-line" aria-hidden={ariaHidden} />
</div>
