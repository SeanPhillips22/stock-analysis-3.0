<script>
	import { browser } from '$app/env'
	import { onMount } from 'svelte'
	import Controls from './PriceChartControls.svelte'
	import Change from './PriceChartChange.svelte'
	import Chart from './PriceChartChart.svelte'
	export let info

	let chartTime = '1D'

	let data
	onMount(async () => {
		try {
			const res = await fetch(
				`https://api.stockanalysis.com/wp-json/sa/chart?s=${info.symbol}&t=stocks&r=${chartTime}&m=1`
			)
			data = await res.json()
		} catch (e) {
			console.error(e)
		}
	})
</script>

<div class="container">
	<div class="controls">
		<Controls {chartTime} />
		<Change {info} {chartTime} />
	</div>
	<div class="chart-wrap">
		{#if browser && data}
			<Chart {data} time={chartTime} change={info.quote.c} />
		{/if}
	</div>
</div>

<style>
	.container {
		@apply mb-4 border-t border-b border-gray-200 py-0.5 xs:py-1 sm:py-3 sm:px-2 lg:mb-0 lg:border-0 lg:border-l lg:border-gray-300 lg:py-0 lg:px-0 lg:pl-3;
	}

	.controls {
		@apply flex items-center justify-between py-1 sm:pt-0.5;
	}
</style>
