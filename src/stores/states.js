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

// scroll position
export const isScrolledToTop = writable(true);

// project server status
export const serverStatus = writable({});
