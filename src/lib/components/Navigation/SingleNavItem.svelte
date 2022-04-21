<script>
	export let url
	export let name
</script>

<a href={url} title={name}>
	{name}
</a>

<style>
	a {
		@apply text-sm font-semibold text-gray-600;
	}
</style>
