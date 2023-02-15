<script>
  import SkillTiles from "../components/SkillTiles.svelte";
  import Timeline from "../components/Timeline.svelte";
  import { educationHistory, jobHistory } from "../userData";

  export let data;
</script>

<article>
  <SkillTiles {data} />
  <Timeline timelineArray={educationHistory} title="Education" />
  <Timeline timelineArray={jobHistory} title="Experience" />
</article>
