---
"@imgproxy/imgproxy-js-core": minor
---

Add support for [blur_areas](https://docs.imgproxy.net/usage/processing#blur-areas) option (imgproxy Pro). When `sigma` is greater than `0`, imgproxy applies a Gaussian blur filter to the provided areas of the resulting image. The option accepts a `sigma` value and a list of `areas` with `left`, `top`, `width`, and `height` floats between `0` and `1`. The short form `ba` is also supported.
