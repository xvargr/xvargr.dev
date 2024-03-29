///
// notes: local images and files should be located in the public folder
///

export const userInfo = {
  introduction: `I am a self-taught web developer pivoting from an aircraft engineering background. I have been
      creating full stack, responsive web applications for a few years, with a solid understanding
      of the fundamentals, specializing in the <b>MERN</b> stack, although I do experiment with newer and legacy 
      technologies such as Svelte, Next.js, and Yii2. I am a quick learner and I enjoy coming up with 
      elegant solutions to challenging problems, and writing clean, concise, and readable code.`,

  educationHistory: [
    {
      institution: "Universiti Kuala Lumpur",
      title: "Bachelor of Technology - Aircraft Engineering Technology (Honours) in Mechanical",
      duration: "July 2017 - July 2021",
      description: [
        "Propeller Noise Reduction Paper - data collection with custom designed 6 sensor testbed and Arduino microcontroller, real time data streamed time over serial connection and recorded to an excel sheet",
        "Graduated with 3.75/4.00 CGPA",
      ],
    },
  ],

  jobHistory: [
    {
      institution: "CTAPPS MSC Sdn Bhd",
      title: "Full Stack Developer",
      duration: "March 2023 - present",
      description: [
        "Developing full-stack web applications including from start to finish",
        "Implementing backend telephony infrastructures for clients such as Public Bank",
        "Connecting backend telephony systems with easy to use front-end web interfaces",
      ],
      skills: ["javascript", "php", "mysql", "yii2", "lua", "freeswitch", "html", "css"],
    },
    {
      institution: "Freelance",
      title: "Web Developer",
      duration: "January 2022 - March 2023",
      description: [
        "Designed, developed, and maintained all aspects of a web application, including the server-side and client-side components",
        "Designed frontend UI with modern frameworks such as React and Svelte",
        "Created databases, RESTful APIs, and integrating third-party tools and services",
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
    // {
    //   institution: "Freelance",
    //   title: "3D Fabricator and Computer Technician",
    //   duration: "August 2018 - December 2020",
    //   description: [
    //     "Delivered 3D printing and 3D modeling service for students on campus",
    //     "Create 3D models from sketch with CAD software such as Fusion360 and CATIA",
    //     "Prepare optimize and slice 3D models for printing",
    //     "Provided computer repair and upgrade to customers",
    //   ],
    // },
  ],

  // repoRetrospective: {
  //   515840292: {
  //     retrospective: `
  //       If I were to start this project over, I would spend more time planning out the structure of the application
  //       and researching the necessary tools beforehand. I would also increase the frequency of maintenance tasks
  //       such as refactoring and modularizing code to keep the codebase clean, simple, and maintainable.
  //       <br/>
  //       As the project got more complicated features got exponentially harder to implement.
  //       This could have been avoided if the code was written with extensibility in mind from the very beginning,
  //       instead of doing these tasks while simultaneously implementing and debugging new features.
  //       `,
  //   },
  // },

  additionalSkills: [
    "html",
    "css",
    "javascript",
    "php",
    "lua",
    "sass",
    "git",
    "react",
    "svelte",
    "yii2",
    "node",
    "mongodb",
    "mysql",
    "express",
    "tailwindcss",
    "freeswitch",
  ],
};

export const userSettings = {
  personal: { name: "Akmal Shareef", title: "Full Stack Developer", photo: "headshot.webp" },

  email: "ved.rgravx@tcatnoc",

  resume: { filename: "Akmal-Shareef-Resume.pdf", downloadName: "Akmal-Shareef-Resume" },

  linkedIn: { page: "https://www.linkedin.com/in/xvargr" },

  github: {
    username: "xvargr",
    userAgent: "xvargr.dev",
    page: "https://github.com/xvargr",
    excludedRepos: [500291917, 607604295, 689965645],
    sort: true,
  },

  services: {
    wake: true,
    keepAwake: true,
    wakeInterval: 840000, // 14 min ms
    maxUptime: 1.8e6, // 30 min ms
    doNotWake: [588034462],
  },

  imageQuery: {
    query: "mountain",
    size: "medium",
    per_page: 80,
    page: 1,
    exclude: ["Person", "Man"],
  },

  fallbackColor: {
    background: "#c29588",
    highlight: "#f5b9a8",
    text: "#292929",
  },

  formLink: "https://formspree.io/f/mqkopzle",

  emojis: ["🦊", "🐸", "🐣", "🐳", "👌", "🤙", "🍫", "🍰", "🍪", "🍗", "🍕", "🍔"],
};

export const fallbackData = {
  imageData: {
    filename: "bgFallback.jpg",
    url: "https://www.pexels.com/photo/a-lake-in-mountains-in-winter-12365963/",
    photographer: "eberhard grossgasteiger",
    photographer_url: "https://www.pexels.com/@eberhardgross",
    avg_color: "#1e3641",
    src: { original: "bgFallback.jpg" },
    alt: "A Lake in Mountains in Winter",
    color: {
      background: "#1e3641",
      highlight: "#374f5a",
      text: "#ebebeb",
    },
    timeout: 7000, //time in ms before fallback image is used
  },

  repoData: [
    {
      id: 515840292,
      node_id: "R_kgDOHr8ZJA",
      name: "mercury-messenger",
      full_name: "xvargr/mercury-messenger",
      private: false,
      html_url: "https://github.com/xvargr/mercury-messenger",
      description:
        "Group messaging application inspired by Discord and Slack,  created independently as a learning tool for React and Tailwind",
      created_at: "2022-07-20T05:04:08Z",
      updated_at: "2023-02-20T07:57:59Z",
      pushed_at: "2023-02-22T07:11:02Z",
      homepage: "https://mercury-messenger.onrender.com",
      stargazers_count: 3,
      watchers_count: 3,
      language: "JavaScript",
      forks_count: 0,
      topics: [
        "axios",
        "express",
        "mongodb",
        "node",
        "passport",
        "react",
        "socket-io",
        "tailwindcss",
      ],
      visibility: "public",
      forks: 0,
      watchers: 3,
      default_branch: "main",
    },
    {
      id: 588034462,
      node_id: "R_kgDOIwyxng",
      name: "xvargr.dev",
      full_name: "xvargr/xvargr.dev",
      private: false,
      html_url: "https://github.com/xvargr/xvargr.dev",
      description:
        "Personal portfolio website, fetches latest public github repo data and keeps hosting services awake for seamless visitor access",
      homepage: "https://xvargr.dev/",
      stargazers_count: 0,
      watchers_count: 0,
      language: "Svelte",
      forks_count: 0,
      topics: ["sass", "svelte"],
      visibility: "public",
      forks: 0,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: 490190223,
      node_id: "R_kgDOHTe1jw",
      name: "pins",
      full_name: "xvargr/pins",
      private: false,
      html_url: "https://github.com/xvargr/pins",
      description:
        "Yelp-like reviews website, tutorial guided project created to learn the basics of front and backend web development",
      homepage: "https://pins.onrender.com",
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      forks_count: 0,
      topics: ["ejs", "express", "mongodb", "node", "passport"],
      visibility: "public",
      forks: 0,
      watchers: 0,
      default_branch: "main",
    },
  ],
};
