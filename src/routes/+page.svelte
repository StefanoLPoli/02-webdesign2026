<script>
	import Filter from "$lib/components/Filter.svelte";
	import Project from "$lib/components/Project.svelte";

	const { data } = $props();

	let currentYear = $state(data.years[0].number);
	let projects = $derived.by(() => {
		return data.years.find((year) => {
			return year.number == currentYear;
		}).projects;
	});
</script>

<section class="safe-area hero">
	<h1>
		The National Basketball Association (NBA) presents 
		annual awards to recognize its teams, players, 
		and coaches for their accomplishments. This does not 
		include the NBA championship trophy which is given to 
		the winning team of the NBA Finals.
	</h1>
</section>

<nav class="safe-area filters">
	{#each data.years as year}
		<Filter bind:group={currentYear} value={year.number} />
	{/each}
</nav>

<section class="safe-area projects">
	{#each projects as project}
		<Project data={project.data} />
	{/each}
</section>

<style>
	.hero {
		padding: var(--padding-top-main) var(--padding-lateral);

		h1 {
			font-size: var(--font-size-h1);
			max-width: 35ch;
		}
	}

	.filters {
		display: flex;
		align-items: center;
		gap: var(--gap-filter-options);
	}

	.projects {
		padding-block: var(--gap-filter-options-top);
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--gap-card-grid);
	}
	@media (max-width: 600px) {
		.projects {
			grid-template-columns: 1fr;
		}
	}
</style>
