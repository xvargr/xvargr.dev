<script>
  import SkillTiles from "../components/SkillTiles.svelte";
  import Timeline from "../components/Timeline.svelte";
  import { userInfo } from "../userData";

  export let data;

  const { educationHistory, jobHistory } = userInfo;
</script>

<article>
  <SkillTiles {data} />
  <Timeline timelineArray={educationHistory} title="Education" />
  <Timeline timelineArray={jobHistory} title="Experience" />
</article>
