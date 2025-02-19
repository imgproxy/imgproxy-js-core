# @imgproxy/imgproxy-js-core

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
