import { writable, derived } from "svelte/store";

// load states
export const backgroundImageLoaded = writable(false);
export const headshotLoaded = writable(false);

export const pageLoaded = derived(
  [backgroundImageLoaded, headshotLoaded],
  ([$backgroundImageLoaded, $headshotLoaded]) => {
    if ($backgroundImageLoaded && $headshotLoaded) return true;
    else return false;
  },
);

// colors
export const themeColor = writable({
  background: "#c29588",
  text: "#292929",
  highlight: "#f5b9a8",
});

// scroll position
export const isScrolledToTop = writable(true);

// project server status
export const serverStatus = writable({});
