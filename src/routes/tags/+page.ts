import { error } from '@sveltejs/kit';


export async function load({ fetch }) {
  try {
    const response = await fetch('api/tags');
    const tags: string[] = await response.json();
    return { tags };

  } catch (e) {
    console.error(e);
    throw error(404, "No Tags found.")
  }
}