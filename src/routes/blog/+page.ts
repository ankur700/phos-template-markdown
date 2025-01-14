import { error } from '@sveltejs/kit';
import { SITE } from '$lib';

export async function load({ url, fetch }) {
	const page = Number(url.searchParams.get('page')) || 1;
	const limit = Number(url.searchParams.get('limit')) || SITE.postsPerPage;
	try {
		const res = await fetch(`api/posts?page=${page}&limit=${limit}`);
		return { posts: await res.json() };
	} catch (e) {
		console.error(e);
		throw error(404, 'No posts found.');
	}
}
