import { writable, derived } from "svelte/store";

export const infoCardLoaded = writable(false);
export const headshotLoaded = writable(false);

export const pageLoaded = derived(
  [infoCardLoaded, headshotLoaded],
  ([$infoCardLoaded, $headshotLoaded]) => {
    if ($infoCardLoaded && $headshotLoaded) return true;
    else return false;
  },
);

export const themeColor = writable("#000000");
