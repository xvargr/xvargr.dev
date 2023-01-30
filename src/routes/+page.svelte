<script>
  // import { onMount } from "svelte";

  // onMount(() => {
  //   // const title = document.querySelector(".intro-title");
  //   // console.log(title.textContent);
  //   // console.log(typeof title.textContent);
  //   // console.log([...title.textContent]);
  //   // setInterval(() => {
  //   //   const titleContent = [...title.textContent];
  //   //   // const newText = titleContent.slice(titleContent.length - 1);
  //   //   titleContent.pop();
  //   //   // console.log(titleContent);
  //   //   // console.log(newText);
  //   //   // title.textContent = .join();
  //   //   title.textContent = titleContent.join("");
  //   // }, 1000);

  //   const thing = document.querySelector("#technology");
  //   console.log(thing);
  // });
</script>

<main>
  <div class="content">
    <div class="welcome">
      <div class="alias">xvargr</div>
      <div class="name">Akmal Shareef</div>
      <div class="subtitle">I know <span id="technology">technology</span></div>
    </div>

    <section>
      <h2 id="section1">
        <span>Projects</span>
      </h2>
      <p style="width: full; height:30rem" />

      <h2 id="section2">
        <span>Technologies</span>
      </h2>
      <p style="width: full; height:30rem" />

      <h2 id="section3">
        <span>Experience</span>
      </h2>
      <p style="width: full; height:15rem" />

      <h2 id="section4">
        <span>CV</span>
      </h2>
      <p style="width: full; height:20rem" />

      <h2 id="section5">
        <span>Contact</span>
      </h2>
      <p style="width: full; height:30rem" />
    </section>
  </div>
</main>

<style lang="scss">
  @use "../styles//fonts.scss";
  @use "../styles/colors.scss";

  main {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    overflow-y: auto;
  }

  .content {
    // height: 100vh;
    overflow-x: hidden;
    // overflow-y: auto;
    padding-right: 1rem;
    margin-left: 130px;

    background-color: colors.$darkest;
    color: colors.$lightest;
    // background-color: darkblue;
  }

  // @media (min-width: 768px) {
  //   .content {
  //     max-width: 70rem;

  //     margin: auto;
  //     left: 0;
  //     right: 0;
  //   }
  // }

  @media (min-width: 1536px) {
    .content {
      max-width: 85rem;

      margin: auto;
      left: 0;
      right: 0;
    }
  }

  // section {
  //   margin-left: 100px;
  // }

  h2 > span {
    padding: 0.2rem;
    background-color: white;
    color: black;
  }

  .welcome {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    height: 100vh;
    text-align: center;
    justify-content: center;

    .alias {
      font-family: fonts.$logo;
      font-weight: 700;
      font-size: 6rem;
      margin-bottom: -2.3rem;

      // text-decoration: underline colors.$emphasis 0.5rem;
      text-decoration-line: underline;
      -webkit-text-decoration-line: underline;
      text-decoration-color: colors.$emphasis;
      -webkit-text-decoration-color: colors.$emphasis;
      text-decoration-thickness: 0.5rem;
      -webkit-text-decoration-thickness: 0.5rem;
    }

    .name {
      font-weight: 100;
      font-size: 4rem;
    }

    .subtitle {
      font-weight: 400;
      font-size: 1.3rem;

      #technology {
        font-family: fonts.$general;
        font-weight: 600;
        color: colors.$emphasis;
      }
    }
  }
</style>
