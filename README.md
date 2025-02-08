<p align="center">
  <a href="https://imgproxy.net">
    <picture>
     <picture>
      <source media="(prefers-color-scheme: dark)" srcset="assets/imgproxy-js-core-dark.svg?sanitize=true">
      <source media="(prefers-color-scheme: light)" srcset="assets/imgproxy-js-core-light.svg?sanitize=true">
      <img alt="imgproxy-nodejs logo" src="assets/imgproxy-js-core-light.svg?sanitize=true">
    </picture>
  </a>
</p>

<h4 align="center">
  <a href="https://imgproxy.net">Website</a> |
  <a href="https://imgproxy.net/blog/">Blog</a> |
  <a href="https://docs.imgproxy.net">Documentation</a> |
  <a href="https://imgproxy.net/#pro">imgproxy Pro</a> |
  <a href="https://hub.docker.com/r/darthsim/imgproxy/">Docker</a> |
  <a href="https://twitter.com/imgproxy_net">Twitter</a> |
  <a href="https://discord.gg/5GgpXgtC9u">Discord</a>
</h4>

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

## Publication Workflow

The project uses [changesets](https://github.com/changesets/changesets) to manage versioning and changelog.
Typical workflow is as follow:

1. make changes to codebase,
2. run `npm run changesets` at project root and follow prompt to generate a "changeset" (logging a change),
3. commit both (1) and (2) into git.

The [changesets Github action](./.github/workflows/publish.yml) is triggered on `push` to `main` and will create a corresponding "Changesets: Versioning & Publication" pull request, which, upon merged, will trigger publication of the new version to NPM.
