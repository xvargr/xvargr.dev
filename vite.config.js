import { sveltekit } from "@sveltejs/kit/vite";
import { resolve } from "path";

const config = {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $fonts: resolve("./static/fonts"),
    },
  },
};

export default config;
