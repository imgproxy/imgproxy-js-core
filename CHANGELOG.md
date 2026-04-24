# @imgproxy/imgproxy-js-core

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
