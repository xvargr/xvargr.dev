<script>
  import { themeColor } from "../../stores/states";
</script>

<article>
  <h2 style={`color: ${$themeColor.background};`}>contact</h2>
  <p>contact info</p>
</article>

<style lang="scss">
  @use "../../styles/colors.scss";

  article {
    color: colors.$grey;

    h2 {
      font-size: 1.5rem;
      // text-decoration: underline 4px;
    }
  }
</style>
