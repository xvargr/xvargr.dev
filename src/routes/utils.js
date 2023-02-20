///
// client utilities
///

export async function wake(url, retries = 0) {
  return new Promise((resolve, reject) => {
    window
      .fetch(url, {
        method: "GET",
      })
      .then((data) => {
        // setInterval(() => {
        //   wake(url);
        // }, 840000);
        console.warn("not keeping service awake");
        resolve(data);
      })
      .catch((err) => {
        retries += 1;

        if (retries < 30) {
          setTimeout(() => {
            wake(url, retries);
          }, 10000);
        } else reject(err);
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
  function sortByStars(repos) {
    const starsResult = [];
    const starsUnsorted = [];

    repos.forEach((repo) => {
      if (repo.stargazers_count > 0) {
        if (starsResult.length > 0) {
          const larger = starsResult.findIndex(
            (resultRepo) => resultRepo.stargazers_count > repo.stargazers_count,
          );

          const equal = starsResult.findIndex(
            (resultRepo) => resultRepo.stargazers_count === repo.stargazers_count,
          );

          if (equal !== -1) starsResult.splice(equal, 0, repo);
          else {
            if (larger !== -1) starsResult.splice(larger, 0, repo);
            else starsResult.push(repo);
          }
        } else starsResult.push(repo);
      } else starsUnsorted.push(repo);
    });

    return { result: starsResult, unsorted: starsUnsorted };
  }

  function sortByDate(repos) {
    const dateResult = [];

    function getRepoDate({ repo, epochOnly }) {
      const dateString = repo.updated_at;
      const epochDate = Date.parse(dateString);

      if (epochOnly) {
        return epochDate;
      } else {
        const regexMatch = dateString.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})Z/m);

        return {
          epochDate,
          year: regexMatch[1],
          month: regexMatch[2],
          day: regexMatch[3],
          hour: regexMatch[4],
          minutes: regexMatch[5],
          seconds: regexMatch[6],
        };
      }
    }

    repos.forEach((repo) => {
      repo.epochDate = getRepoDate({ repo, epochOnly: true });

      if (dateResult.length > 0) {
        const older = dateResult.findIndex((resultRepo) => resultRepo.epochDate < repo.epochDate);

        if (older !== -1) dateResult.splice(older, 0, repo);
        else dateResult.push(repo);
      } else dateResult.push(repo);
    });

    return dateResult;
  }

  const starsSorted = sortByStars(repos);
  const dateSorted = sortByDate(starsSorted.unsorted);

  return [...starsSorted.result, ...dateSorted];
}
