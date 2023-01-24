<script>
  import { onMount } from "svelte";

  import "../styles/reset.scss";
  import "../styles/global.scss";

  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";

  onMount(() => {
    const canvas = document.querySelector("#canv");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      // drawing code here

      ctx.fillStyle = "rgb(200, 0, 0)";
      ctx.fillRect(10, 10, 50, 50);

      ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
      ctx.fillRect(30, 30, 50, 50);
    } else {
      console.warn("canvas unsupported");
    }
  });
</script>

<head>
  <title>xvargr.dev</title>
  <!-- <link rel="icon" href="favicon.png" type="image/x-icon" /> -->
</head>

<div class="content-wrapper" />
<!-- <Navbar /> -->

<canvas id="canv" width="100px" height={window.innerHeight} />

<main>
  <slot />
</main>
<Footer />

<style lang="scss">
  .content-wrapper {
    display: flex;
  }

  #canv {
    background-color: white;
    // width: 5rem;
    // height: 100%;
    position: fixed;
  }

  main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    // margin-left: 5rem;
  }

  @media (min-width: 1536px) {
    main {
      max-width: 85rem;

      margin: auto;
      left: 0;
      right: 0;
    }
  }
</style>
