import { publish } from "gh-pages";

publish(
  "build", // path to build directory
  {
    branch: "gh-pages",
    repo: "https://github.com/xvargr/xvargr.dev.git",
    user: {
      name: "xvargr",
      email: "contact@xvargr.dev",
    },
    dotfiles: true,
  },
  (e) => {
    console.log("Deploy Complete!");
    console.log(e);
  },
);
