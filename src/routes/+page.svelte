<script>
  import { themeColor } from "../stores/states";
</script>

<article>
  <div>
    <h2 style={`color: ${$themeColor.background};`}>Hello there 👋🏻</h2>
    <p>
      I am a self-taught web developer pivoting from an aircraft engineering background. I have an
      affinity for problem solving and enjoy the challenge of finding elegant solutions to complex
      problems, while learning new skills and tools along the way.
    </p>

    <p>
      My other interests are 3D modeling & 3D printing, PC building, gaming, and mechanical watches
    </p>
  </div>
</article>

<style lang="scss">
  @use "../styles/colors.scss";

  article {
    color: colors.$grey;

    h2 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      // text-decoration: underline 4px;
    }

    p {
      margin-bottom: 0.5rem;
    }

    @media (min-width: 640px) {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;

      padding: 4rem;
    }
  }
</style>
