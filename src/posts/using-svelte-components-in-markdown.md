---
title: Using Svelte Component in Markdown
description: Example post to illustrate how to use svelte component in markdown.
publishedDate: 2025-01-12T05:06:31Z
author: Ankur Singh
draft: false
featured: true
tags:
  - sveltekit
  - markdown
---

<script>
  import Counter from '$lib/components/Counter.svelte';
</script>

## Table of Contents

## Introduction
Using svelte component inside the markdown is very simple and easy because of the MDSVEX. A classic example component is a counter component. Just import the component inside the script tag like you would in svelte and now you can use the component anywhere in the markdown file. The placement of the script tag doesn't matter, you can place them on the top after your frontmatter metadata or right before using the component. I personally prefer them on the top, plus its easier if you have multiple components to import.

## Svelte component

This is a svelte component inside a markdown post.

<Counter />

## Code

```svelte
<script>
  import Counter from '$lib/components/Counter.svelte';
</script>

<Counter />
```


