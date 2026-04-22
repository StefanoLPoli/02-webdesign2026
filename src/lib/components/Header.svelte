<script>
	import Link from "$lib/components/Link.svelte";
</script>

<header class="safe-area">
	<Link title="NBA Individual Awards" ref="/" />

	<nav>
		<Link title="About" ref="https://en.wikipedia.org/wiki/List_of_NBA_awards" />
		<Link
			title="@nba"
			ref="https://www.instagram.com/nba/"
		/>
	</nav>
</header>

<style>
	header {
		padding-block: var(--size-6);

		display: flex;
		gap: var(--size-8);
		justify-content: space-between;
		align-items: center;
	}

	nav {
		display: flex;
		gap: var(--size-6);
		align-items: center;
	}
</style>
