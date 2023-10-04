/**
 * *Trim option*
 *
 * Removes surrounding background.
 *
 * - `threshold` - color similarity tolerance.
 * - `color` - (optional) a hex-coded value of the color that needs to be cut off.
 * - `equal_hor` - (optional) set to `1`, `t` or `true`, imgproxy will cut only equal parts from left and right sides.
 * That means that if 10px of background can be cut off from the left and 5px from the right, then 5px will be cut off from both sides.
 * For example, this can be useful if objects on your images are centered but have non-symmetrical shadow.
 * - `equal_ver` - (optional) acts like `equal_hor` but for top/bottom sides.
 *
 * @warning Trimming requires an image to be fully loaded into memory.
 * This disables scale-on-load and significantly increases memory usage and processing time. Use it carefully with large images.
 *
 * @note
 * - If you know background color of your images then setting it explicitly via color
 * will also save some resources because imgproxy won’t need to automatically detect it.
 * - Use a color value of `FF00FF` for trimming transparent backgrounds as imgproxy uses magenta as a transparency key.
 * - The trimming of animated images is not supported.
 * - In the `equal_hor` and `equal_ver` parameters, if any value other than `1`, `t`, or `true` is passed, it will be recognized as false.
 *
 * @example
 * //
 * {trim: {threshold: 10}}
 *
 * // Trim with a custom color
 * {trim: {threshold: 10, color: '00FF00'}}
 *
 * // Trim with equal_hor and equal_ver
 * {trim: {threshold: 10, equal_hor: 1, equal_ver: 1}}
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=trim
 */
interface Trim {
  threshold: number;
  color?: string;
  equal_hor?: 1 | "t" | true | false | string;
  equal_ver?: 1 | "t" | true | false | string;
}

/**
 * *Trim option*
 *
 * To describe the Trim option, you can use the keyword `trim` or `t`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=trim
 */
interface TrimOptionsPartial {
  trim?: Trim;
  t?: Trim;
}

export { Trim, TrimOptionsPartial };
