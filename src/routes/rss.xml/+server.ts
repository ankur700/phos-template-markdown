import { SITE } from '$lib';

export const prerender = true;

export async function GET({ fetch }) {
	const response = await fetch('api/posts');
	const { posts }: PaginatedResponse = await response.json();

	const headers = { 'Content-Type': 'application/xml' };

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${SITE.title}</title>
				<description>${SITE.desc}</description>
				<link>${SITE.website}</link>
				<atom:link href="${SITE.website}/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
			.map(
				(post) => `
						<item>
							<title>${post.title}</title>
							<description>${post.description}</description>
							<link>${SITE.website}/${post.slug}</link>
							<guid isPermaLink="true">${SITE.website}/${post.slug}</guid>
							<pubDate>${new Date(post.publishedDate).toUTCString()}</pubDate>
						</item>
					`
			)
			.join('')}
			</channel>
		</rss>
	`.trim();

	return new Response(xml, { headers });
}
