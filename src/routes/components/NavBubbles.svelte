<script>
  import { onMount } from "svelte";
  import { themeColor } from "../stores/states";

  import Mail from "./svg/Mail.svelte";
  import Beaker from "./svg/Beaker.svelte";
  import HomeSVG from "./svg/HomeSVG.svelte";
  import Briefcase from "./svg/Briefcase.svelte";

  onMount(() => {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((element) => {
      element.style.backgroundColor = $themeColor;
    });
  });
</script>

<nav>
  <div class="nav-item">
    <HomeSVG />
  </div>
  <div class="nav-item">
    <Beaker />
  </div>
  <div class="nav-item">
    <Briefcase />
  </div>
  <div class="nav-item">
    <span>
      <Mail />
    </span>
  </div>
</nav>

<style lang="scss">
  @use "../../styles/colors.scss";

  nav {
    position: absolute;
    width: 100vw;
    display: flex;
    justify-content: center;
    bottom: -2rem;
    z-index: 10;

    > .nav-item {
      position: relative;
      height: 3rem;
      width: 3rem;
      margin: 0.4rem;
      border-radius: 99rem;
      padding: 0.6rem;
      color: colors.$grey;
    }
  }

  //   @media (min-height: 1920px) {
  //     nav {
  //       background-color: red;
  //     }
  //   }

  @media (min-width: 640px) {
    nav {
      justify-content: end;
      padding-right: 0.8rem;
      bottom: -2.25rem;

      > .nav-item {
        height: 3.5rem;
        width: 3.5rem;
        margin: 0.5rem;
        padding: 0.9rem;
      }
    }
  }
</style>
