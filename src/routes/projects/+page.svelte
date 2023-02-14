<script>
  import { themeColor } from "../../stores/states";
  import Project from "../components/Project.svelte";

  export let data;
</script>

<article>
  <h2 style={`color: ${$themeColor.background};`}>Projects</h2>
  {#each data.repos as repository}
    <Project {repository} />
  {/each}
</article>

<style lang="scss">
  @use "../../styles/colors.scss";

  article {
    color: colors.$grey;

    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
</style>
