import type socialIcons from '$lib/socialIcons';

export type Post = {
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
	published: boolean;
};


export type Site = {
	website: string;
	author: string;
	desc: string;
	title: string;
	ogImage?: string;
	lightAndDarkMode: boolean;
	postsPerPage: number;
};

export type SocialObjects = {
	name: keyof typeof socialIcons;
	href: string;
	active: boolean;
	linkTitle: string;
}[];

export type FetchOptions = {
	page?: number;
	limit?: number;
	category?: string;
	featured?: boolean;
	query?: string;
}

export interface PaginatedResponse {
	posts: Post[];
	total: number;
	page: number;
	limit: number;
	totalPages: number;
}