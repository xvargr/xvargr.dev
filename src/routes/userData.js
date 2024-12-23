///
// notes: local images and files should be located in the public folder
///

export const userInfo = {
  introduction: `I am a full stack web developer, with solid fundamentals in both front-end and back-end technologies. I have been creating seamless user experiences and robust server-side business logic for several years. I am a passionate programmer, always keeping up with industry trends. I am detail oriented and believe in continuous self improvement and I'm a quick learner, so I'm always looking for new opportunities to improve.`,

  educationHistory: [
    {
      institution: "Universiti Kuala Lumpur",
      title: "Bachelor of Technology - Aircraft Engineering Technology (Honours) in Mechanical",
      duration: "July 2017 - July 2021",
      description: [
        "Propeller Noise Reduction Research - Designed programed, and 3D printed an Arduino powered 6 sensor array testbed capable of real time data streaming and analysis.",
        "3.75 CGPA",
      ],
    },
  ],

  jobHistory: [
    {
      institution: "CTAPPS MSC Sdn Bhd",
      title: "Full Stack Developer",
      duration: "March 2023 - present",
      description: [
        "Building a scalable multi-tenant CRM SAAS platform for customer reach and engagement using Laravel, React, Typescript, PHP, Node.js, Redis, and RabbitMQ.",
        "Developing custom WhatsApp web client for support staff with CRM integration using technologies such as TypeScript, React, Tailwind, and Socket.io.",
        "Implementing PABX telephony infrastructure with FreeSwitch and Lua.",
        "Connecting backend PABX telephony systems with robust, user friendly, web management interface, created using MVC PHP frameworks such as Laravel and Yii2, and technologies like Axios.",
        "Writing unit and feature tests to improve code reliability.",
        "Writing and maintaining documentation of new features.",
        "Clients includes: Acson, Public Bank.",
      ],
      skills: [
        "javascript",
        "typescript",
        "tailwindcss",
        "php",
        "html",
        "css",
        "express",
        "node",
        "react",
        "laravel",
        "vite",
        "pestphp",
        "redis",
        "rabbitmq",
        "mysql",
        "socket-io",
        "yii2",
        "freeswitch",
        "lua",
      ],
      // images:[
      //   {src: "ctapps.webp", alt: "",}
      // ]
    },
    {
      institution: "Freelance",
      title: "Web Developer",
      duration: "January 2022 - March 2023",
      description: [
        "Designed front-end UI with modern tech stack including technologies such as React, Svelte, and Tailwind.",
        "Created RESTful API backends with Express.js, databases with MongoDB, and integrating third-party libraries such as OAuth and Socket.io.",
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
    "typescript",
    "php",
    "go",
    "react",
    "laravel",
    "sequelize",
    "redis",
    "rabbitmq",
    "node",
    "express",
    "tailwindcss",
    "git",
    "vite",
    "pestphp",
    "lua",
    "sass",
    "scss",
    "svelte",
    "yii2",
    "mongodb",
    "mysql",
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
    onlyShow: [588034462, 490190223, 829213412, 515840292],
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
      id: 829213412,
      node_id: "R_kgDOMWzK5A",
      name: "clipit",
      full_name: "xvargr/clipit",
      private: false,
      html_url: "https://github.com/xvargr/clipit",
      description:
        "Link shortener web app written with Go in one week with no external dependencies",
      homepage: "https://clipit.onrender.com",
      stargazers_count: 0,
      watchers_count: 0,
      language: "Go",
      forks_count: 0,
      topics: ["css", "go", "html", "javascript"],
      visibility: "public",
      forks: 0,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: 515840292,
      node_id: "R_kgDOHr8ZJA",
      name: "mercury-messenger",
      full_name: "xvargr/mercury-messenger",
      private: false,
      html_url: "https://github.com/xvargr/mercury-messenger",
      description:
        "Group messaging application inspired by Discord and Slack. Created with React, Tailwind, Express, Node.js, Socket.io, and MongoDB",
      homepage: "https://mercury-messenger.onrender.com",
      stargazers_count: 2,
      watchers_count: 2,
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
      watchers: 2,
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
        "Yelp-like reviews website. Guided project created to learn the basics of front and backend web development",
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
    {
      id: 588034462,
      node_id: "R_kgDOIwyxng",
      name: "xvargr.dev",
      full_name: "xvargr/xvargr.dev",
      private: false,
      html_url: "https://github.com/xvargr/xvargr.dev",
      description:
        "Personal portfolio website that fetches latest public GitHub repository data and keeps hosting services awake and ready for visitor access. Created with Svelte and SCSS",
      homepage: "https://xvargr.dev",
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
  ],
};
