///
// client utilities
///

import { userSettings } from "./userData";
const { services } = userSettings;

export async function wake({
  url,
  retries = 0,
  currentUptime = 0,
  maxUptime = services.maxUptime || null,
}) {
  const lastWakeTime = Date.now();

  return new Promise((resolve, reject) => {
    window
      .fetch(url, {
        method: "GET",
      })
      .then((data) => {
        if (services.keepAwake) {
          // if (max uptime is not set) or (service will stay awake past max uptime), keep awake
          if (!maxUptime || services.wakeInterval + currentUptime < maxUptime) {
            setTimeout(() => {
              wake({ url, currentUptime: currentUptime + (Date.now() - lastWakeTime), maxUptime });
            }, services.wakeInterval || 840000);
          } else console.warn("No longer keeping service awake");
        } else console.warn("Not keeping service awake");

        resolve(data);
      })
      .catch((err) => {
        retries += 1;
        if (retries < 30) setTimeout(() => wake({ url, retries }), 10000);
        else reject(err);
      });
  });
}

///
// server utilities
///

export function hex2hsl(hexString) {
  // https://stackoverflow.com/a/54071699/18863465
  const r = parseInt(hexString.substr(1, 2), 16) / 255;
  const g = parseInt(hexString.substr(3, 2), 16) / 255;
  const b = parseInt(hexString.substr(5, 2), 16) / 255;

  let v = Math.max(r, g, b),
    c = v - Math.min(r, g, b),
    f = 1 - Math.abs(v + v - c - 1);
  let h = c && (v == r ? (g - b) / c : v == g ? 2 + (b - r) / c : 4 + (r - g) / c);

  return [60 * (h < 0 ? h + 6 : h), f ? c / f : 0, (v + v - c) / 2];
}

export function hsl2hex(hslArray) {
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

  return `#${f(0)}${f(8)}${f(4)}`;
}

export function centerLightness(hslArray) {
  let lightness = hslArray[2];

  if (lightness > 0.75) lightness = 0.75;
  else if (lightness < 0.3) lightness = 0.3;

  hslArray[2] = lightness;
  return [...hslArray];
}

export function getTextTheme(hslArray) {
  const l = hslArray[2];
  if (l > 0.5) return "#292929";
  else return "#ebebeb";
}

export function getHighlightTheme(hslArray) {
  let [h, s, l] = hslArray;
  l = l + 0.15;
  return hsl2hex([h, s, l]);
}

export function sortRepos(repos) {
  const res = repos.sort((a, b) => {
    // sort by stargazers_count, then by created_at
    if (a.stargazers_count || b.stargazers_count) {
      return b.stargazers_count - a.stargazers_count;
    }
    return Date.parse(b.created_at) - Date.parse(a.created_at);
  });
  return [...res];
}
