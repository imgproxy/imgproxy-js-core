import { BaseGravity, FPGravity } from "./gravity";

/**
 * *Extend option*
 *
 * imgproxy will extend the image to the size specified in `width` or `height` options by adding a transparent background.
 * This feature can be useful when the final result is smaller than the size specified in `width` or `height` options
 * due to other transformations.
 * For example, when the original image is smaller than the size specified in `width` or `height` options,
 * or when the proportions of the original image do not match the size specified in `width` or `height` options and you have
 * set the `resize` option with the `fit` parameter, etc.
 *
 * @note If any value other than `1`, `"t"`, or `true` is passed, it will be recognized as `false`.
 *
 * @warning The `extend` option will only work in conjunction with `width` or `height` options.
 * If `width` or `height` options are not specified, the `extend` option will not have any effects.
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
 *   extend: "false",
 *   gravity: {
 *     type: "ce",
 *     x_offset: 0,
 *     y_offset: 0,
 *   },
 * }
 *
 * @example
 * // extend the image (if `width` or `height` options are set and the original image size is smaller than specified in the size)
 * {extend: 1}
 *
 * // extend the image from the focal point in the middle of the top edge (if `width` or `height` options are set and the original image size is smaller than specified in the size)
 * {extend: "t", gravity: {type: "no"}}
 *
 *
 * @see
 * - `extend` https://docs.imgproxy.net/generating_the_url?id=extend
 * - `gravity` https://docs.imgproxy.net/generating_the_url?id=gravity
 */
interface Extend {
  extend: 1 | "t" | true | false | string;
  gravity?: BaseGravity | FPGravity;
}

/**
 * *Extend option*
 *
 * To describe the Extend option, you can use the keyword `extend` or `ex`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=extend
 */
interface ExtendOptionsPartial {
  extend?: Extend;
  ex?: Extend;
}

export { Extend, ExtendOptionsPartial };
