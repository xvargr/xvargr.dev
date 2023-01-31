import { createClient } from "pexels";
import { PEXELS_KEY } from "$env/static/private";

function hex2hsl(hexString) {
  // https://stackoverflow.com/a/54071699/18863465
  const r = parseInt(hexString.substr(1, 2), 16) / 255;
  const g = parseInt(hexString.substr(3, 2), 16) / 255;
  const b = parseInt(hexString.substr(5, 2), 16) / 255;

  let v = Math.max(r, g, b),
    c = v - Math.min(r, g, b),
    f = 1 - Math.abs(v + v - c - 1);
  let h = c && (v == r ? (g - b) / c : v == g ? 2 + (b - r) / c : 4 + (r - g) / c);

  // console.log("hex", hexString, "=> hsl", [
  //   60 * (h < 0 ? h + 6 : h),
  //   f ? c / f : 0,
  //   (v + v - c) / 2,
  // ]);

  return [60 * (h < 0 ? h + 6 : h), f ? c / f : 0, (v + v - c) / 2];
}

function hsl2hex(hslArray) {
  let [h, s, l] = hslArray;

  s = Math.floor(s * 100);

  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0"); // convert to Hex and prefix "0" if needed
  };

  // console.log("hsl", hslArray, "=> hex", `#${f(0)}${f(8)}${f(4)}`);

  return `#${f(0)}${f(8)}${f(4)}`;
}

function centerLightness(hslArray) {
  let lightness = hslArray[2];

  if (lightness > 0.75) lightness = 0.75;
  else if (lightness < 0.3) lightness = 0.3;

  hslArray[2] = lightness;
  return [...hslArray];
}

export async function load() {
  async function fetchBackground() {
    const client = createClient(PEXELS_KEY);

    const result = await client.photos.search({
      query: "mountain",
      size: "large",
      orientation: "portrait",
      page: Math.floor(Math.random() * 250),
      per_page: 1,
    });
    return result.photos[0];
  }

  const fetchedBackground = await fetchBackground();
  const balancedTheme = hsl2hex(centerLightness(hex2hsl(fetchedBackground.avg_color)));

  return { balancedTheme, backgroundImage: fetchedBackground };
}
