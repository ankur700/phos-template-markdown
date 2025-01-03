import { dev } from '$app/environment'
import type { Site, SocialObjects } from '$lib/types'

export const SITE: Site = {
	website: dev ? 'http://localhost:5173/' : 'https://yourwebstiedomain.com/', // replace this with your deployed domain
	author: 'Ankur Singh',
	desc: 'SvelteKit blog template using Markdown.',
	title: 'Markdown Template',
	ogImage: 'astropaper-og.jpg',
	lightAndDarkMode: true,
	postPerPage: 6,
};

export const LOCALE = {
	lang: 'en', // html lang code. Set this empty and default will be "en"
	langTag: ['en-EN'] // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
	enable: false,
	svg: true,
	width: 216,
	height: 46
};

export const SOCIALS: SocialObjects = [
	{
		name: 'Github',
		href: 'https://github.com/username',
		linkTitle: `${SITE.title} Github Profile`,
		active: true
	},
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/username/',
		linkTitle: `${SITE.title} on LinkedIn`,
		active: true
	},
	{
		name: 'Mail',
		href: 'mailto:john.doe@gmail.com',
		linkTitle: `Send an email to ${SITE.title}`,
		active: true
	},
	{
		name: 'Twitter',
		href: 'https://twitter.com/username',
		linkTitle: `${SITE.title} on Twitter`,
		active: true
	},
	{
		name: 'Twitch',
		href: 'https://github.com/ankur700/phos-template-markdown',
		linkTitle: `${SITE.title} on Twitch`,
		active: false
	},
	{
		name: 'YouTube',
		href: 'https://github.com/ankur700/phos-template-markdown',
		linkTitle: `${SITE.title} on YouTube`,
		active: false
	},
	{
		name: 'WhatsApp',
		href: 'https://github.com/ankur700/phos-template-markdown',
		linkTitle: `${SITE.title} on WhatsApp`,
		active: false
	},
	{
		name: 'Snapchat',
		href: 'https://github.com/ankur700/phos-template-markdown',
		linkTitle: `${SITE.title} on Snapchat`,
		active: false
	},
	{
		name: 'Pinterest',
		href: 'https://github.com/ankur700/phos-template-markdown',
		linkTitle: `${SITE.title} on Pinterest`,
		active: false
	},
	{
		name: 'TikTok',
		href: 'https://github.com/ankur700/phos-template-markdown',
		linkTitle: `${SITE.title} on TikTok`,
		active: false
	},
	{
		name: 'CodePen',
		href: 'https://github.com/ankur700/phos-template-markdown',
		linkTitle: `${SITE.title} on CodePen`,
		active: false
	},
	{
		name: 'Discord',
		href: 'https://github.com/ankur700/phos-template-markdown',
		linkTitle: `${SITE.title} on Discord`,
		active: false
	},
	{
		name: 'GitLab',
		href: 'https://github.com/ankur700/phos-template-markdown',
		linkTitle: `${SITE.title} on GitLab`,
		active: false
	},
	{
		name: 'Reddit',
		href: 'https://github.com/ankur700/phos-template-markdown',
		linkTitle: `${SITE.title} on Reddit`,
		active: false
	},
	{
		name: 'Skype',
		href: 'https://github.com/ankur700/phos-template-markdown',
		linkTitle: `${SITE.title} on Skype`,
		active: false
	},
	{
		name: 'Steam',
		href: 'https://github.com/ankur700/phos-template-markdown',
		linkTitle: `${SITE.title} on Steam`,
		active: false
	},
	{
		name: 'Telegram',
		href: 'https://github.com/ankur700/phos-template-markdown',
		linkTitle: `${SITE.title} on Telegram`,
		active: false
	},
	{
		name: 'Mastodon',
		href: 'https://github.com/ankur700/phos-template-markdown',
		linkTitle: `${SITE.title} on Mastodon`,
		active: false
	}
];
