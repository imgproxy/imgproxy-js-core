/**
 * *ThumbHash option*
 *
 * @warning **Slow**. This option requires the image to be fully downloaded and processed.
 *
 * When set, imgproxy will calculate and return the image's
 * {@link https://evanw.github.io/thumbhash/ | ThumbHash}. ThumbHash is a compact
 * representation of an image that can be used to generate a placeholder while
 * the actual image is loading.
 *
 * @note If any value other than `1`, `"t"`, or `true` is passed, it will be recognized as `false`.
 *
 * Response example:
 * {
 *  "thumb_hash": "0BE7810C80365AF29266578A660CB7A6707A80867738A87804"
 * }
 *
 * @example
 * {thumb_hash: 1}
 *
 * @see
 * - {@link https://docs.imgproxy.net/usage/getting_info#thumb-hash | ThumbHash imgproxy docs}
 * - {@link https://evanw.github.io/thumbhash/ | ThumbHash}
 */
type ThumbHash = 1 | "t" | true | false | string;

/**
 * *ThumbHash option*
 *
 * To describe the ThumbHash option, you can use the keyword `thumb_hash` or `th`.
 *
 * @see https://docs.imgproxy.net/usage/getting_info#thumb-hash
 */
interface ThumbHashImageInfoOptionsPartial {
  thumb_hash?: ThumbHash;
  th?: ThumbHash;
}

export { ThumbHash, ThumbHashImageInfoOptionsPartial };
