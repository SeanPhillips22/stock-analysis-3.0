<script>
	export let symbol
	export let data
</script>

<h1>Financials</h1>

<ul>
	<li><a href="/stocks/{symbol}/">Overview</a></li>
	<li><a href="/stocks/{symbol}/statistics/">Statistics</a></li>
</ul>

<div>Financials: {JSON.stringify(data)}</div>
