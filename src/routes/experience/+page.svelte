<script>
  import { onMount } from "svelte";
  import { themeColor } from "../../stores/states";
  import Timeline from "../components/Timeline.svelte";

  const educationHistory = [
    {
      institution: "Universiti Kuala Lumpur",
      title:
        "Bachelor of Technology - BTech, Aircraft Engineering Technology (Honours) in Mechanical",
      duration: "2017-2021",
      description: [
        "Graduated with 3.75/4.00 CGPA",
        "Final term research on propeller noise reduction, data collection with custom designed testbed and arduino microcontroller, realtime data streamed time over serial connection and recorded to an excel sheet",
      ],
    },
  ];

  const jobHistory = [
    {
      institution: "Freelance",
      title: "Web developer",
      duration: "2022-current",
      description: ["Creating full stack applications while learning new frameworks and tools"],
    },
    {
      institution: "Asia AeroTechnic (AAT)",
      title: " Trainee Technician",
      duration: "2021-2021",
      description: [
        "Provided base maintenance assistance and routine maintenance tasks for commercial aircraft such as the A320, B737, ATR42/72",
        "Composite repair of control surfaces",
        "Borescope inspection on turbine engines",
        "Engine preservation and maintenance",
        "Assisted in various troubleshoots",
      ],
    },
    {
      institution: "Freelance",
      title: "Fabricator and PC repair",
      duration: "2019-2021",
      description: [
        "Delivered 3D printing and 3D modeling service for students on campus",
        "Provided computer repair and upgrade to customers",
      ],
    },
  ];

  onMount(() => {
    const root = document.documentElement;
    root.style.setProperty("--background-color", $themeColor.background);
  });
</script>

<article>
  <Timeline timelineArray={educationHistory} title="Education" />
  <Timeline timelineArray={jobHistory} title="Experience" />
</article>

<style lang="scss">
  :root {
    --background-color: #b3b3b3;
  }
</style>
