<script>
  import { fade } from "svelte/transition";
</script>

<div class="loading-overlay" transition:fade>
  <div class="center" />
  <div class="spinner primary" />
  <div class="spinner secondary" />
  <div class="spinner tertiary" />
</div>

<style lang="scss">
  $spinner-size: 4rem;

  .loading-overlay {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: var(--background-color);
    transition: background-color 500ms ease-in;
  }

  .center {
    position: absolute;
    width: calc($spinner-size * 0.4);
    height: calc($spinner-size * 0.4);
    inset: 0;
    margin: auto;
    background-color: var(--text-color);
    rotate: 45deg;
    transition: background-color 500ms ease-in;
  }

  @mixin spinner($position) {
    $size: calc($spinner-size * (1 + $position/6));
    width: $size;
    height: $size;
    rotate: 45deg;

    border: 3px solid var(--text-color);
    position: absolute;
    inset: 0;
    margin: auto;
    transition: border-color 500ms ease-in;
  }

  .primary {
    @include spinner(1);
    animation: spinner-rotate 2s ease-in-out infinite;
  }

  .secondary {
    @include spinner(2);
    animation: spinner-rotate 4s ease-in-out alternate infinite;
  }

  .tertiary {
    @include spinner(3);
    animation: spinner-rotate 8s ease-in-out alternate infinite;
  }

  @keyframes spinner-rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
