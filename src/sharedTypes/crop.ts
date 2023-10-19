import { Gravity } from "../types/gravity";

/**
 * *Crop option*
 *
 * Defines an area of the image to be processed (crop before resize).
 *
 * `width` and `height` define the size of the area:
 * - When `width` or `height` is greater than or equal to `1`, imgproxy treats it as an absolute value.
 * - When `width` or `height` is less than `1`, imgproxy treats it as a relative value.
 * - When `width` or `height` is set to `0`, imgproxy will use the full width/height of the source image.
 *
 * `gravity` (optional) accepts the same values as the `gravity` option.
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
 * *Smart gravity*.
 * libvips detects the most “interesting” section of the image and considers it as the center of the resulting image.
 * Offsets are not applicable here.
 * - `type`: `sm`
 *
 * *Object-oriented gravity*. **PRO feature.**
 * imgproxy detects objects of provided classes on the image and calculates the resulting image center using their positions.
 * If class names are omited, imgproxy will use all the detected objects.
 * - `type`: `obj`
 * - `class_names`: array of strings
 *
 * *FP gravity*.
 * The gravity focus point.
 * - type: `fp`
 * - `x` is floating point numbers between `0` and `1` that define the right/left coordinates of the center of the resulting image.
 * - `y` is floating point numbers between `0` and `1` that define the top/bottom coordinates of the center of the resulting image.
 *
 * @example
 * // crop 100x100px from the center of the image, default gravity is `gravity: {type: "ce", offset_x: 0, offset_y: 0}`
 * {crop: {width: 100, height: 100}}
 *
 * // crop 100x100px from the top edge of the image
 * {crop: {width: 100, height: 100, gravity: {type: "no"}}}
 *
 * // crop 100x100px from top right corner of the image and moved focal point 10px to the left and 20px down
 * {crop: {width: 100, height: 100, gravity: {type: "noea", offset_x: -10, offset_y: 20}}}
 *
 * // crop 100x100px from the center of the image using smart gravity
 * {crop: {width: 100, height: 100, gravity: {type: "sm"}}}
 *
 * // crop 100x100px from the center of the image using object-oriented gravity
 * {crop: {width: 100, height: 100, gravity: {type: "obj", class_names: ["face", "person"]}}}
 *
 * // crop 100x100px from the center of the image using FP gravity
 * {crop: {width: 100, height: 100, gravity: {type: "fp", x: 0.5, y: 0.5}}}
 *
 * @see
 * - `crop` - https://docs.imgproxy.net/generating_the_url?id=crop
 * - `gravity` - https://docs.imgproxy.net/generating_the_url?id=gravity
 */
interface Crop {
  width: number;
  height: number;
  gravity?: Gravity;
}

/**
 * *Crop option*
 *
 * To describe the Crop option, you can use the keyword `crop` or `c`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=crop
 */
interface CropOptionsPartial {
  crop?: Crop;
  c?: Crop;
}

export { Crop, CropOptionsPartial };
