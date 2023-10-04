import { BaseGravity, FPGravity } from "./gravity";

/**
 * *Extend aspect ratio option*
 *
 * imgproxy will extend the image to the aspect ratio calculated based on the dimensions specified
 * in the `width` or `height` options, adding a transparent background.
 *
 * @note If any value other than `1`, `t`, or `true` is passed, it will be recognized as `false`.
 *
 * @warning The `extendAspectRatio` option will only work in conjunction with `width` or `height` options.
 * If `width` or `height` options are not specified, the `extendAspectRatio` option will not have any effects.
 *
 * `gravity` (optional) accepts values of types `Base gravity` or `FP Gravity`
 *
 * *Base gravity*.
 * - `type`.
 * - `x_offset` (optional). The horizontal offset of the focal point from the type value.
 * - `y_offset` (optional). The vertical offset of the focal point from the type value.
 *
 * Available type values:
 * - `no`: north (top edge)
 * - `so`: south (bottom edge)
 * - `ea`: east (right edge)
 * - `we`: west (left edge)
 * - `noea`: north-east (top-right corner)
 * - `nowe`: north-west (top-left corner)
 * - `soea`: south-east (bottom-right corner)
 * - `sowe`: south-west (bottom-left corner)
 * - `ce`: center (default value)
 *
 * *FP gravity*.
 * The gravity focus point.
 * - type: `fp`
 * - `x` is floating point numbers between `0` and `1` that define the right/left coordinates of the center of the resulting image.
 * - `y` is floating point numbers between `0` and `1` that define the top/bottom coordinates of the center of the resulting image.
 *
 * @default
 * {
 *   extendAspectRatio: "false",
 *   gravity: {
 *     type: "ce",
 *     x_offset: 0,
 *     y_offset: 0,
 *   },
 * }
 *
 * @example
 * // extend the image (if `width` or `height` options are set and the original aspect ratio is smaller than calculated by the size)
 * {extendAspectRatio: true}
 *
 * // extend the image from the focal point in the middle of the top edge (if `width` or `height` options are set and the original aspect ratio is smaller than calculated by the size)
 * {extendAspectRatio: 1, gravity: {type: "no"}}
 *
 * @see
 * - `extendAspectRatio` https://docs.imgproxy.net/generating_the_url?id=extend-aspect-ratio
 * - `gravity` https://docs.imgproxy.net/generating_the_url?id=gravity
 */
interface ExtendAspectRatio {
  extend: 1 | "t" | true | false | string;
  gravity?: BaseGravity | FPGravity;
}

/**
 * *Extend aspect ratio option*
 *
 * To describe the Extend aspect ratio option, you can use the keyword `extend_aspect_ratio`, `extend_ar`, or `exar`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=extend-aspect-ratio
 */
interface ExtendAspectRatioOptionsPartial {
  extend_aspect_ratio?: ExtendAspectRatio;
  extend_ar?: ExtendAspectRatio;
  exar?: ExtendAspectRatio;
}

export { ExtendAspectRatio, ExtendAspectRatioOptionsPartial };
