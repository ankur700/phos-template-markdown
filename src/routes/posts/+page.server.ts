// import { error } from '@sveltejs/kit';

export async function load({ url, fetch }) {
	const page = Number(url.searchParams.get('page')) || 1;
	const res = await fetch(`api/posts?page=${page}`);
	const posts = await res.json();
	return { posts: posts };
}
