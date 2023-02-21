<script>
  import { page } from "$app/stores";
</script>

<article>
  <h2>Error - {$page.status}</h2>
  {$page.error.message}
</article>

<style lang="scss">
  @use "../styles/colors.scss";

  article {
    color: colors.$grey;

    h2 {
      font-size: 1.5rem;
      color: var(--background-color);
    }
  }
</style>
