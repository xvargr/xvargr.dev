<script>
  import { fade } from "svelte/transition";
  import { page } from "$app/stores";

  import Mail from "./svg/MailSVG.svelte";
  import HomeSVG from "./svg/HomeSVG.svelte";
  import Briefcase from "./svg/BriefcaseSVG.svelte";
  import CodeSvg from "./svg/CodeSVG.svelte";
</script>

<nav>
  <a class="nav-item" href="/" title="home" class:selected={$page.route.id === "/"}>
    {#if $page.route.id === "/"}
      <span in:fade>home</span>
    {:else}
      <HomeSVG />
    {/if}
  </a>
  <a
    class="nav-item"
    href="/projects"
    title="projects"
    class:selected={$page.route.id === "/projects"}
  >
    {#if $page.route.id === "/projects"}
      <span in:fade>projects</span>
    {:else}
      <CodeSvg />
    {/if}
  </a>
  <a
    class="nav-item"
    href="/experience"
    title="experience"
    class:selected={$page.route.id === "/experience"}
  >
    {#if $page.route.id === "/experience"}
      <span in:fade>experience</span>
    {:else}
      <Briefcase />
    {/if}
  </a>
  <a
    class="nav-item"
    href="/contact"
    title="contact and CV"
    class:selected={$page.route.id === "/contact"}
  >
    {#if $page.route.id === "/contact"}
      <span in:fade>contact</span>
    {:else}
      <Mail transition />
    {/if}
  </a>
</nav>

<style lang="scss">
  @use "../../styles/colors.scss";

  $nominal-item-dimension: 3rem;

  nav {
    position: absolute;
    width: 100vw;
    display: flex;
    justify-content: center;
    bottom: -2rem;
    z-index: 10;

    > .nav-item {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      height: 3rem;
      width: 3rem;
      margin: 0.4rem;
      font-weight: 600;
      border-radius: 99rem;
      padding: 0.6rem;
      color: var(--text-color);
      background-color: var(--background-color);
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      text-decoration: none;
      transition: background-color 100ms, width ease-in-out 200ms;
    }

    > .nav-item:hover {
      background-color: var(--highlight-color) !important; // js assign highlight bodge
    }

    > .nav-item.selected {
      width: 7rem;
    }
  }

  @media (min-width: 768px) {
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

  @media (min-width: 1280px) {
    nav {
      width: 8.75rem;
      height: fit-content;
      margin-top: 0.4rem;
      top: 0;
      right: -6.5rem;
      flex-direction: column;
      justify-content: start;
    }
  }
</style>
