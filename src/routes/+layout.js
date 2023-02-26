import { userSettings, userInfo, fallbackData } from "./userData";
import {
  hex2hsl,
  hsl2hex,
  centerLightness,
  getTextTheme,
  getHighlightTheme,
  sortRepos,
} from "./utils";

import imgData from "../imageData.json";

const { repoRetrospective } = userInfo;
const { github } = userSettings;

export const ssr = false;

export async function load({ fetch }) {
  async function getRepos() {
    const repoData = await (await fetch(`https://api.github.com/users/${github.username}/repos`))
      .json()
      .then((res) => {
        if (res.length) return res;
        else {
          console.warn("github error, using fallback repository data");
          return [...fallbackData.repoData];
        }
      });

    // remove excluded repos
    github.excludedRepos.forEach((id) => {
      const excludedIndex = repoData.findIndex((repo) => repo.id === id);
      if (excludedIndex !== -1) repoData.splice(excludedIndex, 1);
    });

    // append added retrospective if available
    for (const id in repoRetrospective) {
      const index = repoData.findIndex((repo) => repo.id === Number(id));

      if (index === -1) {
        console.warn(`!!! failed to append additional information to repository ${id}, not found`);
        return null;
      }

      Object.keys(repoRetrospective[id]).forEach((key) => {
        repoData[index][key] = repoRetrospective[id][key];
      });
    }

    return repoData;
  }

  async function fetchBackground() {
    return imgData[Math.floor(Math.random() * imgData.length)];
  }

  const repoData = await getRepos();
  const background = await fetchBackground();

  const hslAvgColor = hex2hsl(background.avg_color);
  const balancedTheme = hsl2hex(centerLightness(hslAvgColor));
  const textTheme = getTextTheme(hslAvgColor);
  const highlightTheme = getHighlightTheme(hslAvgColor);

  return {
    theme: { background: balancedTheme, text: textTheme, highlight: highlightTheme },
    backgroundImage: background,
    repos: github.sort ? sortRepos(repoData) : repoData,
  };
}
