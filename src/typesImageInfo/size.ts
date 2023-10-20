/**
 * *Size option*
 *
 * When set to `1`, `"t"` or `true`, imgproxy will return the size of the image file.
 * If the source URL is an HTTP(s) URL, imgproxy will determine the file size based on the Content-Length HTTP header.
 *
 * @note If any value other than `1`, `"t"`, or `true` is passed, it will be recognized as `false`.
 *
 * Response example:
 * {
 * "size": 123456
 * }
 *
 * @default true
 *
 *
 * @see {@link https://docs.imgproxy.net/getting_the_image_info?id=size | Size imgproxy docs}
 */
type NeedSize = 1 | "t" | true | false | string;

/**
 * *Size option*
 *
 * To describe the Size option, you can use the keyword `size` or `s`.
 *
 * @see https://docs.imgproxy.net/getting_the_image_info?id=size
 */
interface SizeImageInfoOptionsPartial {
  size?: NeedSize;
  s?: NeedSize;
}

export { NeedSize, SizeImageInfoOptionsPartial };
