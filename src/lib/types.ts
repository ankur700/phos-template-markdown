import type socialIcons from '$lib/socialIcons';

export type Post = {
	title: string;
	slug: string;
	description: string;
	author: string;
	featured?: boolean;
	cover: string;
	ogImage?: string;
	pubDatetime: Date;
	modDatetime: Date;
	draft: boolean;
	canonicalUrl: string;
	readingTime: string;
	tags: string[];
	published: boolean;
};

export type Tags = { [key: string]: Post[] };

export type Site = {
	website: string;
	author: string;
	desc: string;
	title: string;
	ogImage?: string;
	lightAndDarkMode: boolean;
	postPerPage: number;
};

export type SocialObjects = {
	name: keyof typeof socialIcons;
	href: string;
	active: boolean;
	linkTitle: string;
}[];