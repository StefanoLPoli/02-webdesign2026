<script>
	import Link from "$lib/components/Link.svelte";
</script>

<header class="safe-area">
	<Link title="NBA Individual Awards" ref="./" />

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
		padding: var(--padding-top-header) var(--padding-lateral);

		display: flex;
		gap: var(--gap-header-links);
		justify-content: space-between;
		align-items: center;
	}

	nav {
		display: flex;
		gap: var(--gap-header-links);
		align-items: center;
	}

	link {
		font-size: var(--font-size-links);
	}
</style>
