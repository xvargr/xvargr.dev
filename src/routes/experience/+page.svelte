<script>
  import ResumeSection from "../components/ResumeSection.svelte";
  import Timeline from "../components/Timeline.svelte";
  import { educationHistory, jobHistory } from "../userData";
</script>

<article>
  <ResumeSection />
  <Timeline timelineArray={educationHistory} title="Education" />
  <Timeline timelineArray={jobHistory} title="Experience" />
</article>
