import { fetch$ } from '@tanstack/bling';

export const increment = fetch$(
	async function ({ count, button }: { count: number; button: '+' | '-' }) {
		// await new Promise((r) => setTimeout(r, 1000));
		return {
			count: count + (button === '+' ? 1 : -1),
		};
	},
	{ method: 'GET' }
);
