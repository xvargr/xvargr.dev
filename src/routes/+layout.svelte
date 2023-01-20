<script>
  import "../styles/reset.scss";
  import "../styles/global.scss";

  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<Navbar />
<main>
  <slot />
  <Footer />
</main>

<style lang="scss">
  @use "../styles/calculated.scss";

  main {
    min-height: 100vh;
    margin-left: 5rem;
  }
</style>
