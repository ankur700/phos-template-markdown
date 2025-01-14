import { dev } from '$app/environment'

export const SITE: Site = {
	website: dev ? 'http://localhost:5173/' : 'https://phos-xi.vercel.app/', // replace this with your deployed domain
	author: 'Ankur Singh',
	desc: 'SvelteKit blog template using Markdown.',
	title: 'Phos',
	ogImage: '/phos-template.png',
	lightAndDarkMode: true,
	postsPerPage: 5,
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
		href: 'https://github.com/ankur700',
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
		href: 'https://twitch.com/username',
		linkTitle: `${SITE.title} on Twitch`,
		active: false
	},
	{
		name: 'YouTube',
		href: 'https://youtube.com/@username',
		linkTitle: `${SITE.title} on YouTube`,
		active: false
	},
	{
		name: 'WhatsApp',
		href: 'https://whatsapp.com/username',
		linkTitle: `${SITE.title} on WhatsApp`,
		active: false
	},
	{
		name: 'Snapchat',
		href: 'https://snapchat.com/username',
		linkTitle: `${SITE.title} on Snapchat`,
		active: false
	},
	{
		name: 'Pinterest',
		href: 'https://pinterest.com/username',
		linkTitle: `${SITE.title} on Pinterest`,
		active: false
	},
	{
		name: 'TikTok',
		href: 'https://tiktok.com/username',
		linkTitle: `${SITE.title} on TikTok`,
		active: false
	},
	{
		name: 'CodePen',
		href: 'https://codepen.com/usrname',
		linkTitle: `${SITE.title} on CodePen`,
		active: false
	},
	{
		name: 'Discord',
		href: 'https://discord.com/username',
		linkTitle: `${SITE.title} on Discord`,
		active: false
	},
	{
		name: 'GitLab',
		href: 'https://gitlab.com/username',
		linkTitle: `${SITE.title} on GitLab`,
		active: false
	},
	{
		name: 'Reddit',
		href: 'https://reddit.com/username',
		linkTitle: `${SITE.title} on Reddit`,
		active: false
	},
	{
		name: 'Skype',
		href: 'https://skype.com/username',
		linkTitle: `${SITE.title} on Skype`,
		active: false
	},
	{
		name: 'Steam',
		href: 'https://steam.com/username',
		linkTitle: `${SITE.title} on Steam`,
		active: false
	},
	{
		name: 'Telegram',
		href: 'https://telegram.com/username',
		linkTitle: `${SITE.title} on Telegram`,
		active: false
	},
	{
		name: 'Mastodon',
		href: 'https://mastodon.com/username',
		linkTitle: `${SITE.title} on Mastodon`,
		active: false
	}
];

export const NavItems = [
	{
		title: 'Blog',
		route: '/blog'
	},
	{
		title: 'Tags',
		route: '/tags'
	},
	{
		title: 'About',
		route: '/about'
	},
]
