---
"@imgproxy/imgproxy-js-core": patch
---

Fix the `gradient` option dropping optional arguments explicitly set to `0`. `color`, `direction`, `start` and `stop` were checked for truthiness, so `{ gradient: { opacity: 0.5, stop: 0 } }` produced `gr:0.5` and imgproxy fell back to the default `stop` of `1.0` instead of the requested `0`. The same applied to `start: 0` and to a `direction` angle of `0`. These values are now rendered explicitly, and invalid falsy values (such as `null` or an empty `color`) are reported instead of being silently ignored.
