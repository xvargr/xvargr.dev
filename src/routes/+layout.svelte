<script>
  import "../styles/reset.scss";
  import "../styles/global.scss";
  import InfoCard from "./components/InfoCard.svelte";

  export let data;
  const { backgroundImage } = data;

  // console.log(backgroundImage);
</script>

<head>
  <title>xvargr.dev</title>
  <meta
    name="viewport"
    content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"
  />
  <!-- <link rel="icon" href="favicon.png" type="image/x-icon" /> -->
</head>

<div class="content">
  <InfoCard {backgroundImage} />
  <slot />
</div>

<style lang="scss">
  .content {
    height: 100vh;
    width: 100vw;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 768px) {
    .content {
      flex-direction: row;
    }
  }
</style>
