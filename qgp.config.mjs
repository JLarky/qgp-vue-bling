import vue from '@vitejs/plugin-vue';
import { defineCommon, defineVite } from 'qgp';
import checker from 'vite-plugin-checker';
import { bling } from '@tanstack/bling/vite';

export const common = defineCommon({
	vite: {
		plugins: [bling()],
	},
});

export default defineVite(common, {
	plugins: [
		vue(),
		checker({
			typescript: true,
			overlay: { initialIsOpen: false },
		}),
	],
	server: {
		port: 5173,
		proxy: {
			'/_m': 'http://localhost:3000/',
		},
	},
});
