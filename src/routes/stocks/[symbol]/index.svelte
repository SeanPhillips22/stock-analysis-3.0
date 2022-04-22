<script context="module">
	export async function load({ stuff }) {
		return {
			props: {
				info: stuff.info
			}
		}
	}
</script>

<script>
	export let info
</script>

<svelte:head>
	<title>{info.nameFull} ({info.ticker}) Stock Price, Quote & News</title>
</svelte:head>

<h1>Overview</h1>

<ul>
	<li><a href="/stocks/{info.symbol}/financials/">Financials</a></li>
	<li><a href="/stocks/{info.symbol}/statistics/">Statistics</a></li>
</ul>
