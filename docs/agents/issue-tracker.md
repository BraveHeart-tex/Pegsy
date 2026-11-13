# Issue tracker: GitHub Projects + Issues

Track work in `BraveHeart-tex/Pegsy` GitHub Issues.
Keep specs in `docs/specs/` and link them from the relevant issues.
GitHub Projects organizes those issues for planning and progress tracking.

Use the `gh` CLI from this repo. Verify the target with
`gh repo view --json nameWithOwner` before creating issues.

## Issues

- Create: `gh issue create --title "..." --body-file <path>`.
- Read: `gh issue view <number> --json number,title,body,labels,comments`.
- List: `gh issue list --state open --json number,title,labels`.
- Label: `gh issue edit <number> --add-label "<label>"`.
- Comment: `gh issue comment <number> --body-file <path>`.
- Close: post the resolution comment, then run `gh issue close <number>`.

Use native sub-issues for parent-child relationships and native issue
dependencies for blockers. If unavailable, put `Part of #<parent>` and
`Blocked by: #<number>` at the top of the issue body.

When a skill says “publish to the issue tracker,” create a GitHub issue.
When it says “fetch the relevant ticket,” read the GitHub issue.

## Projects

Use GitHub Projects to organize existing issues.
No project URL or number is configured yet.
Ask which project to use before adding items or changing project fields.
Keep work status and discussion in the linked issue; link to repository specs
for detailed requirements.

## Pull requests as a triage surface

**PRs as a request surface: no.**
