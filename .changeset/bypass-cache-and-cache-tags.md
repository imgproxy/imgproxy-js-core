---
"@imgproxy/imgproxy-js-core": minor
---

Add support for [bypass_cache](https://docs.imgproxy.net/usage/processing#bypass-cache) and [cache_tags](https://docs.imgproxy.net/usage/processing#cache-tags) options (imgproxy Pro). When `bypass_cache` is set to `1`, `t` or `true`, imgproxy bypasses the internal cache and does all the processing and fetching from the source image. `cache_tags` accepts a list of strings that imgproxy adds to the cache entry and the response headers. Both options are supported in processing and image info URLs. The short forms `bc` and `ct` are also supported.
