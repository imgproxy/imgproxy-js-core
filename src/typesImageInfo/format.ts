/**
 * *Format option*
 *
 * When set to `1`, `"t"` or `true`,  imgproxy will return the image format.
 *
 * @note If any value other than `1`, `"t"`, or `true` is passed, it will be recognized as `false`.
 * For video files, imgproxy returns a list of predicted formats divided by comma.
 *
 * Response example:
 * {
 * "format": "jpeg"
 * }
 *
 * @default true
 *
 * @see {@link https://docs.imgproxy.net/getting_the_image_info?id=format | Format imgproxy docs}
 */
type Format = 1 | "t" | true | false | string;

/**
 * *Format option*
 *
 * To describe the Format option, you can use the keyword `format` or `f`.
 *
 * @see https://docs.imgproxy.net/getting_the_image_info?id=format
 */
interface FormatImageInfoOptionsPartial {
  format?: Format;
  f?: Format;
}

export { Format, FormatImageInfoOptionsPartial };
