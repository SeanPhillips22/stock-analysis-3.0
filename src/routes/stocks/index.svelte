<script>
	export let data
</script>

<h1>All Stock Symbols</h1>

<ul>
	{#each data as stock}
		<li><a href="/stocks/{stock.s.toLowerCase()}/">{stock.n}</a></li>
	{/each}
</ul>
