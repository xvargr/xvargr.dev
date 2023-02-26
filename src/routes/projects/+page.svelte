<script>
  import Project from "../components/Project.svelte";

  export let data;
  const { repos } = data;
</script>

<article>
  <h2>Projects</h2>
  {#each repos as repository}
    <Project {repository} />
  {/each}
</article>

<style lang="scss">
  @use "../../styles/colors.scss";

  article {
    color: colors.$grey;

    h2 {
      color: var(--background-color);
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
</style>
