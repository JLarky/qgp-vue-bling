import { fetch$ } from '@qgp-js/bling';

export const increment = () =>
	fetch$(async function ({ count, button }: { count: number; button: '+' | '-' }) {
		return {
			count: count + (button === '+' ? 1 : -1),
		};
	});
