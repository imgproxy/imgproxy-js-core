/**
 * *Auto rotate option*
 *
 * When set to `1`, `"t"` or `true`, imgproxy will automatically rotate images based on the EXIF Orientation parameter
 * (if available in the image meta data). The orientation tag will be removed from the image in all cases.
 * Normally this is controlled by the `IMGPROXY_AUTO_ROTATE` configuration
 * but this procesing option allows the configuration to be set for each request.
 *
 * @note If any value other than `1`, `"t"`, or `true` is passed, it will be recognized as `false`.
 *
 * @see
 * - `Auto rotate` https://docs.imgproxy.net/generating_the_url?id=auto-rotate
 * - `IMGPROXY_AUTO_ROTATE` https://docs.imgproxy.net/configuration?id=miscellaneous
 */
type AutoRotate = 1 | "t" | true | false | string;

/**
 * *Auto rotate option*
 *
 * To describe the Auto rotate option, you can use the keyword `auto_rotate` or `ar`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=auto-rotate
 */
interface AutoRotateOptionsPartial {
  auto_rotate?: AutoRotate;
  ar?: AutoRotate;
}

export { AutoRotate, AutoRotateOptionsPartial };
