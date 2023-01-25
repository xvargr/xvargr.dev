<script>
  import "../styles/reset.scss";
  import "../styles/global.scss";

  import Footer from "../components/Footer.svelte";
  import CanvasNav from "../components/CanvasNav.svelte";
</script>

<head>
  <title>xvargr.dev</title>
  <!-- <link rel="icon" href="favicon.png" type="image/x-icon" /> -->
</head>

<div class="content-wrapper" />

<CanvasNav />
<main>
  <slot />
</main>
<Footer />

<style lang="scss">
  .content-wrapper {
    display: flex;
  }

  main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
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
