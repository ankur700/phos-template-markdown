import { SITE } from '$lib/config'
import { error } from '@sveltejs/kit';


const fetchPosts = async ({ page = 1, limit = SITE.postsPerPage, tag = '', featured = false, query = "" }: FetchOptions): Promise<PaginatedResponse> => {
  const offset = (page - 1) * limit;
  const posts: Post[] = [];

  const paths = import.meta.glob('/src/posts/*.md', { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split('/').at(-1)?.replace('.md', '');

    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata as Omit<Post, 'slug'>;
      const post = { ...metadata, slug } satisfies Post;
      if (!post.draft) {
        posts.push(post);
      }
    }
  }

  let sortedPosts = posts.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());

  if (tag) {
    sortedPosts = sortedPosts.filter(post => post.tags.includes(tag));
  }

  if (featured) {
    sortedPosts = sortedPosts.filter(post => post.featured)
  }

  if (query) {
    sortedPosts = sortedPosts.filter(post => post.title.toLowerCase().includes(query));
  }

  if (offset > 0) {
    sortedPosts = sortedPosts.slice(offset);
  }

  if (limit && limit < sortedPosts.length && limit != -1) {
    sortedPosts = sortedPosts.slice(0, limit)
  }

  if (sortedPosts.length === 0) {
    throw error(404, "No posts found");
  } else {
    return {
      posts: sortedPosts,
      total: posts.length,
      page,
      limit,
      totalPages: Math.ceil(posts.length / limit)
    };
  }


}

export default fetchPosts