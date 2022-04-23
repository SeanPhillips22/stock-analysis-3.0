<script>
	export let info
	export let chartTime

	let change = info.quote.c
	let css = change ? (change > 0 ? 'text-green-700' : change < 0 ? 'text-red-600' : 'text-gray-600') : 'text-gray-600'
</script>

<div class="price-change">
	<span class={css}>{change}%</span>
	<span class="hidden text-gray-700 sm:block">({chartTime})</span>
</div>

<style>
	.price-change {
		@apply flex flex-row space-x-1 pr-1 text-smaller sm:text-base shrink;
	}
</style>
