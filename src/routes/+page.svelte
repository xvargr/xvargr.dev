<script>
  import { userInfo } from "./userData";
</script>

<article>
  <div>
    <h2>Hello there 👋🏻</h2>
    <p>{@html userInfo.introduction}</p>
  </div>
</article>

<style lang="scss">
  @use "../styles/colors.scss";

  article {
    display: flex;
    width: 100%;
    height: 100%;
    color: colors.$grey;

    div {
      margin: auto;
      h2 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        color: var(--background-color);
      }

      p {
        margin-bottom: 0.5rem;
      }
    }
  }

  @media (min-width: 640px) {
    article {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 2rem;

      > div {
        max-width: 40rem;
      }
    }
  }
</style>
