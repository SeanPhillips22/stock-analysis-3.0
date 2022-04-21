<script>
	export let data
</script>

<h1>All Stock Symbols</h1>

<div class="container">
	<table>
		<thead>
			<tr>
				<th>Symbol</th>
				<th>Company Name</th>
				<th>Industry</th>
				<th>Market Cap</th>
			</tr>
		</thead>
		<tbody>
			{#each data as stock (stock.s)}
				<tr>
					<td><a href="/stocks/{stock.s.toLowerCase()}/">{stock.s}</a></td>
					<td>{stock.n}</td>
					<td>{stock.i}</td>
					<td>{stock.m}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	h1 {
		@apply border-b-[3px] border-blue-brand_sharp pb-3 mb-3 sm:mb-4 lg:mb-5;
	}

	.container {
		@apply lg:grid lg:grid-cols-sidebar lg:gap-x-10;
	}
</style>
