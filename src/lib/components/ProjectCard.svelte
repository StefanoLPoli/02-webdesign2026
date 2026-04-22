<script>
  let { title = '', year = '', image = '' } = $props();
</script>

<article class="project-card" data-node-id="project-card">
  <div class="project-image">
    <img src={image} alt={title} />
  </div>
  <div class="project-info">
    <h3 class="project-title">{title}</h3>
    <p class="project-year">{year}</p>
  </div>
</article>

<style>
  .project-card {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    cursor: pointer;
    transition: opacity 0.3s ease;
  }

  .project-card:hover {
    opacity: 0.8;
  }

  .project-image {
    width: 100%;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    border-radius: var(--radius-lg);
    background-color: var(--color-bg-dark);
  }

  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .project-info {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .project-title {
    font-family: var(--font-primary);
    font-size: var(--font-size-base);
    color: var(--color-text-primary);
    margin: 0;
    font-weight: 500;
  }

  .project-year {
    font-family: var(--font-secondary);
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    margin: 0;
  }
</style>
