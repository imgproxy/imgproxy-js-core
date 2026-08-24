<p align="center">
  <a href="https://imgproxy.net">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="assets/logo-dark.svg?sanitize=true">
      <source media="(prefers-color-scheme: light)" srcset="assets/logo-light.svg?sanitize=true">
      <img alt="imgproxy logo" src="assets/logo-light.svg?sanitize=true">
    </picture>
  </a>
</p>

<p align="center"><strong>
  <a href="https://imgproxy.net">Website</a> |
  <a href="https://imgproxy.net/blog/">Blog</a> |
  <a href="https://docs.imgproxy.net">Documentation</a> |
  <a href="https://imgproxy.net/#pro">imgproxy Pro</a>
</strong></p>

<p align="center">
  <a href="https://github.com/imgproxy/imgproxy/pkgs/container/imgproxy"><img alt="Docker" src="https://img.shields.io/badge/Docker-0068F1?style=for-the-badge&logo=docker&logoColor=fff" /></a>
  <a href="https://bsky.app/profile/imgproxy.net"><img alt="Bluesky" src="https://img.shields.io/badge/Bluesky-0068F1?style=for-the-badge&logo=bluesky&logoColor=fff" /></a>
  <a href="https://x.com/imgproxy_net"><img alt="X" src="https://img.shields.io/badge/X.com-0068F1?style=for-the-badge&logo=x&logoColor=fff" /></a>
  <a href="https://mastodon.social/@imgproxy"><img alt="X" src="https://img.shields.io/badge/Mastodon-0068F1?style=for-the-badge&logo=mastodon&logoColor=fff" /></a>
  <a href="https://discord.gg/5GgpXgtC9u"><img alt="Discord" src="https://img.shields.io/badge/Discord-0068F1?style=for-the-badge&logo=discord&logoColor=fff" /></a>
</p>

<p align="center">
<a href="https://github.com/imgproxy/imgproxy-js-core/actions"><img alt="GH CI" src="https://img.shields.io/github/actions/workflow/status/imgproxy/imgproxy-js-core/ci.yml?branch=main&label=CI&style=for-the-badge" /></a>
</p>

---

**[imgproxy](https://github.com/imgproxy/imgproxy)** is a fast and secure standalone server for resizing and converting remote images. The main principles of imgproxy are simplicity, speed, and security. It is a Go application, ready to be installed and used in any Unix environment—also ready to be containerized using Docker.

imgproxy can be used to provide a fast and secure way to _get rid of all the image resizing code_ in your web application (like calling ImageMagick or GraphicsMagick, or using libraries), while also being able to resize everything on the fly on a separate server that only you control. imgproxy is fast, easy to use, and requires zero processing power or storage from the main application. imgproxy is indispensable when handling image resizing of epic proportions, especially when original images are coming from a remote source.

**imgproxy-js-core package is designed to be used as part of framework-specific packages and plugins.**

- [Install](#install)
- [Usage](#usage)
- [Methods](#methods)
- [Development](#development)
- [Syncing with imgproxy docs](#syncing-with-imgproxy-docs)
- [Publication Workflow](#publication-workflow)

## Install

```bash
npm install @imgproxy/imgproxy-js-core
```

## Usage

```ts
import { generateUrl } from "@imgproxy/imgproxy-js-core";

const url = generateUrl(
  {
    value: "https://example.com/image.jpg",
    type: "plain",
  },
  {
    width: 150,
    height: 150,
    format: "webp",
    quality: 80,
    enlarge: "t",
    extend: {
      extend: 1,
      gravity: { type: "nowe", y_offset: 5 },
    },
    blur: 5,
    zoom: 1.5,
  }
);
```

## Methods

### `generateUrl(URL, options)`

This method generates an imgproxy URL based on the provided source and options.

The `imgproxy-js-core` library exposes a method called `generateUrl`, which takes two arguments:

- `URL` (required): An object that contains the `value` and `type` properties.
  - `value` (required): A string that contains the URL of the image.
  - `type` (optional): A string that specifies the type of the URL. It can be one of the following:
    - `plain`: A plain URL.
    - `base64`: A base64 encoded URL.
    - `encoded`: An AES-CBC encrypted URL.
  - `filename` (optional): A SEO-friendly filename that will be appended to `base64` or `encrypted` URLs (requires [`IMGPROXY_BASE64_URL_INCLUDES_FILENAME`](https://docs.imgproxy.net/configuration/options#source-image-urls) to be enabled on the imgproxy server). Not allowed for `plain` URLs.
- `options` (optional): An object that contains [imgproxy options](https://docs.imgproxy.net/generating_the_url?id=processing-options).

For a detailed description of the available options, please refer to the [imgproxy documentation](https://docs.imgproxy.net/generating_the_url?id=processing-options), as well as the option types files in the `imgproxy-js-core` library.

The `generateUrl` method returns a string that contains the generated URL.

### `generateImageInfoUrl(URL, options)`

**This method ia available only for the PRO version of imgproxy.**

This method generates an imgproxy URL based on the provided source and options.

The `imgproxy-js-core` library exposes a method called `generateImageInfoUrl`, which takes two arguments:

- `URL` (required): An object that contains the `value` and `type` properties.
  - `value` (required): A string that contains the URL of the image.
  - `type` (optional): A string that specifies the type of the URL. It can be one of the following:
    - `plain`: A plain URL.
    - `base64`: A base64 encoded URL.
    - `encoded`: An AES-CBC encrypted URL.
  - `filename` (optional): A SEO-friendly filename that will be appended to `base64` or `encrypted` URLs (requires [`IMGPROXY_BASE64_URL_INCLUDES_FILENAME`](https://docs.imgproxy.net/configuration/options#source-image-urls) to be enabled on the imgproxy server). Not allowed for `plain` URLs.
- `options` (optional): An object that contains [imgproxy options](https://docs.imgproxy.net/getting_the_image_info?id=info-options).

For a detailed description of the available options, please refer to the [imgproxy documentation](https://docs.imgproxy.net/getting_the_image_info?id=info-options), as well as the option types files in the `imgproxy-js-core` library.

The `generateImageInfoUrl` method returns a string that contains the generated URL.

## Development

1. Clone the repo
2. Install dependencies

```bash
npm install
```

3. Run dev server

```bash
npm run dev
```

## Syncing with imgproxy docs

This package mirrors the [Usage](https://docs.imgproxy.net/category/usage) part of the imgproxy
documentation, and the mirroring is semi-automated.

### How an update arrives

1. The [`imgproxy-docs`](https://github.com/imgproxy/imgproxy-docs) repository sends a
   `repository_dispatch` event of type `imgproxy-usage-updated` whenever its Usage docs change.
2. [`.github/workflows/imgproxy-usage-updated.yml`](./.github/workflows/imgproxy-usage-updated.yml)
   picks it up and opens an issue from [`.github/templates/ISSUE.md`](./.github/templates/ISSUE.md),
   always titled **"Usage docs of imgproxy have been updated"** and containing a link to a
   `imgproxy-docs/compare/<base>...<head>` range.
3. Someone turns that diff into code here.

### Doing step 3 with the bundled skill

The repo ships a [Claude Code](https://claude.com/claude-code) skill,
[`.claude/skills/imgproxy-docs-sync`](./.claude/skills/imgproxy-docs-sync), that walks the whole of
step 3 for you. It is committed to the repo, so cloning is the installation.

#### One-time setup

```bash
npm install -g @anthropic-ai/claude-code   # if you don't have Claude Code yet
gh auth login                              # the skill reads issues and diffs through the GitHub CLI
```

Check the second one with `gh auth status` — without it, the skill can't read the issue.

#### Running it

```bash
cd imgproxy-js-core
claude                     # starts Claude Code in the project
```

Then type this at the prompt (the leading slash is part of it):

```
/imgproxy-docs-sync 82
```

`82` is the number of the auto-generated issue you want to work on. You can also paste the issue URL,
or type `/imgproxy-docs-sync` with nothing after it — then it lists the open
_"Usage docs of imgproxy have been updated"_ issues and asks which one you mean.

#### What happens next

1. It reads issue #82, pulls the `imgproxy-docs` compare range out of the issue body, and fetches
   that diff — keeping only `docs/usage/**`, because server-side docs (`docs/configuration/**`,
   `docs/image_sources/**`, …) don't affect a URL-building package. Anything skipped is listed with a
   reason rather than dropped in silence.
2. It sorts each change into new option / changed option / removed or deprecated / prose only / out
   of scope, checking `src/` first — an old issue may already be covered by a merged PR.
3. **It stops and shows you a plan.** That report is the part to actually read: what changed
   upstream, a file-by-file table of what it wants to write, and the literal URL strings the new code
   would produce, e.g.

   ```
   { progressive_blur: { sigma: 5 } }  ->  pbl:5
   ```

   Comparing those strings against the imgproxy docs is the quickest way to catch a misreading.

4. **You answer the approval prompt.** Four choices: _Proceed as planned_, _Proceed with changes_
   (say what to do differently — e.g. "`start` is optional, don't require it"), _Report only_ (stop
   here, nothing is written, working tree stays clean), or _Cancel_. **Nothing is written to disk
   before you pick.**
5. On approval it branches off `main`, writes the option module, its types, the wiring and the tests
   following
   [`references/repo-conventions.md`](./.claude/skills/imgproxy-docs-sync/references/repo-conventions.md),
   then runs the same four commands CI runs: `npm run lint`, `npm run check-types`,
   `npm run test -- --run`, `npm run build`. All four must pass.
6. It adds a changeset (`minor` for a new option or argument, `patch` for a fix), commits, pushes,
   and opens a PR whose body starts with `Closes #82` so the issue closes on merge. **It does not
   merge** — you review the PR as usual.

If you'd rather see the analysis without any code being written, run it and pick _Report only_ at
step 4.

#### Several issues open at once

Sequential issues share shas — issue N's `base` is usually issue N-1's `head` — so the skill offers
either to take the oldest first, or to collapse the whole backlog into one compare range and one PR
that closes all of them. It asks; it doesn't decide for you.

### Doing step 3 by hand

The same skill files are a plain checklist — read
[`SKILL.md`](./.claude/skills/imgproxy-docs-sync/SKILL.md) for the process and
[`references/repo-conventions.md`](./.claude/skills/imgproxy-docs-sync/references/repo-conventions.md)
for the conventions a new option module must follow. Keep both up to date when those conventions
change; they are the source of truth for the next sync, automated or not.

## Publication Workflow

The project uses [changesets](https://github.com/changesets/changesets) to manage versioning and changelog.
Typical workflow is as follow:

1. make changes to codebase,
2. run `npm run changesets` at project root and follow prompt to generate a "changeset" (logging a change),
3. commit both (1) and (2) into git.

The [changesets Github action](./.github/workflows/publish.yml) is triggered on `push` to `main` and will create a corresponding "Changesets: Versioning & Publication" pull request, which, upon merged, will trigger publication of the new version to NPM.
