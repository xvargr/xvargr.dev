<script>
  import { themeColor } from "../../stores/states";

  // const projects = [{ name: "", description: "", technologies: [""], link: "", retrospective: "" }];
  export let data;
  console.log(data.github);
</script>

<article>
  <h2>{data.github}</h2>
  <h2 style={`color: ${$themeColor.background};`}>projects</h2>
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
      margin-bottom: 0.5rem;
    }
  }
</style>
