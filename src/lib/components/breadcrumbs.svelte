<script lang="ts">
  import { page } from '$app/state';
// Remove current url path and remove trailing slash if exists
const currentUrlPath = page.url.pathname.replace(/\/+$/, "");

// Get url array from path
// eg: /tags/tailwindcss => ['tags', 'tailwindcss']
const breadcrumbList = currentUrlPath.split("/").slice(1);

// if breadcrumb is Home > Posts > 1 <etc>
// replace Posts with Posts (page number)
breadcrumbList[0] === "posts" &&
  breadcrumbList.splice(0, 2, `Posts (page ${breadcrumbList[1] || 1})`);

// if breadcrumb is Home > Tags > [tag] > [page] <etc>
// replace [tag] > [page] with [tag] (page number)
breadcrumbList[0] === "tags" &&
  !isNaN(Number(breadcrumbList[2])) &&
  breadcrumbList.splice(
    1,
    3,
    `${breadcrumbList[1]} ${
      Number(breadcrumbList[2]) === 1 ? "" : "(page " + breadcrumbList[2] + ")"
    }`
  );
</script>

<nav class="breadcrumb" aria-label="breadcrumb">
  <ul>
    <li>
      <a href="/">Home</a>
      <span aria-hidden="true">&raquo;</span>
    </li>
    {#each breadcrumbList as breadcrumb, index}
      {#if index + 1 === breadcrumbList.length}
        <li>
          <span
            class={index > 0 ? "lowercase" : "capitalize"}
            aria-current="page"
          >
            <!-- make the last part lowercase in Home > Tags > some-tag -->
            {@html decodeURIComponent(breadcrumb)}
          </span>
        </li>
      {:else}
        <li>
          <a href={`/${breadcrumb}`}>{breadcrumb}</a>
          <span aria-hidden="true">&raquo;</span>
        </li>
      {/if}
    {/each}
  </ul>
</nav>

<style>
  .breadcrumb {
    @apply mx-auto mb-1 mt-8 w-full max-w-3xl px-4;
  }
  .breadcrumb ul li {
    @apply inline;
  }
  .breadcrumb ul li a {
    @apply capitalize opacity-70;
  }
  .breadcrumb ul li span {
    @apply opacity-70;
  }
  .breadcrumb ul li:not(:last-child) a {
    @apply hover:opacity-100;
  }
</style>