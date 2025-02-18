---
"@imgproxy/imgproxy-js-core": patch
---

Fix handling of 0 values for the `adjust` option. Previously `contrast:0` was incorrectly coded as `contrast:` with default value 1
