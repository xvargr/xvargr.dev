<script>
  export let backgroundImage;
</script>

<header>
  <img class="backgroundImage" src={backgroundImage.src.original} alt={backgroundImage.alt} />
  <div class="infoCard">
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
    // background-color: gray;

    .backgroundImage {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .infoCard {
      position: absolute;
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: fit-content;
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

      .infoCard {
        height: fit-content;
        width: fit-content;
        min-width: auto;
        // min-height: 30rem;
        padding: 4rem;

        flex-direction: column;
        justify-content: space-around;

        .headshot {
          width: 15rem;
          height: auto;
        }

        .information {
          margin-left: 0;
          margin-top: 4rem;
        }
      }
    }
  }
</style>
