<script>
  import { themeColor } from "../../stores/states";

  const jobHistory = [
    // {
    //   company: "",
    //   title: "",
    //   duration: "",
    //   description: [""],
    // },
    {
      company: "Freelance",
      title: "Web developer",
      duration: "2022-current",
      description: ["Creating full stack applications while learning new frameworks and tools"],
    },
    {
      company: "Asia AeroTechnic (AAT)",
      title: " Trainee Technician",
      duration: "2021-2021",
      description: [
        "Provided base maintenance assistance and routine maintenance tasks for commercial aircraft such as the A320, B737, ATR42/72",
        "Composite repair of control surfaces",
        "Borescope inspection on turbine engines",
        "Engine preservation",
      ],
    },
    {
      company: "Freelance",
      title: "Fabricator and PC technician",
      duration: "2019-2021",
      description: [
        "Deliver 3D printing and 3D modeling service for students on campus",
        "Provided computer repair and upgrade to customers",
      ],
    },
  ];
</script>

<article>
  <section>
    <h2 style={`color: ${$themeColor.background};`}>Education</h2>
  </section>
  <section>
    <h2 style={`color: ${$themeColor.background};`}>Work</h2>
    {#each jobHistory as job}
      <h3>{job.company}</h3>
      <h4>{job.title}</h4>
      <div>{job.duration}</div>
      <ul>
        {#each job.description as description}
          <li>{description}</li>
        {/each}
      </ul>
    {/each}
  </section>
</article>

<style lang="scss">
  @use "../../styles/colors.scss";

  article {
    color: colors.$grey;

    h2 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    section {
      margin-bottom: 1rem;
    }
  }
</style>
