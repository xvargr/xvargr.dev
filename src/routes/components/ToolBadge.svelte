<script>
  import NodeSvg from "./svg/NodeSVG.svelte";
  import ReactSvg from "./svg/ReactSVG.svelte";
  import TailwindSvg from "./svg/TailwindSVG.svelte";
  import MongodbSvg from "./svg/MongodbSVG.svelte";
  import SocketIoSvg from "./svg/SocketIoSVG.svelte";
  import SvelteSvg from "./svg/SvelteSVG.svelte";
  import SassSvg from "./svg/SassSVG.svelte";

  export let type;
</script>

<span class={`tool-badge ${type}`}>
  {#if type === "react"}
    <span class="badge-logo">
      <ReactSvg />
    </span>
  {:else if type === "tailwindcss"}
    <span class="badge-logo">
      <TailwindSvg />
    </span>
  {:else if type === "node"}
    <span class="badge-logo">
      <NodeSvg />
    </span>
  {:else if type === "mongodb"}
    <span class="badge-logo">
      <MongodbSvg />
    </span>
  {:else if type === "socket-io"}
    <span class="badge-logo">
      <SocketIoSvg />
    </span>
  {:else if type === "svelte"}
    <span class="badge-logo">
      <SvelteSvg />
    </span>
  {:else if type === "sass"}
    <span class="badge-logo">
      <SassSvg />
    </span>
  {/if}
  <span class="badge-text">
    {type}
  </span>
</span>

<style lang="scss">
  @use "../../styles/colors.scss";

  .tool-badge {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-grow: 1;

    font-weight: 500;
    border: 2px solid black;
    min-width: 5rem;
    max-width: 10rem;
    padding: 0.2rem 0.6rem;
    margin: 0.2rem;
    border-radius: 99rem;

    .badge-logo {
      color: white;
      padding: 0.2rem;
      margin: -1rem 0.5rem -1rem -0.7rem;
      width: 2rem;
      border-radius: 99rem 0 0 99rem;
      flex-grow: 0;
    }

    .badge-text {
      flex-grow: 1;
      text-align: center;
    }
  }

  @mixin badge-theme($color: colors.$grey) {
    border-color: $color;
    .badge-logo {
      background-color: $color;
    }
  }

  .node {
    @include badge-theme($color: colors.$node);
  }

  .passport {
    @include badge-theme($color: colors.$passport);
  }

  .mongodb {
    @include badge-theme($color: colors.$mongodb);
  }

  .express {
    @include badge-theme($color: colors.$express);
  }

  .axios {
    @include badge-theme($color: colors.$axios);
  }

  .react {
    @include badge-theme($color: colors.$react);
  }

  .tailwindcss {
    @include badge-theme($color: colors.$tailwindcss);
  }

  .svelte {
    @include badge-theme($color: colors.$svelte);
  }

  .sass {
    @include badge-theme($color: colors.$sass);
  }

  .socket-io {
    @include badge-theme();
  }
</style>
