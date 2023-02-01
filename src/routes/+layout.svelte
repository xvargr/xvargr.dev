<script>
  // import { onMount } from "svelte";
  import { pageLoaded, themeColor, isScrolledToTop } from "./stores/states";
  import "../styles/reset.scss";
  import "../styles/global.scss";
  import InfoCard from "./components/InfoCard.svelte";
  import NavBubbles from "./components/NavBubbles.svelte";

  export let data;
  const { backgroundImage, balancedTheme } = data;

  // $: console.log("pageLoaded", $pageLoaded);

  // pageLoaded.subscribe;

  // console.log(backgroundImage);
  // console.log(backgroundImage.avg_color);

  // generatedTheme.update(() => backgroundImage.avg_color);

  // set theme color from server data
  themeColor.update(() => balancedTheme);

  // console.log($generatedTheme);

  // function setLoaded() {
  //   pageLoaded = true;
  // }
  // onMount(() => {
  //   console.log("mounted");
  //   window.addEventListener("load", () => {
  //     console.log("loaded");
  //     pageLoaded = true;
  //   });
  // });

  // track scroll position, used for shrinking header on mobile
  function trackScroll(e) {
    if (e.target.scrollTop === 0 && !$isScrolledToTop) {
      isScrolledToTop.update(() => true);
    } else if (e.target.scrollTop > 0 && $isScrolledToTop) {
      isScrolledToTop.update(() => false);
    }
  }
  $: console.log("is top? ", $isScrolledToTop);
</script>

<svelte:head>
  <title>xvargr.dev || Akmal Shareef</title>
  <meta
    name="viewport"
    content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"
  />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  <!-- <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> NOT WORKING, 404 if href contains "touch-icon" -->
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <!-- <link rel="apple-touch-icon" sizes="180x180" href="/touch-icon.png" /> -->
  <!-- <link rel="apple-touch-icon" sizes="180x180" href="/touchicon.png" /> -->
  <!-- <link rel="apple-touch-icon" sizes="180x180" href="/1-1.png" /> -->
  <link rel="apple-touch-icon" sizes="180x180" href="/touch-ico.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <meta name="theme-color" content={balancedTheme} />
  <meta name="description" content="Portfolio of Akmal Shareef" />
</svelte:head>

{#if !$pageLoaded}
  <div style="background-color: cyan;">loading...</div>
  <!-- full loading modal -->
{/if}
<div class="content">
  <div>
    <InfoCard {backgroundImage} />
    <NavBubbles />
  </div>
  <main on:scroll={(e) => trackScroll(e)}>
    <!-- <slot theme={"hello"} /> -->
    <slot />
  </main>
</div>

<style lang="scss">
  @use "../styles/fonts.scss";
  @use "../styles/colors.scss";

  .content {
    height: 100vh;
    width: 100vw;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;

    main {
      position: relative;
      height: 100%;
      padding: 2rem;
      padding-bottom: 6rem;
      overflow-y: scroll;
      overflow-x: hidden;
      background-color: white;
      color: #242424;
    }

    div:nth-of-type(1) {
      position: relative;
    }
  }

  @media (min-width: 768px) {
    .content {
      flex-direction: row;

      main {
        width: 50vw;
      }
    }
  }
</style>
