export const userInfo = {
  introduction: `I am a self-taught web developer pivoting from an aircraft engineering background. I have been
      creating full stack, responsive web applications for over a year, with a solid understanding
      of the fundamentals, specializing in the <b>MERN</b> stack, although I do experiment with less common
      and newer technologies such as Svelte and Next.js. I am a quick learner and have an affinity for
      problem solving and enjoy the challenges that comes with it.`,

  educationHistory: [
    {
      institution: "Universiti Kuala Lumpur",
      title: "Bachelor of Technology - Aircraft Engineering Technology (Honours) in Mechanical",
      duration: "2017-2021",
      description: [
        "Final term research on propeller noise reduction, data collection with custom designed testbed and Arduino microcontroller, realtime data streamed time over serial connection and recorded to an excel sheet",
        "Graduated with 3.75/4.00 CGPA",
      ],
    },
  ],

  jobHistory: [
    {
      institution: "Freelance",
      title: "Web developer",
      duration: "January 2022 - present",
      description: [
        "Designing, developing, and maintaining all aspects of a web application, including the server-side and client-side components",
        "Designing frontend UI with modern frameworks such as React and Svelte",
        "Creating databases, RESTful APIs, and integrating third-party tools and services",
      ],
    },
    {
      institution: "Asia AeroTechnic (AAT)",
      title: "Internship",
      duration: "January 2021 - July 2021",
      description: [
        "Provided base maintenance assistance and routine maintenance tasks for commercial aircraft such as the A320, B737, ATR42/72",
        "Assisted in various troubleshoots of mechanical and avionic systems",
        "Prepare and assisted in composite repair of control surfaces",
        "Assisted in Borescope inspection on turbine engines",
        "Took part in Engine preservation and maintenance program for 2 A320 aircraft",
      ],
    },
    {
      institution: "Freelance",
      title: "Fabricator and PC repair",
      duration: "August 2018 - December 2020",
      description: [
        "Delivered 3D printing and 3D modeling service for students on campus",
        "Create 3D models from sketch with CAD software such as Fusion360 and CATIA",
        "Prepare optimize and slice 3D models for printing",
        "Provided computer repair and upgrade to customers",
      ],
    },
  ],

  repoRetrospective: {
    515840292: {
      retrospective: `
        If I were to start this project over, I would spend more time planning out the structure of the application 
        and researching the necessary tools beforehand. I would also increase the frequency of maintenance tasks 
        such as refactoring and modularizing code to keep the codebase clean, simple, and maintainable. 
        <br/>
        As the project got more complicated features got exponentially harder to implement. 
        This could have been avoided if the code was written with extensibility in mind from the very beginning, 
        instead of doing these tasks while simultaneously implementing and debugging new features.
        `,
    },
  },

  additionalSkills: [
    "javascript",
    "html",
    "css",
    "sass",
    "git",
    "react",
    "node",
    "mongodb",
    "express",
    "tailwindcss",
    "svelte",
  ],

  emojis: ["🐺", "🦕", "🐍", "🐣", "🐳", "🍫", "🍰", "🍪", "🍗"],
};

export const userSettings = {
  github: { username: "xvargr", userAgent: "xvargr.dev" },
  excludedRepos: [500291917],
  sort: true,
  wakeServices: false,
  keepServicesAwake: false,
  doNotWake: [588034462],
  imageQuery: {
    query: "mountain",
    size: "medium",
    // orientation: "landscape" /*orientation: "portrait"*/,
  },
  fallbackImage: {
    src: "bgFallback.jpg",
    photographer_url: "https://www.pexels.com/@eberhardgross/",
    photographer: "Eberhard Grossgasteiger",
    color: {
      background: "#1e3641",
      highlight: "#374f5a",
      text: "#ebebeb",
    },
    timeout: 7000, //time in ms before fallback image is used
  },
};
