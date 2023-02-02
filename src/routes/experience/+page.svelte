<script>
  import { themeColor } from "../../stores/states";
</script>

<article>
  <h2 style={`color: ${$themeColor.background};`}>experience</h2>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
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
