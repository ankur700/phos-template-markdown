import { mdsvex, escapeSvelte } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { createHighlighter } from 'shiki';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import readingTime from 'mdsvex-reading-time';

const highlighter = await createHighlighter({
	themes: ['poimandres'],
	langs: ['javascript', 'typescript', 'powershell', 'bash']
});

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	layout: {
		_: './src/mdsvex.svelte'
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			await highlighter.loadLanguage('javascript', 'typescript', 'powershell', 'bash');
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'poimandres' }));
			return `{@html \`${html}\` }`;
		}
	},
	remarkPlugins: [[remarkToc, { tight: true }], readingTime],
	rehypePlugins: [rehypeSlug]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter(),
		// prerender: {
		// 	entries: [
		// 		'*',
		// 		'/api/posts/*',
		// 		'/blog/category/*',
		// 		'/blog/category/*/page/*',
		// 		'/blog/category/page/',
		// 		'/blog/category/page/*',
		// 		'/blog/page/',
		// 		'/blog/page/*',
		// 	]
		// }
	},
};

export default config;
