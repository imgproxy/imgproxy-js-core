# @imgproxy/imgproxy-js-core

## 1.9.0

### Minor Changes

- 020080d: Add support for [bypass_cache](https://docs.imgproxy.net/usage/processing#bypass-cache) and [cache_tags](https://docs.imgproxy.net/usage/processing#cache-tags) options (imgproxy Pro). When `bypass_cache` is set to `1`, `t` or `true`, imgproxy bypasses the internal cache and does all the processing and fetching from the source image. `cache_tags` accepts a list of strings that imgproxy adds to the cache entry and the response headers. Both options are supported in processing and image info URLs. The short forms `bc` and `ct` are also supported.
- 15b7801: Add support for five new options from the updated imgproxy Usage docs.

  Image info options (`generateImageInfoUrl`):

  - [classify](https://docs.imgproxy.net/usage/getting_info#classify) (`cl`) — `{classify: {top_k: 3}}` or `{cl: {top_k: 2, class_names: ["Bus", "Person"]}}`. When `top_k` is greater than zero, imgproxy classifies the image and returns the top K classes with the highest confidence scores. Class names are optional; if given, imgproxy classifies only those classes.
  - [thumb_hash](https://docs.imgproxy.net/usage/getting_info#thumb-hash) (`th`) — `{thumb_hash: 1}`. Returns the image's ThumbHash, a compact placeholder representation of the image.
  - [perceptual_hash](https://docs.imgproxy.net/usage/getting_info#perceptual-hash) (`phash`, `ph`) — `{perceptual_hash: 1}`. Returns the perceptual hash of the image, which can be used to find similar or duplicate images.

  Processing options (`generateUrl`):

  - [crop_objects](https://docs.imgproxy.net/usage/processing#crop-objects) (`c_obj`, imgproxy Pro) — `{crop_objects: {scale_factor: 1.2, class_names: ["face"]}}`. imgproxy detects objects of the provided classes and crops the image to fit all of them. `scale_factor` scales the crop area relative to the detected objects: `1.0` crops exactly to the objects, `1.2` adds 20% padding. Class names are optional; if omitted, imgproxy crops to all the detected objects.
  - [preserve_hdr](https://docs.imgproxy.net/usage/processing#preserve-hdr) (`ph`) — `{preserve_hdr: 1}`. When set to `1`, `t` or `true`, a high bit image remains high bit; when set to `0`, `f` or `false`, it is downscaled to 8 bit. Overrides the `IMGPROXY_PRESERVE_HDR` config value.

- 4f9ad1b: Make the `Gravity` union exclusive: fields belonging to one gravity variant are now typed as forbidden (`?: never`) on the others, so mixing fields from different variants (such as `{ type: "sm", x_offset: 0 }` or `{ type: "no", x: 0.5 }`) is a compile-time error for TypeScript users instead of only a runtime one. Runtime behavior is unchanged. TypeScript code that previously compiled while passing such invalid combinations will now fail to compile — the same combinations have always thrown at runtime.
- 183d037: Add support for [progressive_blur](https://docs.imgproxy.net/usage/processing#progressive-blur) option (imgproxy Pro). When `sigma` is greater than `0`, imgproxy applies a progressive Gaussian blur filter that transitions from no blur at the `start` position to the specified `sigma` at the `stop` position. The option accepts `sigma`, an optional `direction` (`down`, `up`, `right`, `left`, or an angle in degrees), and optional `start` and `stop` floats between `0` and `1`. The short form `pbl` is also supported.
- 043d0b3: Add support for [video_thumbnail_keyframes](https://docs.imgproxy.net/usage/processing#video-thumbnail-keyframes) option (imgproxy Pro). When set to `1`, `t` or `true`, imgproxy uses the latest keyframe before the requested second for video thumbnail generation, redefining the `IMGPROXY_VIDEO_THUMBNAIL_KEYFRAMES` config. The option is supported in processing and image info URLs. The short form `vtk` is also supported.

### Patch Changes

- 4f9ad1b: Fix optional arguments being checked for truthiness instead of presence in `resize`, `size`, `watermark`, `watermark_size`, `trim`, `unsharp_masking`, `png_options`, `jpeg_options`, `colorize`, `monochrome` and `gravity`. Falsy but invalid values (such as `null` or an empty `color`) skipped validation and were silently rendered as omitted arguments, so `{ watermark_size: { width: null, height: 100 } }` produced `wms::100` instead of raising. Such values now raise an error, and explicitly provided `0` values are rendered instead of being dropped. `colorize.color` and `monochrome.color` are now validated as hex colors, matching `trim.color` and `gradient.color`.

  Also fix `jpeg_options` rejecting `progressive: false` when `optimize_scans` was set to `false`. The cross-check now applies only when `optimize_scans` is actually enabled.

- c124469: Fix `video_thumbnail_animation` generating URLs containing the literal string `undefined` when `frame_width` or `frame_height` was omitted. Both arguments are required by imgproxy and by the option's type, so they are now validated like `step`, `delay` and `frames`, and a missing value raises an error instead of producing a broken URL.

  Fix `zoom` silently ignoring a `zoom` value of `0`. The option was dropped before validation, so no error was raised. imgproxy requires zoom factors to be greater than `0`, so `0` is now rejected for `zoom`, `zoom_x` and `zoom_y`. Note that this changes the error message for non-positive values from "can't be less than 0" to "can't be less or equal than 0".

- a97d0ef: Fix the `gradient` option dropping optional arguments explicitly set to `0`. `color`, `direction`, `start` and `stop` were checked for truthiness, so `{ gradient: { opacity: 0.5, stop: 0 } }` produced `gr:0.5` and imgproxy fell back to the default `stop` of `1.0` instead of the requested `0`. The same applied to `start: 0` and to a `direction` angle of `0`. These values are now rendered explicitly, and invalid falsy values (such as `null` or an empty `color`) are reported instead of being silently ignored.

## 1.8.0

### Minor Changes

- f547c4b: Add support for [blur_areas](https://docs.imgproxy.net/usage/processing#blur-areas) option (imgproxy Pro). When `sigma` is greater than `0`, imgproxy applies a Gaussian blur filter to the provided areas of the resulting image. The option accepts a `sigma` value and a list of `areas` with `left`, `top`, `width`, and `height` floats between `0` and `1`. The short form `ba` is also supported.
- f416250: Add support for the `canonical_names` parameter of the `exif` image-info option. The `exif` option now also accepts an object `{ enabled, canonical_names }`; when `canonical_names` is `1`, `"t"`, or `true`, imgproxy returns EXIF field names in a canonical form (e.g. `DateTimeOriginal`) instead of the human-readable form. The existing boolean-style input is still supported.
- 887dd39: Add support for SEO-friendly filenames in generated URLs. The `URL` object passed to `generateUrl()` and `generateImageInfoUrl()` now accepts an optional `filename` field, which is appended to `base64` and `encrypted` URLs (see [`IMGPROXY_BASE64_URL_INCLUDES_FILENAME`](https://docs.imgproxy.net/configuration/options#source-image-urls)). Thanks @YoannMa!

## 1.7.0

### Minor Changes

- ee3bf50: Add [flip](https://docs.imgproxy.net/latest/usage/processing#flip) option support
- a8fed05: Add [avifo](https://docs.imgproxy.net/latest/usage/processing#avif-options) option support

## 1.6.0

### Minor Changes

- 0cdb756: Add `page_number` option to generateImageInfoUrl(). Thanks @Elio-Swello

## 1.5.0

### Minor Changes

- 6f9bcd0: Add `color_profile` option support

## 1.4.0

### Minor Changes

- 6fc690b: Add support for [max_result_dimension](https://docs.imgproxy.net/latest/usage/processing#max-result-dimension) option
- 803368a: Add support for `preset` param to [webp option](https://docs.imgproxy.net/latest/usage/processing#webp-options)
- f706da3: Add [crop_aspect_ratio](https://docs.imgproxy.net/latest/usage/processing#crop-aspect-ratio) option

### Patch Changes

- 0ab711a: Fix typo in error messages: "then" -> "than"
- 6bc44e8: Add pdf and jxl to [format](https://docs.imgproxy.net/usage/processing#format) option

## 1.3.0

### Minor Changes

- 1cc5d45: Add [Calc hashsums](https://docs.imgproxy.net/usage/getting_info#calc-hashsums) info option
- 3f7b58e: Add support for [colorize](https://docs.imgproxy.net/usage/processing#colorize) option
- e16c19e: Add [monochrome](https://docs.imgproxy.net/usage/processing#monochrome) and [duotone](https://docs.imgproxy.net/usage/processing#duotone) options
- 3179557: Add support for numeric direction value in [gradient](https://docs.imgproxy.net/usage/processing#gradient) option
- 1beb7e1: Add [Video thumbnail tile](https://docs.imgproxy.net/usage/processing#video-thumbnail-tile) option

## 1.2.0

### Minor Changes

- df3940d: - Add `ch` (chessboard order) position to `watermark` option.
  - Add `watermark_rotate` option.
- d1a2acf: Add support for `onlyPresets` setting to generate [presets-only urls](https://docs.imgproxy.net/usage/presets#only-presets)
- c11cdad: Add `smart_subsample` to `webp_options`
- db5b6e8: Add support for [video_thumbnail_animation property](https://docs.imgproxy.net/usage/processing#video-thumbnail-animation)
- a00418c: Add support for objw mode for [gravity option](https://docs.imgproxy.net/usage/processing#gravity)

## 1.1.0

### Minor Changes

- ff6f48e: Add support for [objects_position](https://docs.imgproxy.net/usage/processing#objects-position) url option

### Patch Changes

- fdbe7d0: Add a validation rule that `unsharpMasking.weight` should be greater than 0
- fdbe7d0: Fix handling of 0 values for the `adjust` option. Previously `contrast:0` was incorrectly coded as `contrast:` with default value 1
- 2807d74: Fix typo in `adjust` option: Rename `ajust` to `adjust` and its shorthand counterpart `aj` to `a`
- fdbe7d0: Make sure that 0 is treated the same for short and long option names
- c885b5c: Fix padding option to not omit `0` values when serializing to imgproxy URL. Thanks @sevrai!
- 0f7023b: Add `types` field to package.json exports map. Fixes typescript not being able to import types. Thanks @stefanprobst!
- fdbe7d0: Fix handling of 0 values for `autoquality` option
