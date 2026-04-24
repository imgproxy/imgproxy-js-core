---
"@imgproxy/imgproxy-js-core": minor
---

Add support for the `canonical_names` parameter of the `exif` image-info option. The `exif` option now also accepts an object `{ enabled, canonical_names }`; when `canonical_names` is `1`, `"t"`, or `true`, imgproxy returns EXIF field names in a canonical form (e.g. `DateTimeOriginal`) instead of the human-readable form. The existing boolean-style input is still supported.
