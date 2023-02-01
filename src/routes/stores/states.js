import { writable, derived } from "svelte/store";

// load states
export const infoCardLoaded = writable(false);
export const headshotLoaded = writable(false);

export const pageLoaded = derived(
  [infoCardLoaded, headshotLoaded],
  ([$infoCardLoaded, $headshotLoaded]) => {
    if ($infoCardLoaded && $headshotLoaded) return true;
    else return false;
  },
);

// colors
export const themeColor = writable("#000000");

// scroll position
export const isScrolledToTop = writable(true);
