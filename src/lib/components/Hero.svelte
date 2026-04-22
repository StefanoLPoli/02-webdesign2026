<script>
  let { description = '' } = $props();
</script>

<section class="hero" data-node-id="hero">
  <div class="hero-content">
    <p class="hero-text">
      {description}
    </p>
  </div>
</section>

<style>
  .hero {
    padding: var(--spacing-3xl) var(--container-padding);
    background-color: var(--color-bg-dark);
  }

  .hero-content {
    max-width: var(--container-max-width);
    margin: 0 auto;
  }

  .hero-text {
    font-family: var(--font-primary);
    font-size: var(--font-size-2xl);
    line-height: var(--line-height-relaxed);
    color: var(--color-text-primary);
    margin: 0;
    max-width: 600px;
  }
</style>
