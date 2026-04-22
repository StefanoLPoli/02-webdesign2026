<script>
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import FilterBar from '$lib/components/FilterBar.svelte';
  import Gallery from '$lib/components/Gallery.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { activeYear, filteredProjects } from '$lib/stores/projects';

  const heroDescription = 'This archive collects the best outcomes of the Web Design Laboratory in Communication Design, Politecnico di Milano. The laboratory is directed by Umberto Tolino, Christian Marazoleni, Francesco di Gioia and Tommaso Negri with love.';

  function handleYearChange(event) {
    activeYear.set(event.detail.year);
  }
</script>

<svelte:head>
  <title>WI-D - Web Design Laboratory Archive</title>
</svelte:head>

<div class="page-container">
  <Header />
  <Hero description={heroDescription} />
  <div class="gallery-section">
    <div class="container">
      <FilterBar 
        years={[2026, 2025, 2024]}
        activeYear={$activeYear}
        on:yearChange={handleYearChange}
      />
      <Gallery projects={$filteredProjects} />
    </div>
  </div>
  <Footer />
</div>

<style>
  .page-container {
    background-color: var(--color-bg-dark);
    color: var(--color-text-primary);
    min-height: 100vh;
  }

  .gallery-section {
    padding: var(--spacing-xl) 0;
    background-color: var(--color-bg-dark);
  }

  .container {
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: 0 var(--container-padding);
  }
</style>
