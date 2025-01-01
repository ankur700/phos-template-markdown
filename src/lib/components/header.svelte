<script lang="ts">
	import Toggle from '$lib/components/toggle.svelte';
	import { LOGO_IMAGE, SITE } from '$lib/config';
	import LinkButton from './LinkButton.svelte';
	import { Search } from 'lucide-svelte';
	import { Rss } from 'lucide-svelte';

	interface Props {
		activeNav?: 'posts' | 'tags' | 'about' | 'search' | 'rss';
	}

	const { activeNav } = $props();
</script>

<header class="header">
	<a id="skip-to-content" href="#main-content">Skip to content</a>
	<div class="top-nav-wrap">
		<a href="/" class="logo">
			{#if LOGO_IMAGE.enable}
				<img
					src={`/assets/${LOGO_IMAGE.svg ? 'logo.svg' : 'logo.png'}`}
					alt={SITE.title}
					width={LOGO_IMAGE.width}
					height={LOGO_IMAGE.height}
				/>
			{:else}
				{SITE.title}
			{/if}
		</a>
		<nav id="nav-menu" class="desktop-menu">
			<button
				class="hamburger-menu focus-outline"
				aria-label="Open Menu"
				aria-expanded="false"
				aria-controls="menu-items"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="menu-icon"
				>
					<line x1="7" y1="12" x2="21" y2="12" class="line"></line>
					<line x1="3" y1="6" x2="21" y2="6" class="line"></line>
					<line x1="12" y1="18" x2="21" y2="18" class="line"></line>
					<line x1="18" y1="6" x2="6" y2="18" class="close"></line>
					<line x1="6" y1="6" x2="18" y2="18" class="close"></line>
				</svg>
			</button>
			<ul id="menu-items" class="nav-items">
				<li class="links">
					<a href="/posts" class={activeNav === 'posts' ? 'active' : ''}> Posts </a>
				</li>
				<li class="links">
					<a href="/tags" class={activeNav === 'tags' ? 'active' : ''}> Tags </a>
				</li>
				<li class="links">
					<a href="/about" class={activeNav === 'about' ? 'active' : ''}> About </a>
				</li>
			</ul>
		</nav>
		<div class="nav-end">
			<a
				href="/search"
				class={`${activeNav === 'search' ? 'active' : ''}`}
				role="button"
				title="Search"
			>
				<Search style="width: var(--size-4); height: var(--size-4);" />
				<span class="sr-only">Search</span>
			</a>
			<a role="button" href="/rss.xml"
				><Rss style="width: var(--size-4); height: var(--size-4);" /></a
			>
			{#if SITE.lightAndDarkMode}
				<Toggle />
			{/if}
		</div>
	</div>
</header>

<style>
	.header {
		background-color: var(--color-background);
		color: var(--color-text);
		position: sticky;
		isolation: isolate;
		width: 100%;
		top: 0;
		background-color: hsl(var(--color-gray-12-hsl) / 60%);
		backdrop-filter: blur(10px);
		z-index: 1000;

		#skip-to-content {
			position: absolute;
			top: -1000px;
			left: -1000px;
		}

		#skip-to-content:focus {
			position: static;
			top: 0;
			left: 0;
		}

		.top-nav-wrap {
			display: flex;
			justify-content: space-between;
			padding-inline: var(--size-4);
			align-items: center;
			width: var(--width-medium);
			margin-inline: auto;

			.logo {
				font-size: var(--size-5);
				font-weight: 700;
				color: var(--color-text);
				text-decoration: none;
				display: flex;
				white-space: nowrap;
				align-items: center;
			}

			.hamburger-menu {
				display: none;
			}

			@media (max-width: 768px) {
				.hamburger-menu {
					display: block;
				}
			}
			.desktop-menu {
				padding-block: var(--size-7);

				@media (min-width: 768px) {
					display: flex;
					justify-content: space-between;
				}

				.nav-items {
					display: flex;
					gap: var(--size-3);

					.links {
						.active {
							color: inherit;
							text-decoration: underline;
							/* text-decoration-color: var(--brand); */
							text-underline-offset: 0.2em;
							text-decoration-style: wavy;
						}

						&:hover {
							color: var(--brand);
						}
					}
				}
			}

			.nav-end {
				display: flex;
				gap: var(--size-3);
				align-items: center;

				.active {
					color: var(--brand);
				}

				@media (max-width: 768px) {
					display: none;
				}
			}
		}
	}
</style>
