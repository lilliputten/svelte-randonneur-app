import autoAdapter from '@sveltejs/adapter-auto';
import staticAdapter from '@sveltejs/adapter-static'; // @see https://kit.svelte.dev/docs/adapter-static
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';

import { allData } from './utils/gulp-helpers.js';
import { scssPrepend } from './svelte-scss-options.js';

// Pass build info to the application...
process.env.VITE_BUILD_INFO = JSON.stringify(allData());

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    preprocess({
      // @see: https://github.com/sveltejs/svelte-preprocess/blob/main/docs/getting-started.md
      scss: {
        prependData: scssPrepend,
      },
    }),
    vitePreprocess(),
  ],

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    // adapter: staticAdapter({ // For build mode
    adapter: autoAdapter({
      // pages: 'build',
      // assets: 'build',
      // precompress: false,
      // strict: true,
      // fallback: 'index.html',
    }),
    alias: {
      '@/src/*': 'src/*',
    },
  },
};

export default config;
