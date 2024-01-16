import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

import { scssPrepend } from './svelte-scss-options.js';

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
    // globals: true,
    // environment: 'jsdom',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: scssPrepend,
      },
    },
  },
});
