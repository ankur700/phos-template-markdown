import { SITE } from '$lib';
import { error } from '@sveltejs/kit';


export async function load({ fetch }) {
  const baseUrl = SITE.website;
  try {
    const response = await fetch(baseUrl + 'api/posts/tags');
    const tags: string[] = await response.json();
    return { tags };

  } catch (e) {
    console.error(e);
    throw error(404, "No Tags found.")
  }
}