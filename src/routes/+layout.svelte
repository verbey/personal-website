<script lang="ts">
	import "./reset.css";
	import favicon from "$lib/assets/favicon.svg";
	import Navigation from "$lib/components/Navigation/Navigation.svelte";
	import Logo from "$lib/components/Logo/Logo.svelte";

	let { children } = $props();
	export const prerender = true;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Logo />
<Navigation />
<main class="content">
	{@render children()}
</main>

<style>
	:global {
		:root {
			--text: #16160d;
			--background: #e9e9c7;
			--primary: #772424;
			--secondary: #d5d4d0;
			--accent: #ff2708;
		}

		@media (prefers-color-scheme: dark) {
			:root {
				--text: #dbd8be;
				--background: #000000;
				--primary: #3d0000;
				--secondary: #262626;
				--accent: #f43323;
			}
		}

		html {
			font-family: Charter, "Bitstream Charter", "Sitka Text", Cambria,
				serif;
			font-size: 1rem;
			font-weight: normal;
			color: var(--text);
			background: var(--background);
		}

		body {
			padding: 8px;
		}

		.content {
			padding: clamp(2rem, 5vw, 4rem) 450px;
		}

		p {
			line-height: 1.5rem;
			margin: 0 0 1rem 0;
		}

		@media screen and (max-width: 1300px) {
			.content {
				padding-left: 200px;
				padding-right: 200px;
			}
		}

		@media screen and (max-width: 800px) {
			.content {
				padding-left: 100px;
				padding-right: 100px;
			}
		}

		@media screen and (max-width: 520px) {
			.content {
				padding-left: 50px;
				padding-right: 50px;
			}
		}

		@media screen and (max-width: 420px) {
			.content {
				padding-left: 16px;
				padding-right: 16px;
			}
		}

		@media screen and (prefers-reduced-motion: reduce) {
			* {
				animation-duration: 0.001ms !important;
				animation-iteration-count: 1 !important;
				transition-duration: 0.001ms !important;
			}
		}
	}
</style>
