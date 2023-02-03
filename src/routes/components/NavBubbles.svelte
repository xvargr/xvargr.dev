<script>
  import { onMount } from "svelte";
  import { themeColor } from "../../stores/states";

  import Mail from "./svg/MailSVG.svelte";
  import HomeSVG from "./svg/HomeSVG.svelte";
  import Briefcase from "./svg/BriefcaseSVG.svelte";
  import CodeSvg from "./svg/CodeSVG.svelte";

  onMount(() => {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((element) => {
      element.style.backgroundColor = $themeColor.background;
      element.style.color = $themeColor.text;
      element.style.setProperty("--highlight-color", $themeColor.highlight);
    });
  });
</script>

<nav>
  <a class="nav-item" href="/" title="home">
    <HomeSVG />
  </a>
  <a class="nav-item" href="/projects" title="projects">
    <CodeSvg />
  </a>
  <a class="nav-item" href="/experience" title="experience">
    <Briefcase />
  </a>
  <a class="nav-item" href="/contact" title="contact and CV">
    <span>
      <Mail />
    </span>
  </a>
</nav>

<style lang="scss">
  @use "../../styles/colors.scss";

  :root {
    --highlight-color: #818181;
  }

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
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    }

    > .nav-item:hover {
      background-color: var(--highlight-color) !important; // js assign highlight bodge
    }
  }

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

  @media (min-width: 768px) {
    nav {
      width: fit-content;
      height: fit-content;
      margin-top: 0.4rem;
      top: 0;
      right: -3rem;
      flex-direction: column;
      justify-content: start;
    }
  }
</style>
