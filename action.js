import core from "@actions/core";
import github from "@actions/github";

console.log("From Github Actions!!!");
async function run() {
	const GITHUB_TOKEN = core.getInput("GITHUB_TOKEN");

	const octokit = github.getOctokit(GITHUB_TOKEN);

	const { context = {} } = github;
	const { pull_request } = context.payload;

	await octokit.issues.createComment({
		...context.repo,
		issue_number: pull_request.number,
		body: "Hello from aymane, thanks for your pull request",
	});
}

run();
