<script>
  import { onMount } from "svelte";
  import { backgroundImageLoaded, headshotLoaded, isScrolledToTop } from "../../stores/states";
  import RandomEmoji from "./RandomEmoji.svelte";
  import BubbleSvg from "./svg/BubbleSVG.svelte";

  export let backgroundImage;

  onMount(() => {
    // can't use svelte on:load, no access to check if image is cached, so load state is indefinitely false
    const backgroundElement = document.querySelector(".background-image");
    if (backgroundElement.complete) backgroundImageLoaded.update(() => true);
    else {
      backgroundElement.addEventListener("load", () => {
        backgroundImageLoaded.update(() => true);
      });
    }

    const headshotElement = document.querySelector(".headshot");
    if (headshotElement.complete) headshotLoaded.update(() => true);
    else {
      headshotElement.addEventListener("load", () => {
        headshotLoaded.update(() => true);
      });
    }
  });
</script>

<div>
  <img
    class="background-image"
    src={backgroundImage.src.original}
    alt={backgroundImage.alt}
    class:minimized={!$isScrolledToTop && window.innerWidth <= 1280}
  />
  <div class="info-card" class:minimized={!$isScrolledToTop && window.innerWidth <= 1280}>
    <div class="image-with-icon">
      <span class="bubble">
        <span class="emoji">
          <RandomEmoji />
        </span>
        <BubbleSvg />
      </span>
      <img class="headshot" src="headshot.jpg" alt="headshot" />
    </div>
    <div class="information">
      <span>Akmal Shareef</span>
      <span>web developer</span>
    </div>
  </div>
  <a
    class="image-attribution"
    class:hidden={!$isScrolledToTop && window.innerWidth <= 1280}
    href={backgroundImage.photographer_url}
    >photo by {backgroundImage.photographer}
  </a>
</div>

<style lang="scss">
  @use "../../styles/fonts.scss";
  @use "../../styles/colors.scss";

  .background-image {
    width: 100vw;
    height: 30vh;
    max-height: 20rem;
    object-fit: cover;
    transition: height 250ms;
  }

  .background-image.minimized {
    height: 15vh;
  }

  .image-attribution {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.1rem 0.3rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: black;
    background-color: #e9e9e93d;
  }

  .info-card {
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    max-width: 25rem;
    min-width: 50%;
    height: 70%;
    inset: 0;
    margin: auto;
    padding: 1rem;

    border-radius: 1rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

    background-color: #ffffff5b;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);

    transition: width 200ms, height, 200ms;

    .image-with-icon {
      position: relative;
      height: 100%;

      .bubble {
        position: absolute;
        top: -1rem;
        right: -1.5rem;
        width: 4rem;

        .emoji {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          inset: 0;
          font-size: 1.5rem;
        }
      }

      .headshot {
        height: 100%;
        border-radius: 99rem;
      }
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

  .info-card.minimized {
    width: 90%;
    max-width: 50rem;
    height: 80%;

    .image-with-icon {
      display: none;
    }
  }

  .image-attribution.hidden {
    display: none;
  }

  @media (min-width: 1280px) {
    .background-image {
      width: 100vw;
      height: 100vh;
      max-height: none;
    }

    .image-attribution {
      top: auto;
      bottom: 0;
      right: 0;
    }

    .info-card {
      height: fit-content;
      width: fit-content;
      min-width: auto;
      padding: 4rem;
      margin: auto;

      flex-direction: column;
      justify-content: space-around;

      .image-with-icon {
        .bubble {
          top: -1rem;
          right: -1rem;
          width: 5rem;
        }

        .headshot {
          width: 15rem;
          height: auto;
        }
      }

      .information {
        font-size: larger;
        margin-left: 0;
        margin-top: 4rem;
      }
    }
  }
</style>
