<script>
  import GithubSvg from "./svg/GithubSVG.svelte";

  export let backgroundColor = null;
  export let textColor = null;
  export let icon = null;
  export let goto;
  export let newTab = false;

  // export let
</script>

<a
  href={goto}
  target={newTab ? "_blank" : "_self"}
  rel="noreferrer"
  style={`backgroundColor:${backgroundColor}; color:${textColor}`}
>
  {#if icon === "github"}
    <span class="icon">
      <GithubSvg />
    </span>
  {:else if icon === ""}
    <!-- else if content here -->
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
    // cursor: pointer;
    transition: background-color 100ms;

    .icon {
      width: 1.5rem;
      margin-right: 0.5rem;
    }
  }

  a:hover {
    background-color: var(--highlight-color);
  }
</style>
