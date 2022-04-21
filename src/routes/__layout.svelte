<script>
	import '../app.css'
	import NProgress from 'nprogress'
	import { navigating } from '$app/stores'
	import 'nprogress/nprogress.css'
	import Header from '$lib/components/Header/_Header.svelte'
	import Navigation from '$lib/components/Navigation/_Navigation.svelte'
	import Footer from '$lib/components/Footer/_Footer.svelte'

	// Progress bar config
	NProgress.configure({
		minimum: 0.16,
		showSpinner: false
	})

	// Stop and end progress bar
	$: {
		if ($navigating) {
			NProgress.start()
		}
		if (!$navigating) {
			NProgress.done()
		}
	}
</script>

<Header />

<div class="mainbody">
	<Navigation />
	<main>
		<slot />
	</main>
</div>

<Footer />

<style>
	.mainbody {
		@apply xxl:grid xxl:grid-cols-leftnav grow;
	}
</style>
