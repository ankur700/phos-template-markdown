import { error, type LoadEvent } from '@sveltejs/kit';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }: LoadEvent) => {
	try {
		const posts = await fetch(`/api/posts?tag=${params.slug}`);
		return { posts: await posts.json() };
	} catch (e) {
		console.error(e);
		error(404, `Could not find ${params.slug}`);
	}
}
