<script>
  import { themeColor } from "../../stores/states";

  export let title;
  export let timelineArray = [];
</script>

<section>
  <h2 style={`color: ${$themeColor.background};`}>{title}</h2>
  {#each timelineArray as node, index}
    <div
      class="connector"
      class:fade-top={index === 0}
      style={`background-color: ${$themeColor.background};`}
    />
    <div class="node" style={`border: 2px solid ${$themeColor.background};`}>
      <div>{node.duration}</div>
      <h3>{node.institution}</h3>
      <h4>{node.title}</h4>
      <ul>
        {#each node.description as description}
          <li>{description}</li>
        {/each}
      </ul>
    </div>
    <div
      class="connector"
      class:fade-bottom={index === timelineArray.length - 1}
      style={`background-color: ${$themeColor.background};`}
    />
  {/each}
</section>

<style lang="scss">
  @use "../../styles/colors.scss";

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  section {
    margin-bottom: 4rem;

    .node {
      padding: 1rem;
      border-radius: 1rem;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    }

    .connector {
      margin: auto;
      width: 0.25rem;
      height: 1.5rem;
    }

    .fade-top {
      height: 3rem;
      background: linear-gradient(#ffffff, #00000000);
    }

    .fade-bottom {
      height: 3rem;
      background: linear-gradient(#00000000, #ffffff);
    }
  }
</style>
