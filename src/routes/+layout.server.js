import { PEXELS_KEY, GITHUB_KEY } from "$env/static/private";
import { createClient } from "pexels";
import { Octokit } from "octokit";

import {
  hex2hsl,
  hsl2hex,
  centerLightness,
  getTextTheme,
  getHighlightTheme,
  sortRepos,
} from "./utils";
import { userInfo, userSettings } from "./userData";

const { github, imageQuery } = userSettings;
const { repoRetrospective } = userInfo;

const octokit = new Octokit({ auth: GITHUB_KEY, userAgent: github.userAgent });

export async function load() {
  async function fetchBackground() {
    const client = createClient(PEXELS_KEY);

    const result = await client.photos.search({
      ...imageQuery,
      page: Math.floor(Math.random() * 200),
      per_page: 1,
    });
    return result.photos[0];
  }

  const fetchRepoData = async () => {
    const repos = await octokit.request("GET /users/{username}/repos", {
      username: github.username,
    });

    github.excludedRepos.forEach((id) => {
      const excludedIndex = repos.data.findIndex((repo) => repo.id === id);
      repos.data.splice(excludedIndex, 1);
    });

    // append added retrospective if available
    for (const id in repoRetrospective) {
      const index = repos.data.findIndex((repo) => repo.id === Number(id));

      if (index === -1) {
        console.warn(`!!! failed to append additional information to repository ${id}, not found`);
        return null;
      }

      Object.keys(repoRetrospective[id]).forEach((key) => {
        repos.data[index][key] = repoRetrospective[id][key];
      });
    }

    return repos.data;
  };

  const fetchedBackground = await fetchBackground();
  const repoData = await fetchRepoData();

  const hslAvgColor = hex2hsl(fetchedBackground.avg_color);
  const balancedTheme = hsl2hex(centerLightness(hslAvgColor));
  const textTheme = getTextTheme(hslAvgColor);
  const highlightTheme = getHighlightTheme(hslAvgColor);

  return {
    theme: { background: balancedTheme, text: textTheme, highlight: highlightTheme },
    backgroundImage: fetchedBackground,
    repos: github.sort ? sortRepos(repoData) : repoData,
  };
}
