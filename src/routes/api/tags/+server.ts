import { json } from '@sveltejs/kit';
import type { Post, Tags } from '$lib/types';

async function getTags() {
  const tags: Tags = {};
  let posts: Post[] = [];
  const paths = import.meta.glob('/src/posts/*.md', { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split('/').at(-1)?.replace('.md', '');

    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata as Omit<Post, 'slug'>;
      const post = { ...metadata, slug } satisfies Post;
      if(post.published){
        posts.push(post);
      }
    }
  }

  posts = posts.sort(
    (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
  );

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      // if tags does not have the tag, add it as a key and push the post in the value array
      if (!tags[tag]) {
        tags[tag] = [post];
      }else {
        tags[tag].push(post);
      }
    });
  });

  return tags;
}

export async function GET() {
  const tags = await getTags();
  return json(tags);
}
