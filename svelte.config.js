import { mdsvex, escapeSvelte } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { bundledLanguages, getSingletonHighlighter } from 'shiki';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import readingTime from 'mdsvex-reading-time';



/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	layout: {
		_: './src/mdsvex.svelte'
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await getSingletonHighlighter({
				themes: ['poimandres'],
				langs: Object.keys(bundledLanguages)
			});
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'poimandres' }));
			return `{@html \`${html}\` }`;
		}
	},
	remarkPlugins: [[remarkToc, { tight: true, heading: "Table of Contents" }], readingTime],
	rehypePlugins: [rehypeSlug]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter(),
	},
};

export default config;
