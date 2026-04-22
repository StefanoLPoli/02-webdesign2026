<script>
  import ProjectCard from './ProjectCard.svelte';

  let { projects = [] } = $props();
</script>

<div class="gallery" data-node-id="gallery">
  <div class="gallery-grid">
    {#each projects as project (project.id)}
      <ProjectCard
        title={project.title}
        year={project.year}
        image={project.image}
      />
    {/each}
  </div>
</div>

<style>
  .gallery {
    padding: var(--spacing-3xl) var(--container-padding);
    background-color: var(--color-bg-dark);
  }

  .gallery-grid {
    max-width: var(--container-max-width);
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(var(--grid-columns), 1fr);
    gap: var(--grid-gap);
  }

  @media (max-width: 768px) {
    .gallery-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
