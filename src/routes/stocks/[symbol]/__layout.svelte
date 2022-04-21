<script context="module">
	export const hydrate = false
	export async function load({ params, fetch }) {
		let symbol = params.symbol

		const res = await fetch(`https://api.stockanalysis.com/wp-json/sa/chartpage?symbol=${symbol}&t=stocks`)
		const data = await res.json()

		return {
			props: {
				info: data.data.info
			}
		}
	}
</script>

<script>
	export let info
</script>

<section class="stock-head">
	<h1>{info.nameFull} ({info.ticker})</h1>

	<div>Price: {info.quote.p}</div>
	<div>Updated: {info.quote.u}</div>
	{#if info.quote.e}
		<div>Premarket: {info.quote.ep}</div>
		<div>Premarket: {info.quote.eu}</div>
	{/if}
</section>

<div class="stock-content">
	<slot />
</div>

<style>
	.stock-head,
	.stock-content {
		@apply p-4;
	}
</style>
