<script>
  import DownloadSvg from "./svg/DownloadSVG.svelte";
  import GithubSvg from "./svg/GithubSVG.svelte";

  export let backgroundColor = null;
  export let textColor = null;
  export let icon = null;
  export let download = null;
  export let newTab = false;
  export let big = false;
  export let goto;
</script>

<a
  href={goto}
  target={newTab ? "_blank" : "_self"}
  rel="noreferrer"
  style={`backgroundColor:${backgroundColor}; color:${textColor}`}
  class:big
  {download}
>
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
  a {
    color: var(--text-color);
    background-color: var(--background-color);

    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.5rem 1rem;
    margin: 0.4rem 0.2rem;
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

  .big {
    font-size: 1.2rem;
    font-weight: 600;

    .icon {
      width: 2rem;
      margin-right: 1rem;
    }
  }
</style>
