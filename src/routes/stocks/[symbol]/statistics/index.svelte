<script>
	export let symbol
	export let data
</script>

<h1>Statistics</h1>

<ul>
	<li><a href="/stocks/{symbol}/financials/">Financials</a></li>
	<li><a href="/stocks/{symbol}/statistics/">Statistics</a></li>
</ul>

<div>Statistics: {JSON.stringify(data)}</div>
