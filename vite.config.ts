import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

const scssPrepend = [
	'@use "sass:math";',
	'@use "sass:color";',
	'@use "./src/core/assets/scss/variables.scss" as *;',
	'@use "./src/core/assets/scss/mixins.scss" as *;',
].join('\n');

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: scssPrepend,
			},
		},
	},
});
