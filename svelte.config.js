import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';
// import { scss } from 'svelte-preprocess';
import svelte from 'rollup-plugin-svelte';

// import { reactivePreprocess } from 'svelte-reactive-preprocessor';

const scssPrepend = [
	'@use "sass:math";',
	'@use "sass:color";',
	'@use "./src/core/assets/scss/variables.scss" as *;',
	'@use "./src/core/assets/scss/mixins.scss" as *;',
].join('\n');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	/*
	 * plugins: [
	 *   svelte({
	 *     preprocess: preprocess({
	 *       scss: {
	 *         additionalData: scssPrepend,
	 *       },
	 *     }),
	 *     [>
	 *      * preprocess: [
	 *      *   // https://github.com/sveltejs/svelte-preprocess/blob/main/docs/preprocessing.md#scss-sass
	 *      *   scss({
	 *      *     additionalData: scssPrepend,
	 *      *   }),
	 *      * ],
	 *      <]
	 *   }),
	 * ],
	 */
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		preprocess({
					scss: {
						prependData: scssPrepend,
						// additionalData: scssPrepend,
					},
		}),
		vitePreprocess(),
		// reactivePreprocess(),
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			'@/src/*': 'src/*',
		},
	},
};

export default config;
