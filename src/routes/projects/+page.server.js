import { GITHUB_KEY } from "$env/static/private";
import { Octokit, App } from "octokit";

// console.log(Octokit);
// console.log(App);

const octokit = new Octokit({ auth: GITHUB_KEY });
const test = async () => {
  const res = await octokit.request("GET /zen", {});
  //   console.log(res);
  return res.data;
};
// console.log(test());

export async function load() {
  const res = await test();
  console.log(res);
  return { github: res };
}
