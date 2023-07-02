<script>
  import ToolBadge from "./ToolBadge.svelte";

  export let title;
  export let timelineArray = [];
</script>

<section>
  <h2>{title}</h2>
  {#each timelineArray as node, index}
    <div class="connector" class:fade-top={index === 0} />
    <div class="node">
      <div class="header">
        <span class="duration">{node.duration}</span>
        <h3>{node.institution}</h3>
      </div>
      <h4>{node.title}</h4>

      <hr />

      <ul>
        {#each node.description as description}
          <li>{description}</li>
        {/each}
      </ul>

      {#if node.skills}
        <hr />
        <div class="tools-container">
          {#each node.skills as skill}
            <ToolBadge type={skill} />
          {/each}
        </div>
      {/if}
    </div>
    <div class="connector" class:fade-bottom={index === timelineArray.length - 1} />
  {/each}
</section>

<style lang="scss">
  @use "../../styles/colors.scss";

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--background-color);
  }

  hr {
    border: 1px dashed var(--highlight-color);
    margin: 1rem 0;
  }

  ul {
    li {
      margin-bottom: 0.5rem;
    }
    li:last-of-type {
      margin-bottom: 0;
    }
  }

  section {
    margin-bottom: 4rem;
    color: colors.$grey;

    .node {
      padding: 1rem;
      border-radius: 1rem;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      border: 2px solid var(--background-color);

      .header {
        .duration {
          flex-shrink: 0;
        }
      }

      .tools-container {
        display: flex;
        flex-wrap: wrap;
      }
    }

    .connector {
      margin: auto;
      width: 0.25rem;
      height: 1.5rem;
      background-color: var(--background-color);
    }

    .fade-top {
      height: 3rem;
      background: linear-gradient(#ffffff, var(--background-color));
    }

    .fade-bottom {
      height: 3rem;
      background: linear-gradient(var(--background-color), #ffffff);
    }
  }

  @media (min-width: 640px) {
    .header {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
    }
  }
</style>
