// @ts-check
import { defineConfig } from 'astro/config';
import { defineAstro } from 'qgp';
import vue from '@astrojs/vue';

import { common } from './qgp.config.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [vue()],
	vite: defineAstro(common, {}),
	server: { port: 3000 },
});
