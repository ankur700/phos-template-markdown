// import { error } from '@sveltejs/kit';
import { fetchPosts } from '$lib';

export async function load({ url }) {
  const query = (url.searchParams.get('query')) ?? "";
  const { posts } = await fetchPosts({ query: query });
  return { posts };
}
