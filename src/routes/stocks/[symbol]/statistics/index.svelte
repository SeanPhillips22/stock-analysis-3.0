<script context="module">
	export async function load({ params, fetch, stuff }) {
		let symbol = params.symbol

		const res = await fetch(`https://api.stockanalysis.com/wp-json/sa/statistics?symbol=${symbol}`)
		const data = await res.json()

		return {
			props: { info: stuff, data }
		}
	}
</script>

<script>
	export let info
	let i = info.info
	export let data
</script>

<h1>Statistics</h1>

<ul>
	<li><a href="/stocks/{i.symbol}/financials/">Financials</a></li>
	<li><a href="/stocks/{i.symbol}/statistics/">Statistics</a></li>
</ul>

<div>Statistics: {JSON.stringify(data)}</div>
