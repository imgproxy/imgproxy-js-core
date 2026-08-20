---
"@imgproxy/imgproxy-js-core": minor
---

Add support for [progressive_blur](https://docs.imgproxy.net/usage/processing#progressive-blur) option (imgproxy Pro). When `sigma` is greater than `0`, imgproxy applies a progressive Gaussian blur filter that transitions from no blur at the `start` position to the specified `sigma` at the `stop` position. The option accepts `sigma`, an optional `direction` (`down`, `up`, `right`, `left`, or an angle in degrees), and optional `start` and `stop` floats between `0` and `1`. The short form `pbl` is also supported.
