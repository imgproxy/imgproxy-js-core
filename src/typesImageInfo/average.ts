/**
 * *Average color option*
 *
 * @warning **Slow**. This option requires the image to be fully downloaded and processed.
 *
 * @param {(number | boolean | string)} average - when set to 1`, `"t"` or `true`, imgproxy will calculate
 * and return the image’s average color. Default: false
 * @param {(number | boolean | string)} [ignore_transparent = true] - (optional) when set to `1`, `"t"` or `true`,
 * imgproxy will ignore fully transparent pixels. Default: true
 *
 * @note If any value other than `1`, `"t"`, or `true` is passed, it will be recognized as `false`.
 *
 * Response example:
 * {
 *   "average": { "R": 139, "G": 132, "B": 121, "A": 255 }
 * }
 *
 * @default false:true
 *
 *
 * @see {@link https://docs.imgproxy.net/getting_the_image_info?id=average | Average color imgproxy docs}
 */
interface Average {
  average: 1 | "t" | true | false | string;
  ignore_transparent?: 1 | "t" | true | false | string;
}

/**
 * *Average color option*
 *
 * To describe the Average color option, you can use the keyword `average` or `avg`.
 *
 * @see https://docs.imgproxy.net/getting_the_image_info?id=average
 */
interface AverageImageInfoOptionsPartial {
  average?: Average;
  avg?: Average;
}

export { Average, AverageImageInfoOptionsPartial };
