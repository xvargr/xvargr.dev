import { createClient } from "pexels";
import { PEXELS_KEY } from "$env/static/private";

// function invertHex(hex) {
//   return (Number(`0x1${hex}`) ^ 0xffffff).toString(16).substr(1).toUpperCase();
// }

export function load() {
  async function fetchBackground() {
    const client = createClient(PEXELS_KEY);

    const result = await client.photos.search({
      query: "mountain",
      size: "large",
      orientation: "portrait",
      page: Math.floor(Math.random() * 100),
      per_page: 1,
    });
    return result.photos[0];
  }

  return { backgroundImage: fetchBackground() };
}
