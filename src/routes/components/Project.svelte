<script>
  export let repository;

  const {
    name,
    description,
    retrospective,
    topics,
    stargazers_url,
    stargazers_count,
    html_url,
    homepage,
  } = repository;
</script>

<div class="project-container">
  <div class="header-bar">
    <h3 class="title">{name}</h3>
    <a class="stars" href={stargazers_url}>{stargazers_count} ⭐</a>
  </div>

  <p>{description}</p>

  {#if retrospective}
    <p>{retrospective}</p>
  {/if}

  <div>
    <a href={html_url} target="_blank" rel="noreferrer">github</a>
    {#if homepage}
      <a href={homepage} target="_blank" rel="noreferrer">live</a>
    {/if}
  </div>

  {#if topics}
    <div class="tools-container">
      {#each topics as tool}
        <span class={`tool-badge ${tool}`}>{tool}</span>
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  .project-container {
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 1rem;
    border: 2px solid var(--background-color);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

    .header-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .title {
        display: inline;
        color: var(--background-color);
      }

      .stars {
        text-decoration: none;
      }
    }

    .tools-container {
      display: flex;
      flex-wrap: wrap;
      margin-top: 1rem;

      .tool-badge {
        background-color: var(--background-color);
        min-width: 5rem;
        padding: 0.2rem 0.5rem;
        margin: 0.2rem;
        border-radius: 99rem;
        text-align: center;
      }
    }
  }
</style>
