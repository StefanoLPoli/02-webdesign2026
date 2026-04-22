<script>
  import { createEventDispatcher } from 'svelte';
  
  let { years = [2026, 2025, 2024], activeYear = 2026 } = $props();
  const dispatch = createEventDispatcher();

  function handleYearClick(year) {
    dispatch('yearChange', { year });
  }
</script>

<div class="filter-bar" data-node-id="filter-bar">
  {#each years as year}
    <button
      class="year-button"
      class:active={activeYear === year}
      on:click={() => handleYearClick(year)}
    >
      {year}
    </button>
  {/each}
</div>

<style>
  .filter-bar {
    display: flex;
    gap: var(--spacing-md);
    justify-content: flex-start;
    margin: var(--spacing-2xl) 0;
  }

  .year-button {
    padding: var(--spacing-md) var(--spacing-xl);
    border: 1px solid transparent;
    border-radius: var(--radius-lg);
    background-color: transparent;
    color: var(--color-text-primary);
    font-family: var(--font-secondary);
    font-size: var(--font-size-base);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .year-button:hover {
    background-color: var(--color-hover-overlay);
  }

  .year-button.active {
    background-color: var(--color-accent-coral);
    color: #ffffff;
  }
</style>
