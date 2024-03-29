import preprocess from 'svelte-preprocess';
// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-vercel'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter: adapter(),
		adapter: adapter({ edge: true }),
		trailingSlash: 'always'
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
