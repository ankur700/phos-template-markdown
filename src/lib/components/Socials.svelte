<script lang="ts">
import { SOCIALS } from "$lib/config";
import LinkButton from "./LinkButton.svelte";
import socialIcons from "$lib/socialIcons";
import type { Component } from "svelte";
interface Props {
  centered?: boolean;
}

let component: Component<{ social: string }>;

const { centered = false }: Props = $props();
</script>

<div class={`social-icons ${centered ? "flex" : ""}`}>
  {#each SOCIALS.filter(social => social.active) as social}
      <LinkButton
        href={social.href}
        className="link-button"
        ariaLabel={social.linkTitle}
        title={social.linkTitle}
      >
        <component this={component} social={socialIcons[social.name]}></component>
        <span class="sr-only">{social.linkTitle}</span>
      </LinkButton>
  {/each}
</div>

<style>
  .social-icons {
    @apply flex-wrap justify-center gap-1;
  }
  .link-button {
    @apply p-2 hover:rotate-6 sm:p-1;
  }
</style>
