<script>
  // import { onMount } from "svelte";
  import { pageLoaded, themeColor } from "./stores/states";
  import "../styles/reset.scss";
  import "../styles/global.scss";
  import InfoCard from "./components/InfoCard.svelte";

  export let data;
  const { backgroundImage, balancedTheme } = data;

  // $: console.log("pageLoaded", $pageLoaded);

  // pageLoaded.subscribe;

  // console.log(backgroundImage);
  // console.log(backgroundImage.avg_color);

  // generatedTheme.update(() => backgroundImage.avg_color);
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
</script>

<!-- <svelte:window on:load={setLoaded} /> -->

<head>
  <title>xvargr.dev</title>
  <meta
    name="viewport"
    content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"
  />
  <!-- <link rel="icon" href="favicon.png" type="image/x-icon" /> -->
</head>
<!-- 
{#if $pageLoaded}
  <div class="content">
    <InfoCard {backgroundImage} />
    <slot theme={backgroundImage.avg_color} />
  </div>
{:else}
  <div>loading...</div>
{/if} -->

{#if !$pageLoaded}
  <div>loading...</div>
  <!-- full loading modal -->
{/if}
<div class="content">
  <InfoCard {backgroundImage} />
  <main>
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
      height: 100%;
      padding: 2rem;
      padding-bottom: 6rem;
      overflow-y: scroll;
      overflow-x: hidden;
      background-color: white;
      color: #242424;
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
