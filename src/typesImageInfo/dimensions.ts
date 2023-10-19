/**
 * *Dimensions option*
 *
 * When set to `1`, `"t"` or `true`, imgproxy will return the image dimensions.
 *
 * @note If any value other than `1`, `"t"`, or `true` is passed, it will be recognized as `false`.
 *
 * Response example:
 * {
 * "width": 7360,
 * "height": 4912
 * }
 *
 * @default true
 *
 *
 * @see {@link https://docs.imgproxy.net/getting_the_image_info?id=dimensions | Dimensions imgproxy docs}
 */
type Dimensions = 1 | "t" | true | false | string;

/**
 * *Dimensions option*
 *
 * To describe the Dimensions option, you can use the keyword `dimensions` or `d`.
 *
 * @see https://docs.imgproxy.net/getting_the_image_info?id=dimensions
 */
interface DimensionsImageInfoOptionsPartial {
  dimensions?: Dimensions;
  d?: Dimensions;
}

export { Dimensions, DimensionsImageInfoOptionsPartial };
