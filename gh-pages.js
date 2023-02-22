import { publish } from "gh-pages";

publish(
  "build", // path to build directory
  {
    branch: "gh-pages", // gh pages branch name
    repo: "https://github.com/xvargr/xvargr.dev.git", // branch to be pushing to
    user: {
      name: "xvargr", // update to use your name
      email: "contact@xvargr.dev", // Update to use your email
    },
    dotfiles: true,
  },
  () => {
    console.log("Deploy Complete!");
  },
);
