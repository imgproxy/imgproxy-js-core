---
"@imgproxy/imgproxy-js-core": patch
---

Fix `video_thumbnail_animation` generating URLs containing the literal string `undefined` when `frame_width` or `frame_height` was omitted. Both arguments are required by imgproxy and by the option's type, so they are now validated like `step`, `delay` and `frames`, and a missing value raises an error instead of producing a broken URL.

Fix `zoom` silently ignoring a `zoom` value of `0`. The option was dropped before validation, so no error was raised. imgproxy requires zoom factors to be greater than `0`, so `0` is now rejected for `zoom`, `zoom_x` and `zoom_y`. Note that this changes the error message for non-positive values from "can't be less than 0" to "can't be less or equal than 0".
