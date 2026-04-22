<script>
  let { title = '', subtitle = '' } = $props();
</script>

<header class="header" data-node-id="header">
  <div class="header-content">
    <div class="logo">WI-D</div>
    <nav class="nav">
      <a href="#about">About</a>
      <a href="#contact">@webdesign_db</a>
    </nav>
  </div>
</header>

<style>
  .header {
    padding: var(--spacing-xl) var(--container-padding);
    border-bottom: 1px solid var(--color-border);
    background-color: var(--color-bg-dark);
  }

  .header-content {
    max-width: var(--container-max-width);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-family: var(--font-primary);
    font-size: var(--font-size-lg);
    font-weight: 600;
    color: var(--color-text-primary);
  }

  .nav {
    display: flex;
    gap: var(--spacing-xl);
  }

  .nav a {
    color: var(--color-text-secondary);
    text-decoration: none;
    font-family: var(--font-secondary);
    font-size: var(--font-size-sm);
    transition: color 0.3s ease;
  }

  .nav a:hover {
    color: var(--color-text-primary);
  }
</style>
