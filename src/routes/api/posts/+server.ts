import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';
import { SITE } from '$lib/config';

interface PaginatedResponse {
	posts: Post[];
	total: number;
	page: number;
	limit: number;
	totalPages: number;
}

function getDateWithoutTime(dateString: string): Date {
	const date = new Date(dateString);
	return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

async function getPosts(): Promise<Post[]> {
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

	function getSortedPosts(posts: Post[]): Post[] {
		return posts.sort(
			(first, second) => {
				const dateA = getDateWithoutTime(first.pubDatetime);
				const dateB = getDateWithoutTime(second.pubDatetime);
				return dateB.getTime() - dateA.getTime();
			}
		);
	}
	const sortedPosts = getSortedPosts(posts);

	return sortedPosts;
}

function getPaginatedPosts(posts: Post[], page: number, limit: number): PaginatedResponse {
	const offset = (page - 1) * limit;
	const paginatedPosts = posts.slice(offset, offset + limit);

	return {
		posts: paginatedPosts,
		total: posts.length,
		page,
		limit,
		totalPages: Math.ceil(posts.length / limit)
	};
}


async function getFeaturedPosts() {

	const posts = await getPosts();
	const featuredPosts = posts.filter(post => post.featured);
	return featuredPosts;
}

async function getPostsWithTag(tag: string) {
	const posts = await getPosts();
	tag = tag.replace('-', ' ').split(' ').map(word =>
		word.charAt(0).toUpperCase() + word.slice(1)
	).join(' ');
	const postsWithTag = posts.filter(post => post.tags.includes(tag));
	return postsWithTag;
}

export const GET = async ({ url }) => {
	const page = Number(url.searchParams.get('page'));
	const limit = url.searchParams.get('limit') ? Number(url.searchParams.get('limit')) : Number(SITE.postPerPage);
	const featured = url.searchParams.get('featured') === 'true';
	const tag = url.searchParams.get('tag');

	if (featured) {
		const posts = await getFeaturedPosts();
		return json(posts);
	} else if (tag) {
		const posts = await getPostsWithTag(tag);
		return json(posts);
	} else if (!limit) {
		const posts = await getPosts();
		return json(posts);
	} else {
		const posts = await getPosts();
		const paginatedPosts = getPaginatedPosts(posts, page, limit);
		return json(paginatedPosts);
	}
}
