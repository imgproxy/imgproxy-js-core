---
"@imgproxy/imgproxy-js-core": patch
---

Fix optional arguments being checked for truthiness instead of presence in `resize`, `size`, `watermark`, `watermark_size`, `trim`, `unsharp_masking`, `png_options`, `jpeg_options`, `colorize`, `monochrome` and `gravity`. Falsy but invalid values (such as `null` or an empty `color`) skipped validation and were silently rendered as omitted arguments, so `{ watermark_size: { width: null, height: 100 } }` produced `wms::100` instead of raising. Such values now raise an error, and explicitly provided `0` values are rendered instead of being dropped. `colorize.color` and `monochrome.color` are now validated as hex colors, matching `trim.color` and `gradient.color`.

Also fix `jpeg_options` rejecting `progressive: false` when `optimize_scans` was set to `false`. The cross-check now applies only when `optimize_scans` is actually enabled.
