<script>
  import { onMount } from "svelte";
  import { backgroundImageLoaded, headshotLoaded, isScrolledToTop } from "../../stores/states";

  export let backgroundImage;

  onMount(() => {
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
  <img class="background-image" src={backgroundImage.src.original} alt={backgroundImage.alt} />
  <div class="info-card" class:card-minimized={!$isScrolledToTop && window.innerWidth <= 768}>
    <img class="headshot" src="headshot.jpg" alt="headshot" />
    <div class="information">
      <span>Akmal Shareef</span>
      <span>fullstack developer</span>
    </div>
  </div>
</div>

<style lang="scss">
  @use "../../styles/fonts.scss";
  @use "../../styles/colors.scss";

  .background-image {
    width: 100vw;
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

  .card-minimized {
    width: 90%;
    max-width: 100%;
    height: 80%;

    .headshot {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .background-image {
      width: 100vw;
      height: 100vh;
    }

    .info-card {
      height: fit-content;
      width: fit-content;
      min-width: auto;
      padding: 3rem;

      flex-direction: column;
      justify-content: space-around;

      .headshot {
        width: 15rem;
        height: auto;
      }

      .information {
        font-size: larger;
        margin-left: 0;
        margin-top: 3rem;
      }
    }
  }

  @media (min-width: 1024px) {
    .info-card {
      padding: 4rem;
      margin: auto;

      .information {
        margin-top: 4rem;
      }
    }
  }
</style>
