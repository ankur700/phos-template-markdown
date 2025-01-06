import { error, type LoadEvent } from '@sveltejs/kit';
import fetchPosts  from '$lib/fetchPosts';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }: LoadEvent) => {
	try {
		const category = params.slug?.replace('-', " ");
		const posts = await fetchPosts({limit:0, category: category, page:1, featured: false});
		return { posts };
	} catch (e) {
		console.error(e);
		error(404, `Could not find posts with tag ${params.slug}`);
	}
}
