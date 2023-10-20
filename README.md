<p align="center">
  <a href="https://imgproxy.net">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/imgproxy/imgproxy/master/assets/logo-dark.svg?sanitize=true">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/imgproxy/imgproxy/master/assets/logo-light.svg?sanitize=true">
      <img alt="imgproxy logo" src="https://raw.githubusercontent.com/imgproxy/imgproxy/master/assets/logo-light.svg?sanitize=true">
    </picture>
  </a>
</p>

---

**[imgproxy](https://github.com/imgproxy/imgproxy)** is a fast and secure standalone server for resizing and converting remote images. The main principles of imgproxy are simplicity, speed, and security. It is a Go application, ready to be installed and used in any Unix environment—also ready to be containerized using Docker.

imgproxy can be used to provide a fast and secure way to _get rid of all the image resizing code_ in your web application (like calling ImageMagick or GraphicsMagick, or using libraries), while also being able to resize everything on the fly on a separate server that only you control. imgproxy is fast, easy to use, and requires zero processing power or storage from the main application. imgproxy is indispensable when handling image resizing of epic proportions, especially when original images are coming from a remote source.

**This package is designed to be used as a part of framework-specific packages and plugins**

- [Install](#install)
- [Usage](#usage)
- [Methods](#methods)
- [Development](#development)

## Install

```bash
npm install imgproxy-js-core
```

## Usage

```ts
import { generateUrl } from "imgproxy-js-core";

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
