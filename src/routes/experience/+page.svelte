<script>
  import SkillTiles from "../components/SkillTiles.svelte";
  import Timeline from "../components/Timeline.svelte";
  import IconButton from "../components/IconButton.svelte";

  import { userInfo, userSettings } from "../userData";

  export let data;

  const { educationHistory, jobHistory } = userInfo;
  const { resume } = userSettings;
</script>

<article>
  <SkillTiles {data} />

  <section>
    <h2>Resume</h2>
    <div class="download-button">
      <IconButton goto={`/${resume.filename}`} download={resume.downloadName} icon="download" big
        >Download resume</IconButton
      >
    </div>
  </section>

  <Timeline timelineArray={jobHistory} title="Experience" />
  <Timeline timelineArray={educationHistory} title="Education" />
</article>

<style lang="scss">
  section {
    margin-bottom: 2rem;

    h2 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: var(--background-color);
    }

    .download-button {
      max-width: 20rem;
      margin: auto;
    }
  }
</style>
