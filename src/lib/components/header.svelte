<script lang="ts">
	import Toggle from '$lib/components/toggle.svelte';
	import { LOGO_IMAGE, SITE } from '$lib';
	import { Search } from 'lucide-svelte';
	import { Rss } from 'lucide-svelte';
	import { NavItems } from '$lib/config';
	import { onMount } from 'svelte';
	import { Menu, X } from 'lucide-svelte';

	let { activeNav } = $props();
	let mobileMenu: boolean = $state(false);

	let previousScrollPosition: number = $state(0);
	let showSearchInput: boolean = $state(false);

	onMount(() => {
		handleScroll();
	});

	function handleScroll() {
		window.addEventListener('scroll', () => {
			let currentScrollPosition = window.scrollY;
			const header = document.getElementById('myHeader');

			if (currentScrollPosition < previousScrollPosition) {
				header?.classList.remove('hidden');
			} else {
				header?.classList.add('hidden');
			}

			previousScrollPosition = currentScrollPosition;
		});
	}
</script>

<header
	class={previousScrollPosition > 0 ? 'header glass-effect hidden' : 'header glass-effect'}
	id="myHeader"
>
	<a id="skip-to-content" href="#main-content">Skip to content</a>
	<div class="top-nav-wrap">
		<button
			class="hamburger-menu handdrawn__button"
			aria-label="Open Menu"
			aria-expanded="false"
			aria-controls="menu-items"
			onclick={() => (mobileMenu = !mobileMenu)}
		>
			{#if mobileMenu}
				<X />
			{:else}
				<Menu />
			{/if}
		</button>
		<a href="/" class="logo">
			{#if LOGO_IMAGE.enable}
				<img
					src={`/${LOGO_IMAGE.svg ? 'logo.svg' : 'logo.png'}`}
					alt={SITE.title}
					width={LOGO_IMAGE.width}
					height={LOGO_IMAGE.height}
				/>
			{:else}
				{SITE.title}
			{/if}
		</a>

		{#if mobileMenu}
			<nav id="nav-menu" class="mobile-menu">
				<ul id="menu-items" class="nav-items">
					{#each NavItems as navItem}
						<li class="links">
							<a
								href={navItem.route}
								class={activeNav === navItem.route.replace('/', '') ? 'active' : ''}
							>
								{navItem.title}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		{/if}

		<nav id="nav-menu" class="desktop-menu">
			<ul id="menu-items" class="nav-items">
				{#each NavItems as navItem}
					<li class="links">
						<a
							href={navItem.route}
							class={activeNav === navItem.route.replace('/', '') ? 'active' : ''}
						>
							{navItem.title}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
		<div class="nav-end">
			<button
				class={`${activeNav === 'search' ? 'active handdrawn__button' : 'inactive'}`}
				title="Search"
				onclick={() => (showSearchInput = !showSearchInput)}
			>
				<Search style="width: var(--size-4); height: var(--size-4);" />
				<span class="sr-only">Search</span>
			</button>
			<a role="button" href="/rss.xml"
				><Rss style="width: var(--size-4); height: var(--size-4);" /></a
			>
			{#if SITE.lightAndDarkMode}
				<Toggle />
			{/if}
			{#if showSearchInput}
				<form action="/search" class="search__form">
					<input type="text" class="search__input" name="query" placeholder="search posts" />
				</form>
			{/if}
		</div>
	</div>
</header>

<style>
	.hidden {
		display: none;
		animation: var(--animation-fade-out) forwards;
	}

	.header {
		isolation: isolate;
		z-index: var(--layer-important);
		color: var(--text-primary);
		width: 100%;
		position: fixed;
		top: 0;
		animation:
			var(--animation-fade-in) forwards,
			var(--animation-slide-in-down);
		animation-timing-function: var(--ease-spring-3);
		animation-duration: 1s;

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
			padding-block: var(--size-6);
			position: relative;
			box-shadow: var(--shadow-2);
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

			.desktop-menu {
				display: flex;
				justify-content: space-between;

				.nav-items {
					display: flex;
					gap: var(--size-3);

					.links {
						.active {
							color: var(--accent);
							text-decoration: underline;
							text-decoration-color: var(--accent);
							text-underline-offset: 0.4em;
							text-decoration-style: wavy;
						}

						&:hover {
							color: var(--accent);
						}
					}
				}
			}
			.mobile-menu {
				display: none;
			}

			.nav-end {
				display: flex;
				gap: var(--size-3);
				align-items: center;
				position: relative;

				.active {
					color: var(--accent);
				}

				.inactive {
					background: transparent;
					border: none;
					box-shadow: none;
				}

				.search__form {
					position: absolute;
					right: 0;
					top: 3.5rem;
					background: var(--surface-primary);
					padding: var(--size-4);
					box-shadow: var(--shadow-1);
					animation:
						var(--animation-fade-in) forwards,
						var(--animation-slide-in-down);
					animation-timing-function: var(--ease-spring-3);
					animation-duration: 1s;

					&::before {
						content: '';
						position: absolute;
						border-bottom: 15px solid var(--surface-primary);
						border-left: 15px solid transparent;
						border-right: 15px solid transparent;
						top: 0;
						left: 62%;
						margin-top: -14px;
					}
				}

				.search__input {
					padding-inline: var(--size-4);
					padding-block: var(--size-2);
					background: var(--surface);
					color: var(--accent);
				}
			}
		}
		@media (max-width: 768px) {
			.top-nav-wrap {
				width: 100%;
				justify-content: flex-start;
				gap: var(--size-4);

				.hamburger-menu {
					display: block;
				}

				.desktop-menu {
					display: none;
				}

				.mobile-menu {
					display: block;
					position: absolute;
					top: 5rem;
					left: 1rem;
					padding: var(--size-5);
					background: var(--surface-primary);
					z-index: var(--layer-important);
					width: var(--size-content-1);
					animation:
						var(--animation-fade-in) forwards,
						var(--animation-slide-in-right);
					animation-timing-function: var(--ease-spring-3);
					animation-duration: 1s;
					border-radius: var(--radius-2);

					.nav-items {
						display: grid;
						gap: var(--size-4);
					}
				}
			}
		}
	}
</style>
