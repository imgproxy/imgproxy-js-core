---
"@imgproxy/imgproxy-js-core": minor
---

Add support for SEO-friendly filenames in generated URLs. The `URL` object passed to `generateUrl()` and `generateImageInfoUrl()` now accepts an optional `filename` field, which is appended to `base64` and `encrypted` URLs (see [`IMGPROXY_BASE64_URL_INCLUDES_FILENAME`](https://docs.imgproxy.net/configuration/options#source-image-urls)). Thanks @YoannMa!
