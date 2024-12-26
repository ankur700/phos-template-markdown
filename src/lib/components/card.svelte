<script lang="ts">
import Datetime from "./dateTime.svelte";
import Heading from "./heading.svelte";
import type { Post } from "$lib/types";

interface Props {
    href?: string;
    post: Post;
    secHeading?: boolean;
  }

let { href, post, secHeading = true }: Props = $props();
const { title, pubDatetime, modDatetime, description } = post;

</script>

    <li class="my-6">
      <a
        href={href}
        class="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
      <Heading as={secHeading ? "h2" : "h3"} className="text-lg font-medium decoration-dashed hover:underline" text={title} />

      </a>
      <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
      <p>{description}</p>
    </li>

