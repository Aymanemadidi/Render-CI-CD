import core from "@actions/core";
import github from "@actions/github";

console.log("This message was sent from Github Actions!");
console.log("Throwing error");
throw new Error("I am the error");
console.log("This should not be visible");
// async function run() {
// 	const GITHUB_TOKEN = core.getInput("GITHUB_TOKEN");

// 	const octokit = github.getOctokit(GITHUB_TOKEN);

// 	const { context = {} } = github;
// 	const { pull_request } = context.payload;
// 	try {
// 		await octokit.issues.createComment({
// 			...context.repo,
// 			issue_number: pull_request.number,
// 			body: "Hello from aymane, thanks for your pull request",
// 		});
// 	} catch (e) {
// 		console.log(e);
// 	}
// }

// run();
