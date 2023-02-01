<script>
  import { onMount } from "svelte";
  import { pageLoaded, infoCardLoaded, headshotLoaded, isScrolledToTop } from "../stores/states";

  export let backgroundImage;

  let setHeaderMinimized;

  onMount(() => {
    const backgroundElement = document.querySelector(".background-image");
    if (backgroundElement.complete) infoCardLoaded.update(() => true);
    else {
      backgroundElement.addEventListener("load", () => {
        infoCardLoaded.update(() => true);
      });
    }

    const headshotElement = document.querySelector(".headshot");
    if (headshotElement.complete) headshotLoaded.update(() => true);
    else {
      headshotElement.addEventListener("load", () => {
        headshotLoaded.update(() => true);
      });
    }

    // const main = document.querySelector("main");
    // main.addEventListener("scroll", () => console.log("scroll"));

    setHeaderMinimized = function (newBooleanState) {
      const navItems = document.querySelectorAll(".nav-item");

      navItems.forEach((element) => {
        if (newBooleanState) element.classList.add("minimized");
        else element.classList.remove("minimized");
      });
    };
  });

  $: {
    // const navItems = document.querySelectorAll(".nav-item");
    // console.log(document);
    if ($pageLoaded) {
      if ($isScrolledToTop) {
        console.log("toggle to true");
        setHeaderMinimized(false);
        // navItems.forEach((element) => {
        //   element.classList.add("minimized");
        // });
      } else {
        console.log("toggle to false");
        setHeaderMinimized(true);
        // navItems.forEach((element) => {
        //   element.classList.remove("minimized");
        // });
      }
    }
  }
</script>

<header>
  <img class="background-image" src={backgroundImage.src.original} alt={backgroundImage.alt} />
  <div class="info-card">
    <img class="headshot" src="headshot.jpg" alt="headshot" />
    <div class="information">
      <span>Akmal Shareef</span>
      <span>fullstack developer</span>
    </div>
  </div>
</header>

<style lang="scss">
  @use "../../styles/fonts.scss";
  @use "../../styles/colors.scss";

  header {
    position: relative;
    width: 100vw;
    height: 30vh;
    flex-shrink: 0;

    .background-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .info-card {
      position: absolute;
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 80%;
      max-width: 25rem;
      height: 70%;
      min-width: 50%;
      inset: 0;
      margin: auto;
      padding: 1rem;

      border-radius: 1rem;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

      background-color: #ffffff5b;
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);

      .headshot {
        width: auto;
        height: 100%;
        border-radius: 99rem;
      }

      .information {
        color: colors.$grey;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: fonts.$emphasis;
        font-weight: 700;
        margin-left: 1rem;

        :nth-child(2) {
          font-weight: 500;
        }
      }
    }
  }

  @media (min-width: 768px) {
    header {
      height: 100vh;
      width: 50vw;

      .info-card {
        height: fit-content;
        width: fit-content;
        min-width: auto;
        padding: 4rem;

        flex-direction: column;
        justify-content: space-around;

        .headshot {
          width: 15rem;
          height: auto;
        }

        .information {
          font-size: larger;
          margin-left: 0;
          margin-top: 4rem;
        }
      }
    }
  }
</style>
