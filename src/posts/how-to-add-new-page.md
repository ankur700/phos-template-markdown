---
title: How to add new page
description: This post explains how you can add new pages in phos template.
publishedDate: 2024-06-04T06:06:31Z
author: Ankur Singh
draft: false
featured: false
tags:
  - sveltekit
  - page
  - routes
---

## Table of Contents

## Routing

At the heart of SvelteKit is a filesystem-based router. The routes of your app — i.e. the URL paths that users can access — are defined by the directories in your codebase:

- src/routes is the root route
- src/routes/about creates an /about route
- src/routes/blog/[slug] creates a route with a parameter, slug, that can be used to load data dynamically when a user requests a page like [`/blog/hello-world`]

## Page

A +page.svelte component defines a page of your app. By default, pages are rendered both on the server (SSR) for the initial request and in the browser (CSR) for subsequent navigation.

For about page to work you will need to create a [`+page.svelte`] file inside of [`routes/about`] folder. This file will contain the contents of the about page.
