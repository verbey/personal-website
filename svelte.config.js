import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import { resolve } from 'node:path';

const markdownLayout = resolve('src/lib/markdown-layouts/Layout.svelte');

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', '.md', '.svx'],
    preprocess: [
        mdsvex({
            extensions: ['.md', '.svx'],
            layout: markdownLayout,
            layoutPropForwarding: 'runes',
            rehypePlugins: [rehypeSlug]
        })
    ],
    kit: {
        // default options are shown
        adapter: adapter({
            // if true, will create a Netlify Edge Function rather
            // than using standard Node-based functions
            edge: false,

            // if true, will split your app into multiple functions
            // instead of creating a single one for the entire app.
            // if `edge` is true, this option cannot be used
            split: false
        })
    }
};

export default config;