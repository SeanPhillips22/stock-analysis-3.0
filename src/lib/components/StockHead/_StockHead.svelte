<script>
	import Quote from './PriceQuote.svelte'
	export let info
</script>

<div class="container">
	<div class="stock-head">
		<h1>{info.nameFull} ({info.ticker})</h1>
		<div class="details">{info.exchange}: {info.ticker} · IEX Real-Time Price · USD</div>
	</div>

	<Quote quote={info.quote} />
</div>

<style>
	.container {
		@apply mx-auto;
	}

	.stock-head {
		@apply mb-4;
	}

	h1 {
		@apply text-2xl font-bold text-gray-900 sm:text-[26px] mb-0;
	}

	.details {
		@apply mt-[1px] text-tiny text-gray-600;
	}
</style>
