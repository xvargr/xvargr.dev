<article>
  <div>
    <h2>Hello there 👋🏻</h2>
    <p>
      I am a self-taught web developer pivoting from an aircraft engineering background. I have been
      creating full stack, responsive web applications for over a year, with a solid understanding
      of the fundamentals, specializing in the <b>MERN</b> stack, although I do dabble in less common
      and newer technologies such as Svelte and Next.js. I am a quick learner and have an affinity for
      problem solving and enjoy the challenges that comes with it.
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
      color: var(--background-color);
    }

    p {
      margin-bottom: 0.5rem;
    }
  }

  @media (min-width: 640px) {
    article {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 4rem;

      > div {
        max-width: 40rem;
      }
    }
  }
</style>
