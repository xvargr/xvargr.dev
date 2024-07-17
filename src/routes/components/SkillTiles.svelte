<script>
  import { userInfo } from "../userData";

  export let data;

  const { additionalSkills } = userInfo;

  const skillsArray = [...additionalSkills];
  data.repos.forEach((repo) => {
    repo.topics?.forEach((topic) => {
      if (!skillsArray.includes(topic)) skillsArray.push(topic);
    });
  });
</script>

<section>
  <h2>Skills</h2>
  <div class="skills-container">
    {#each skillsArray as skill}
      <span class={`skill ${skill}`}>
        {skill}
      </span>
    {/each}
  </div>
</section>

<style lang="scss">
  @use "../../styles/colors.scss";

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--background-color);
  }

  section {
    margin-bottom: 4rem;

    .skills-container {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;

      .skill {
        padding: 0.5rem 1rem;
        background-color: rgb(70, 70, 70);
        color: white;
        border-radius: 0.5rem;
        font-weight: 600;
        flex-grow: 1;
        text-align: center;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        transition: all 500ms;
      }
      // .skill:hover {
      //   padding: 0.5rem 1.5rem;
      // }

      @mixin skill-theme($color: colors.$grey) {
        background-color: $color;
      }

      .javascript {
        @include skill-theme($color: colors.$javascript);
        color: #2e2e2e;
      }

      .javascript {
        @include skill-theme($color: colors.$typescript);
      }

      .git {
        @include skill-theme($color: colors.$git);
      }

      .go {
        @include skill-theme($color: colors.$go);
      }

      .html {
        @include skill-theme($color: colors.$html);
      }

      .css {
        @include skill-theme($color: colors.$css);
      }

      .node {
        @include skill-theme($color: colors.$node);
      }

      .passport {
        @include skill-theme($color: colors.$passport);
        color: #2e2e2e;
      }

      .mongodb {
        @include skill-theme($color: colors.$mongodb);
      }

      .express {
        @include skill-theme($color: colors.$express);
      }

      .axios {
        @include skill-theme($color: colors.$axios);
      }

      .react {
        @include skill-theme($color: colors.$react);
        color: #2e2e2e;
      }

      .tailwindcss {
        @include skill-theme($color: colors.$tailwindcss);
      }

      .svelte {
        @include skill-theme($color: colors.$svelte);
      }

      .sass {
        @include skill-theme($color: colors.$sass);
      }

      .scss {
        @include skill-theme($color: colors.$scss);
      }

      .php {
        @include skill-theme($color: colors.$php);
      }

      .lua {
        @include skill-theme($color: colors.$lua);
      }

      .yii2 {
        @include skill-theme($color: colors.$yii2);
      }

      .mysql {
        @include skill-theme($color: colors.$mysql);
      }

      .socket-io {
        @include skill-theme();
      }
    }
  }
</style>
