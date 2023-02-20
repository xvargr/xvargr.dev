<script>
  import SkillTiles from "../components/SkillTiles.svelte";
  import Timeline from "../components/Timeline.svelte";
  import { userInfo } from "../userData";

  export let data;
</script>

<article>
  <SkillTiles {data} />
  <Timeline timelineArray={userInfo.educationHistory} title="Education" />
  <Timeline timelineArray={userInfo.jobHistory} title="Experience" />
</article>
