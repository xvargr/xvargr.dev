<script>
  import DownloadSvg from "./svg/DownloadSVG.svelte";
  import GithubSvg from "./svg/GithubSVG.svelte";

  export let backgroundColor = null;
  export let textColor = null;
  export let icon = null;
  export let download = null;
  export let showInfo = false;
  export let newTab = false;
  export let big = false;
  export let goto;

  let infoVisible = false;
</script>

<a
  href={goto}
  target={newTab ? "_blank" : "_self"}
  rel="noreferrer"
  style={`backgroundColor:${backgroundColor}; color:${textColor}`}
  class:big
  on:mouseenter={() => (infoVisible = true)}
  on:mouseleave={() => (infoVisible = false)}
  {download}
>
  {#if showInfo}
    <span class="status" class:infoVisible>{showInfo}</span>
  {/if}
  {#if icon}
    <span class="icon" style={`margin-right:${$$slots.default ? "" : "0"};`}>
      {#if icon === "github"}
        <GithubSvg />
      {:else if icon === "download"}
        <DownloadSvg />
      {/if}
    </span>
  {/if}
  <slot />
</a>

<style lang="scss">
  @use "../../styles/colors.scss";

  a {
    color: var(--text-color);
    background-color: var(--background-color);

    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.5rem 1rem;
    margin: 0.4rem 0;
    font-weight: 500;
    text-decoration: none;
    border: none;
    border-radius: 0.5rem;
    transition: background-color 100ms;

    .icon {
      width: 1.5rem;
      margin-right: 0.5rem;
    }
  }

  a:hover {
    background-color: var(--highlight-color);
  }

  .status {
    position: absolute;
    top: -2.1rem;
    right: 0.4rem;
    max-width: 200%;
    padding: 0.2rem 0.4rem;
    color: colors.$grey;
    background-color: rgb(207, 207, 207);
    border-radius: 0.5rem;
    border-bottom-right-radius: 0;
    white-space: nowrap;
    opacity: 0;
    transition: opacity 200ms;
    pointer-events: none;
  }

  .status.infoVisible {
    opacity: 100;
  }

  .big {
    font-size: 1.2rem;
    font-weight: 600;

    .icon {
      width: 2rem;
      margin-right: 1rem;
    }
  }
</style>
