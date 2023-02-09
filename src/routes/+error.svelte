<script>
  import { page } from "$app/stores";
  import { themeColor } from "../stores/states";
</script>

<article>
  <h2 style={`color: ${$themeColor.background};`}>Error - {$page.status}</h2>
  {$page.error.message}
</article>

<style lang="scss">
  @use "../styles/colors.scss";

  article {
    color: colors.$grey;

    h2 {
      font-size: 1.5rem;
    }
  }
</style>
