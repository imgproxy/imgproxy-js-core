import { Extend } from "./extend";
import { Enlarge } from "./enlarge";
import { ResizingType } from "./resizingType";
/**
 * *Resize option*
 * This is a meta-option that defines the `resizing_type`, `width`, `height`, `enlarge`, and `extend`.
 *
 * `resizing_type` (optional). Defines how imgproxy will resize the source image. Supported resizing types are:
 *
 * - `fit`: resizes the image while keeping aspect ratio to fit a given size. (**default value**)
 * - `fill`: resizes the image while keeping aspect ratio to fill a given size and crops projecting parts.
 * - `fill-down`: the same as fill, but if the resized image is smaller than the requested size,
 * imgproxy will crop the result to keep the requested aspect ratio.
 * - `force`: resizes the image without keeping the aspect ratio.
 * - `auto`: if both source and resulting dimensions have the same orientation (portrait or landscape),
 * imgproxy will use fill. Otherwise, it will use fit.
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
 * // resize the image to 300x200px using the fit resizing type
 * {resize: {width: 300, height: 200}}
 *
 * // resize the image to 300x200px using the fill resizing type
 * {resize: {width: 300, height: 200, resizing_type: "fill"}}
 *
 * // resize the image to 300x200px using the fill resizing type and enlarge it if the requested size is bigger than the size of the source image
 * {resize: {width: 300, height: 200, resizing_type: "fill", enlarge: 1}}
 *
 * // resize the image to 300x200px using the fill resizing type and extend it if the requested size is bigger than the size of the source image
 * {resize: {width: 300, height: 200, resizing_type: "fill", extend: {extend: 1}}}
 *
 * @see
 * - `resize` https://docs.imgproxy.net/generating_the_url?id=resize
 * - `resizing_type` https://docs.imgproxy.net/generating_the_url?id=resizing-type
 * - `enlarge` https://docs.imgproxy.net/generating_the_url?id=enlarge
 * - `extend` https://docs.imgproxy.net/generating_the_url?id=extend
 */
interface Resize {
  resizing_type?: ResizingType;
  width?: number;
  height?: number;
  enlarge?: Enlarge;
  extend?: Extend;
}

/**
 * *Resize option*
 *
 * To describe the Resize option, you can use the keyword `resize` or `rs`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=resize
 */
interface ResizeOptionsPartial {
  resize?: Resize;
  rs?: Resize;
}

export { Resize, ResizeOptionsPartial };
