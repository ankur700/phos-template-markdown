import { error, type LoadEvent } from '@sveltejs/kit';
import { fetchPosts } from '$lib';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }: LoadEvent) => {
	try {
		const tag = params.slug?.replace('-', " ");
		const posts = await fetchPosts({ limit: 0, tag: tag, page: 1, featured: false });
		return { posts };
	} catch (e) {
		console.error(e);
		error(404, `Could not find posts with tag ${params.slug}`);
	}
}
