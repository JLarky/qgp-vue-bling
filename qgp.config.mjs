import vue from '@vitejs/plugin-vue';
import { defineCommon, defineVite } from 'qgp';
import checker from 'vite-plugin-checker';

export const common = defineCommon({
	vite: {},
});

export default defineVite(common, {
	plugins: [
		vue(),
		checker({
			typescript: true,
			overlay: { initialIsOpen: false },
		}),
	],
	server: { port: 5173 },
});
