import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import { resolve } from 'node:path';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const markdownLayout = resolve('src/lib/markdown-layouts/Layout.svelte');

export default defineConfig({
	plugins: [
		sveltekit({
			extensions: ['.svelte', '.md', '.svx'],
			preprocess: [
				mdsvex({
					extensions: ['.md', '.svx'],
					layout: markdownLayout,
					layoutPropForwarding: 'runes',
					rehypePlugins: [rehypeSlug]
				})
			],
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
			// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
			// See https://svelte.dev/docs/kit/adapters for more information about adapters.
			adapter: adapter()
		})
	]
});
