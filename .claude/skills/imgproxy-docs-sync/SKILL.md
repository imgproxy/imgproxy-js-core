---
name: imgproxy-docs-sync
description: Sync this package with an upstream imgproxy docs update. Takes a GitHub issue ("Usage docs of imgproxy have been updated"), reads the linked imgproxy-docs diff, works out what must change in this repo, prints a plan for approval, then implements it and opens a PR. Use when the user references such an issue by number or URL, or asks to catch up with imgproxy docs / usage changes.
---

# imgproxy docs sync

Turn an upstream docs-update issue into a reviewed code change and a PR.

The `imgproxy-docs` repo fires a `repository_dispatch` at this repo whenever the **Usage**
section of the docs changes. `.github/workflows/imgproxy-usage-updated.yml` opens an issue
from `.github/templates/ISSUE.md`, always titled _"Usage docs of imgproxy have been updated"_
and always shaped like this:

```
@DarthSim has just updated the [Usage](https://docs.imgproxy.net/category/usage) part of the documentation.
Please, check [the difference](https://github.com/imgproxy/imgproxy-docs/compare/451581c87fd8...6c7c0312f7f0) and make the necessary changes.
```

The whole job is: read that diff, decide what it means for this package, get sign-off, ship it.

## Input

The skill argument is an issue number (`83`), an issue URL, or nothing.

- **Nothing given** — list the candidates and ask which one:
  `gh issue list --state open --search "Usage docs of imgproxy have been updated" --json number,title,createdAt`
  If several are open, note that they are **sequential**: issue N's `base` sha is usually issue N-1's
  `head` sha. Offer to process the oldest first, or to collapse the whole run into one range
  (oldest `base` … newest `head`) and one PR. Don't decide this silently — ask.
- **Issue given** — go straight to step 1.

## Step 1 — Read the issue and extract the compare range

```bash
gh issue view <N> --json number,title,body,state,url
```

Pull the two shas out of the `the difference` link:
`https://github.com/imgproxy/imgproxy-docs/compare/<base>...<head>`.

Bail out early and tell the user if: the issue is already closed, its body has no compare link
(a hand-written issue — this skill doesn't apply, handle it normally), or a PR already references
it (`gh pr list --state all --search "<N>"`).

## Step 2 — Get the upstream diff

```bash
gh api repos/imgproxy/imgproxy-docs/compare/<base>...<head> \
  --jq '.files[] | {filename, status, additions, deletions}'
```

Then read the patches for **`docs/usage/**` only\*\*:

```bash
gh api repos/imgproxy/imgproxy-docs/compare/<base>...<head> \
  --jq '.files[] | select(.filename | startswith("docs/usage/")) | "=== \(.filename) ===\n\(.patch)"'
```

Notes:

- `docs/configuration/**`, `docs/image_sources/**`, `docs/installation/**` etc. are **out of scope** —
  this package builds URLs, it doesn't configure a server. List them in the report as "ignored, and why",
  never drop them in silence.
- A very large compare gets truncated by the API. If `.files` looks clipped or patches are missing,
  fall back to fetching the raw diff:
  `curl -sL https://github.com/imgproxy/imgproxy-docs/compare/<base>...<head>.diff`
- A diff hunk carries little context. For every option you are going to touch, **also read the
  rendered doc page** (`WebFetch https://docs.imgproxy.net/usage/processing#<anchor>`) to get the
  full argument list, defaults, and value ranges. The hunk tells you _what changed_; the page tells
  you _what the option is_.

## Step 3 — Classify each usage change

Put every hunk in exactly one bucket:

| Bucket                   | Meaning                                                                                           | Action                                                                                             |
| ------------------------ | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| **New option**           | A new `### Some option` block with an `imgproxy_url_option` code fence                            | Add option module + types + wiring + tests                                                         |
| **Changed option**       | New/renamed/reordered arguments, widened or narrowed value range, new enum value, changed default | Amend the existing module + types + tests                                                          |
| **Removed / deprecated** | Option deleted or marked deprecated                                                               | Propose deprecation in JSDoc; **do not** delete public API without asking — it's a breaking change |
| **Prose only**           | Rewording, typo, clarified explanation, example change with no semantic effect                    | No code change; JSDoc/`@see` refresh only if the wording is quoted in our types                    |
| **Out of scope**         | Signing, presets server config, source URL formats, anything not an option this package emits     | No change, with a one-line reason                                                                  |

Watch for these markers in the docs:

- `((pro))` in a heading → PRO feature. Say so in the JSDoc (`**PRO feature**`) — see `src/types/blurAreas.ts`.
- `%arg` placeholders in the `imgproxy_url_option` fence → the positional argument order, and the
  short alias on the second line (`progressive_blur:...` / `pbl:...`) → both keys go in the
  `*OptionsPartial` interface.
- "_(optional)_" on an argument → optional in TS **and** subject to the trailing-colon rule
  (see `references/repo-conventions.md`; getting this wrong caused the `gradient` bug fixed in c8eb5b7).
- An option under _Getting the image info_ → `src/optionsImageInfo/` + `src/typesImageInfo/`,
  not `src/options/`. An option valid for both URL kinds → `src/optionsShared/` + `src/typesShared/`.

Before proposing anything, **check whether it already exists**:

```bash
rg -n "<option_name>|<short_alias>" src/
git log --oneline -15
```

Earlier issues in the backlog may already be covered by merged PRs.

## Step 4 — Print the plan and get approval

**This step is mandatory. Never write code before the user approves.**

Print a report in this shape:

```
## Issue #83 — imgproxy-docs 451581c…6c7c031

### Upstream usage changes
1. processing.mdx: NEW option `progressive_blur` / `pbl` ((pro))
   args: sigma:direction:start:stop — direction is angle|down|up|right|left (default down),
   start/stop are 0..1 floats (defaults 0.0 / 1.0)
2. processing.mdx: prose only — reworded the `blur` intro

### Ignored
- configuration/options.mdx, image_sources/amazon_s3.mdx — server config, not URL options

### Proposed changes in this repo
| File | Action |
| --- | --- |
| src/types/progressiveBlur.ts | new — ProgressiveBlur + ProgressiveBlurOptionsPartial |
| src/types/index.ts | import + add to the Options intersection (alphabetical) |
| src/options/progressiveBlur.ts | new — test/build, guards, trailing-colon trim |
| src/options/index.ts | re-export (alphabetical) |
| tests/optionsBasic/progressiveBlur.test.ts | new — test() truthiness, build() happy paths, every guard error |
| .changeset/progressive-blur.md | new — minor |

### Emitted URL parts
{ progressive_blur: { sigma: 5 } }                      -> pbl:5
{ pbl: { sigma: 5, direction: "up", start: 0, stop: 1 } } -> pbl:5:up:0:1

### Open questions
- none
```

Include the **Emitted URL parts** section always — it is the fastest way for the user to spot a
misreading of the docs. Include **Open questions** whenever the docs are ambiguous about defaults,
ranges, or whether an argument is optional; ask rather than guess.

Then call `AskUserQuestion`: _Proceed as planned_ / _Proceed with changes (describe them)_ /
_Report only, don't implement_ / _Cancel_. Honour "report only" — stop there and leave the tree clean.

## Step 5 — Implement

Only after approval.

```bash
git checkout main && git pull && git checkout -b <kebab-branch>
```

Branch names describe the change: `add-progressive-blur`, `fix-gradient-explicit-optional-args`.

Follow `references/repo-conventions.md` exactly — file layout, guard usage, JSDoc shape, test
coverage, and the optional-argument rules live there. Then:

```bash
npm run lint && npm run check-types && npm run test -- --run && npm run build
```

All four must pass — they are the CI job (`.github/workflows/ci.yml`). Never edit `dist/`; `npm run build`
regenerates it, and it must not be part of the commit (it is checked in, so `git status` it and leave
it out unless it was already tracked-dirty before you started).

Add a changeset by hand at `.changeset/<kebab-name>.md` (don't run the interactive CLI):

```md
---
"@imgproxy/imgproxy-js-core": minor
---

Add support for the `progressive_blur` (`pbl`) processing option. …
```

`minor` for a new option or a new argument, `patch` for a fix or a doc/JSDoc correction. Write the
body for a changelog reader: what the option does, and the shape users pass. See
`.changeset/gradient-explicit-optional-args.md` for the tone.

## Step 6 — Commit and open the PR

```bash
git add -A && git commit
```

Commit subject matches the repo's history style: `Add progressive_blur support`,
`Add support for exif canonical_names option`, `Fix gradient dropping optional arguments`.
Use the trailers the environment requires.

```bash
git push -u origin <branch>
gh pr create --base main --title "<same as commit subject>" --body "<body>"
```

PR body:

````md
Closes #83

Upstream: https://github.com/imgproxy/imgproxy-docs/compare/451581c87fd8...6c7c0312f7f0

Adds the `progressive_blur` / `pbl` processing option (PRO).

- `sigma` — required, >= 0
- `direction` — optional, angle in degrees or `down` | `up` | `right` | `left` (default `down`)
- `start` / `stop` — optional, 0..1 (defaults `0.0` / `1.0`)

```ts
generateUrl(url, { progressive_blur: { sigma: 5, direction: "up" } });
// -> /pbl:5:up/plain/...
```
````

`Closes #<N>` is what links the PR back to the auto-generated issue, so it closes on merge — don't
omit it. Report the PR URL to the user. Do **not** merge.

## When the range spans several issues

If the user asked to collapse a run of issues into one pass, use the oldest `base` and the newest
`head` in a single compare, and put `Closes #A`, `Closes #B`, `Closes #C` on separate lines in the
PR body. Still produce one report covering everything before implementing.
