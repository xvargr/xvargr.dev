<script>
  import { onMount } from "svelte";
  import { pageLoaded, themeColor, isScrolledToTop, serverStatus } from "../stores/states";
  import { doNotWake } from "./userData";
  import { wake } from "./utils";
  import "../styles/reset.scss";
  import "../styles/global.scss";
  import InfoCard from "./components/InfoCard.svelte";
  import NavBubbles from "./components/NavBubbles.svelte";
  import LoadingModal from "./components/LoadingModal.svelte";

  export let data;
  const { backgroundImage, theme } = data;

  // initialize color state
  themeColor.update(() => {
    return {
      background: theme.background || "#c29588",
      text: theme.text || "#292929",
      highlight: theme.highlight || "#f5b9a8",
    };
  });

  // track scroll position, used for shrinking header on mobile
  function trackScroll(e) {
    if (e.target.scrollTop <= 50 && !$isScrolledToTop) {
      isScrolledToTop.update(() => true);
    } else if (e.target.scrollTop >= 50 && $isScrolledToTop) {
      isScrolledToTop.update(() => false);
    }
  }

  onMount(() => {
    // set css variables bodge, these are global, no other way to bridge js to css and svelte store values can't be used in the style section
    function setCssProperties() {
      const root = document.documentElement;

      root.style.setProperty("--background-color", $themeColor.background);
      root.style.setProperty("--text-color", $themeColor.text);
      root.style.setProperty("--highlight-color", $themeColor.highlight);
    }

    // wake up sleeping services, for free tiers of heroku/render
    function wakeUpServices() {
      data.repos.forEach((repo) => {
        if (repo.homepage && !doNotWake.includes(repo.id)) {
          serverStatus.update((status) => {
            return { ...status, [repo.id]: "waking up" };
          });

          wake(`${repo.homepage}/health`)
            .then(() => {
              serverStatus.update((status) => {
                return { ...status, [repo.id]: "awake" };
              });
              // console.log("success", res);
            })
            .catch(() => {
              serverStatus.update((status) => {
                return { ...status, [repo.id]: "sleeping" };
              });
              // console.log("failed", err);
            });
        }
      });
    }

    setCssProperties();
    // wakeUpServices(); // disabled in dev
  });
</script>

<svelte:head>
  <title>xvargr.dev</title>
  <meta name="description" content="Portfolio of Akmal Shareef" />
  <meta
    name="viewport"
    content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"
  />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/touch-ico.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <meta name="theme-color" content={theme.background || "#c29588"} />
</svelte:head>

{#if !$pageLoaded}
  <LoadingModal />
{/if}
<div class="content" class:loading={!$pageLoaded}>
  <header class:minimized={!$isScrolledToTop && window.innerWidth <= 768}>
    <InfoCard {backgroundImage} />
    <NavBubbles />
  </header>
  <main on:scroll={(e) => trackScroll(e)}>
    <slot />
  </main>
</div>

<style lang="scss">
  @use "../styles/fonts.scss";
  @use "../styles/colors.scss";

  :root {
    --highlight-color: #818181;
    --background-color: #b3b3b3;
    --text-color: colors.$grey;
  }

  .content {
    height: 100vh;
    width: 100vw;
    overflow-y: auto;
    display: flex;
    flex-direction: column;

    header {
      position: absolute;
      height: 30vh;
      max-height: 20rem;
      flex-shrink: 0;
      transition: height 250ms ease;
      z-index: 10;
    }

    .minimized {
      height: 15vh;
    }

    main {
      position: relative;
      flex-grow: 1;
      padding: 35vh 2rem 6rem 2rem;
      overflow-y: auto;
      overflow-x: hidden;
      background-color: white;
      color: #242424;
    }
  }
  .content.loading {
    opacity: 0;
  }

  @media (min-width: 768px) {
    // @media (min-width: 1024px) {
    .content {
      flex-direction: row;

      header {
        position: relative;
        height: 100vh;
        max-height: 100vh;
        width: 40vw;
      }

      main {
        padding: 3rem;
      }
    }
  }

  @media (min-width: 1280px) {
    .content > main {
      padding: 5rem 8rem;
    }
  }
</style>
