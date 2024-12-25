import type { Tags } from '$lib/types';

export async function load({ fetch }) {
  const response = await fetch('api/tags');
  const tags: Tags = await response.json();
  return { tags };
}
