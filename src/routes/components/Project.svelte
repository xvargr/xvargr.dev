<script>
  import Star from "./svg/Star.svelte";
  import NodeSvg from "./svg/NodeSVG.svelte";
  import ReactSvg from "./svg/ReactSVG.svelte";
  import TailwindSvg from "./svg/TailwindSVG.svelte";
  import MongodbSvg from "./svg/MongodbSVG.svelte";
  import SocketioSvg from "./svg/SocketioSVG.svelte";
  import SvelteSvg from "./svg/SvelteSVG.svelte";
  import SassSvg from "./svg/SassSVG.svelte";

  export let repository;

  const { name, description, retrospective, topics, stargazers_count, html_url, homepage } =
    repository;
</script>

<div class="project-container">
  <div class="header-bar">
    <h3 class="title">{name}</h3>
    <span class="stars"
      >{stargazers_count}
      <span>
        <Star />
      </span>
    </span>
  </div>

  <p>{description}</p>

  {#if retrospective}
    <p>{retrospective}</p>
  {/if}

  <div class="buttons-section">
    <a href={html_url} target="_blank" rel="noreferrer" class="">github</a>
    {#if homepage}
      <a href={homepage} target="_blank" rel="noreferrer" class="">live</a>
    {/if}
  </div>

  {#if topics}
    <hr />
    <div class="tools-container">
      {#each topics as tool}
        <span class={`tool-badge ${tool}`}>
          {#if tool === "react"}
            <span class="badge-logo">
              <ReactSvg />
            </span>
          {:else if tool === "tailwindcss"}
            <span class="badge-logo">
              <TailwindSvg />
            </span>
          {:else if tool === "node"}
            <span class="badge-logo">
              <NodeSvg />
            </span>
          {:else if tool === "mongodb"}
            <span class="badge-logo">
              <MongodbSvg />
            </span>
          {:else if tool === "socket-io"}
            <span class="badge-logo">
              <SocketioSvg />
            </span>
          {:else if tool === "svelte"}
            <span class="badge-logo">
              <SvelteSvg />
            </span>
          {:else if tool === "sass"}
            <span class="badge-logo">
              <SassSvg />
            </span>
          {/if}
          <span class="badge-text">
            {tool}
          </span>
        </span>
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  @use "../../styles/colors.scss";

  .project-container {
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 1rem;
    border: 2px solid var(--background-color);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

    > * {
      padding-bottom: 0.5rem;
    }
    > *:last-of-type {
      padding: 0;
    }

    .header-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .title {
        display: inline;
        color: var(--background-color);
      }

      .stars {
        display: flex;
        text-align: center;
        height: 100%;
        text-decoration: none;
        color: colors.$grey;

        span {
          display: flex;
          align-items: center;
          width: 1.2rem;
        }
      }
    }

    hr {
      border: 1px dashed var(--highlight-color);
    }

    .tools-container {
      display: flex;
      flex-wrap: wrap;

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
          margin: -1rem 0 -1rem -0.7rem;
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
        @include badge-theme($color: #5aaa46);
      }

      .passport {
        @include badge-theme($color: #35df79);
      }

      .mongodb {
        @include badge-theme($color: #00684a);
      }

      .express {
        @include badge-theme($color: #353535);
      }

      .axios {
        @include badge-theme($color: #671ddf);
      }

      .react {
        @include badge-theme($color: #61dafb);
      }

      .tailwindcss {
        @include badge-theme($color: #0ea5e9);
      }

      .svelte {
        @include badge-theme($color: #ff3e00);
      }

      .sass {
        @include badge-theme($color: #cc6699);
      }

      .socket-io {
        @include badge-theme();
      }
    }
  }
</style>
