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
		padding-block: var(--size-11);

		h1 {
			font-size: var(--size-7);
			max-width: 35ch;
		}
	}

	.filters {
		display: flex;
		align-items: center;
		gap: var(--size-5);
	}

	.projects {
		padding-block: var(--size-7);

		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--size-5);
	}
</style>
