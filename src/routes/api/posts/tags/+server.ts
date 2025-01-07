import { json } from '@sveltejs/kit';
import fetchPosts from '$lib/fetchPosts';

async function getTags() {
  const tags: string[] = [];
  const { posts } = await fetchPosts({ limit:0 });

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      // if tags does not have the tag, add it as a key and push the post in the value array
      if (!tags.find((t) => t === tag)) {
        tags.push(tag);
      }
    });
  });

  return tags;
}

export async function GET() {
  const tags = await getTags();
  return json(tags);
}

export const prerender = true;