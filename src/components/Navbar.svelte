<script>
  import Logo from "./Logo.svelte";
</script>

<nav>
  <Logo />
  <div class="navItems">
    <hr />
    <div>title</div>
    <hr />
    <div>hey fam</div>
    <hr />
    <div>hey fam</div>
    <hr />
    <div>hey fam</div>
    <hr />
    <div>hey fam</div>
    <hr />
    <div>hey fam</div>
  </div>
</nav>

<style lang="scss">
  @use "../styles/colors.scss";
  @use "../styles/calculated.scss";

  nav {
    display: flex;
    width: 5rem;
    height: 100vh;
    padding-top: 1rem;
    flex-shrink: 0;

    position: fixed;
    flex-direction: column;
    // justify-content: space-between;

    background-color: colors.$darkest;
    color: colors.$lighter;
  }

  //   .logo {
  //     height: 4rem;
  //     flex-shrink: 0;
  //   }

  .navItems {
    height: calc(100vh - 5rem);
    margin-bottom: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    > * {
      transform: rotate(-30deg);
      text-align: center;
    }
  }

  hr {
    width: 100%;
  }

  //   nav * {
  //     // transform: rotate(-90deg);
  //     outline: red solid 1px;
  //   }
</style>
