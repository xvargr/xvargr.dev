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

<div class="content">
  <div class="welcome">
    <div class="alias">xvargr</div>
    <div class="name">Akmal Shareef</div>
    <div class="subtitle">I know <span id="technology">technology</span></div>
  </div>

  <section>
    <h2 id="section1">
      <span> Hello World </span>
    </h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vel commodi debitis dolores
      amet adipisci nihil quas eaque harum, animi error necessitatibus officiis quos dolorum
      obcaecati neque tempora id consectetur. Eveniet inventore consectetur quos, quia sit, quas
      nulla numquam Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vel commodi
      debitis dolores amet adipisci nihil quas eaque harum, animi error necessitatibus officiis quos
      dolorum obcaecati neque tempora id consectetur. Eveniet inventore consectetur quos, quia sit,
      quas nulla numquam
    </p>

    <h2 id="section2">
      <span> Hello World 2 </span>
    </h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vel commodi debitis dolores
      amet adipisci nihil quas eaque harum, animi error necessitatibus officiis quos dolorum
      obcaecati neque tempora id consectetur. Eveniet inventore consectetur quos, quia sit, quas
      nulla numquam Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vel commodi
      debitis dolores amet adipisci nihil quas eaque harum, animi error necessitatibus officiis quos
      dolorum obcaecati neque tempora id consectetur. Eveniet inventore consectetur quos, quia sit,
      quas nulla numquam
    </p>
  </section>
</div>

<style lang="scss">
  @use "../styles//fonts.scss";
  @use "../styles/colors.scss";

  section {
    margin-left: 100px;
  }

  .content {
    padding-right: 1rem;
    background-color: colors.$darkest;
    color: colors.$lightest;
  }

  h2 > span {
    padding: 0.2rem;
    margin-left: -0.15rem;
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
      text-decoration: underline colors.$emphasis 0.5rem;
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
