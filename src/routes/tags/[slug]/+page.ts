import { error, type LoadEvent } from '@sveltejs/kit';
import type { Post } from '$lib/types';

export async function load({ params }: LoadEvent) {
	try {
    let posts: Post[] = [];
		const response = await fetch('/api/tags');
		await response.json().then((tags) => {
      if (typeof params.slug === 'string') {
        posts = tags[params.slug];
      }
    });

		return { posts: posts };
	} catch (e) {
		console.error(e);
		error(404, `Could not find ${params.slug}`);
	}
}
