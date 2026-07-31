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
  (err) => {
    if (err) {
      console.error("Deployment error!");
      console.error(err.message);
    } else {
      console.log("Deploy Complete!");
    }
  },
);
