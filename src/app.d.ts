// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface Post {
		title: string;
		slug: string;
		description: string;
		author: string;
		featured?: boolean;
		cover: string;
		ogImage?: string;
		publishedDate: string;
		modifiedDate: string;
		draft: boolean;
		canonicalUrl: string;
		readingTime: string;
		tags: string[];
	};


	interface Site {
		website: string;
		author: string;
		desc: string;
		title: string;
		ogImage?: string;
		lightAndDarkMode: boolean;
		postsPerPage: number;
	};

	interface SocialObject {
		name: keyof typeof socialIcons;
		href: string;
		active: boolean;
		linkTitle: string;
	}

	interface FetchOptions {
		page?: number;
		limit?: number;
		tag?: string;
		featured?: boolean;
		query?: string;
	}

	interface PaginatedResponse {
		posts: Post[];
		total: number;
		page: number;
		limit: number;
		totalPages: number;
	}

	type SocialObjects = SocialObject[];
}

export { Post, Site, SocialObject, SocialObjects, FetchOptions, PaginatedResponse };
