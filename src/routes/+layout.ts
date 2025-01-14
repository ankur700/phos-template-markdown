export async function load({ url, fetch }) {

	if (url.pathname === '/') {
		let featuredPosts: Post[] = [];
		let recentPosts: Post[] = [];
		const featuredPostsData = await fetch(`/api/posts?page=1&limit=3&featured=true`);
		const { posts: Fposts }: PaginatedResponse = await featuredPostsData.json();
		featuredPosts = Fposts;

		const recentPostsData = await fetch(`/api/posts?page=1&limit=10`);
		const { posts: Rposts }: PaginatedResponse = await recentPostsData.json();
		recentPosts = Rposts.filter((post) => !post.featured).slice(0, 3);
		return {
			url: url.pathname,
			featuredPosts: featuredPosts,
			recentPosts: recentPosts,
		}
	} else {
		return {
			url: url.pathname
		}
	}

}
