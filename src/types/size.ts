import { Enlarge } from "./enlarge";
import { Extend } from "./extend";

/**
 * *Size option*
 * This is a meta-option that defines the `width`, `height`, `enlarge`, and `extend`.
 *
 * `width` (optional). The width of the resulting image. If not specified,
 * imgproxy will calculate it based on the `height` and the aspect ratio of the source image.
 *
 * `height` (optional). The height of the resulting image. If not specified,
 * imgproxy will calculate it based on the `width` and the aspect ratio of the source image.
 *
 * `enlarge` (optional). If set to `1`, `"t"`, or `true`, imgproxy will enlarge the resulting
 * image if the requested size is bigger than the size of the source image.
 *
 * `extend` (optional). imgproxy will extend the image to the size specified in `width` or `height` options by adding a transparent background.
 * - `extend` - `1 | "t" | true | false | string`
 * - `gravity` (optional) accepts values of types `Base gravity` or `FP Gravity`
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
 * @example
 * // change the size image to 300x200px
 * {size: {width: 300, height: 200}}
 *
 * // change the size image to 300x200px and enlarge it if the requested size is bigger than the size of the source image
 * {size: {width: 300, height: 200, enlarge: 1}}
 *
 * // change the size image to 300x200px and extend it if the requested size is bigger than the size of the source image
 * {size: {width: 300, height: 200, extend: 1}}
 *
 * // change the size image to 300x200px and extend the image from the focal point in the middle of the top edge if `width` or `height` options are set and the original image size is smaller than specified in the size
 * {size: {width: 300, height: 200, extend: {extend: 1, gravity: {type: "no"}}}}
 *
 * @see
 * - `size` https://docs.imgproxy.net/generating_the_url?id=size
 * - `width` https://docs.imgproxy.net/generating_the_url?id=width
 * - `height` https://docs.imgproxy.net/generating_the_url?id=height
 * - `enlarge` https://docs.imgproxy.net/generating_the_url?id=enlarge
 * - `extend` https://docs.imgproxy.net/generating_the_url?id=extend
 */
interface Size {
  width?: number;
  height?: number;
  enlarge?: Enlarge;
  extend?: Extend;
}

/**
 * *Size option*
 *
 * To describe the Size option, you can use the keyword `size` or `s`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=size
 */
interface SizeOptionsPartial {
  size?: Size;
  s?: Size;
}

export { Size, SizeOptionsPartial };
