import { json } from '@sveltejs/kit';
import type { FetchOptions } from '$lib/types';
import { SITE } from '$lib/config';
import fetchPosts from '$lib/fetchPosts';


export const GET = async ({ url }) => {
	const page = Number(url.searchParams.get('page'));
	const limit = Number(url.searchParams.get('limit')) || Number(SITE.postsPerPage);
	const featured = url.searchParams.get('featured') === 'true';
	const options: FetchOptions = {page: page, limit: limit, category: '', featured: featured}

	const paginatedPosts = await fetchPosts(options);
	return json(paginatedPosts);
}

export const prerender = true;