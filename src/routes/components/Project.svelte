<script>
  import IconButton from "./IconButton.svelte";
  import Star from "./svg/Star.svelte";
  import ToolBadge from "./ToolBadge.svelte";

  export let repository;
  const { name, description, retrospective, topics, stargazers_count, html_url, homepage } =
    repository;

  let expanded = false;
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
    <div class="retrospective-container">
      <h4>Retrospective</h4>
      <div class="retrospective-contents" class:expanded>
        <p>
          {retrospective} Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto totam
          minus quos voluptatum, omnis voluptate a maiores quisquam, ratione beatae amet laboriosam id
          consectetur accusantium, molestiae illo nemo suscipit! Ab rerum pariatur laborum repellat aperiam
          suscipit, distinctio sit, itaque accusamus voluptas quaerat aspernatur fugit dicta sunt nisi
          unde qui quia voluptatum accusantium totam eos impedit autem quidem magnam? Commodi? Magni
          consequatur deserunt repellendus, cum eum iusto mollitia quam adipisci officia modi quisquam
          itaque corporis placeat molestiae provident, nisi quae. Odio dolorum, qui inventore fuga ipsum
          ex porro veniam possimus? Quae ipsum ullam quidem est dolores doloribus blanditiis non asperiores
          molestias saepe fugiat officiis debitis deserunt voluptatum culpa sint, ad modi illo commodi
          placeat nesciunt, soluta fugit! Maiores, rerum ab.
        </p>
        <div class="fade" class:expanded />
      </div>
      <button class="retrospective-expander" on:click={() => (expanded = !expanded)}
        >{expanded ? "less" : "more"}</button
      >
    </div>
  {/if}

  <div class="buttons-section">
    <IconButton icon="github" goto={html_url} newTab>github</IconButton>
    {#if homepage}
      <IconButton goto={homepage} newTab>visit</IconButton>
    {/if}
  </div>

  {#if topics}
    <hr />
    <div class="tools-container">
      {#each topics as tool}
        <ToolBadge type={tool} />
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  @use "../../styles/colors.scss";

  .project-container {
    padding: 0 1rem;
    margin-bottom: 1rem;
    border-radius: 1rem;
    border: 2px solid var(--background-color);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

    > * {
      margin-bottom: 0.5rem;
    }

    .header-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 -1rem;
      margin-bottom: 0.5rem;
      padding: 0.5rem 1rem;
      border-radius: 0.7rem 0.7rem 0 0;

      background-color: var(--background-color);
      color: var(--text-color);

      .title {
        display: inline;
      }

      .stars {
        display: flex;
        text-align: center;
        height: 100%;
        text-decoration: none;

        span {
          display: flex;
          width: 1.2rem;
        }
      }
    }

    .retrospective-container {
      margin-top: 1rem;
      margin-bottom: 2.5rem;

      h4 {
        color: var(--background-color);
      }

      .retrospective-contents {
        position: relative;
        // height: 5rem;
        max-height: 5rem;
        overflow: hidden;
        transition: all 500ms ease-in;

        .fade {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 4rem;
          width: 100%;
          background: linear-gradient(rgba(0, 0, 255, 0), rgb(255, 255, 255));
          transition: opacity 500ms;
          pointer-events: none;
        }
        .fade.expanded {
          opacity: 0;
          // display: none;
        }
      }
      .retrospective-contents.expanded {
        // height: 10rem;
        max-height: 30rem;
      }

      .retrospective-expander {
        color: colors.$grey;
        position: absolute;
        cursor: pointer;
        border: none;
        background-color: transparent;
        left: 0;
        right: 0;
        margin: auto;
      }
    }

    hr {
      border: 1px dashed var(--highlight-color);
    }

    .buttons-section {
      width: 100%;
      display: flex;
      justify-content: end;
      margin-bottom: 0;
    }

    .tools-container {
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>
