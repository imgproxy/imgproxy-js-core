/**
 * *Pages number option*
 *
 * When set to `1`, `"t"` or `true`, imgproxy will return the number of pages the image contains.
 * For animated images, it'll return the number of animation frames.
 *
 *
 * @note If any value other than `1`, `"t"`, or `true` is passed, it will be recognized as `false`.
 *
 * Response example:
 * {
 *   "pages_number": 10
 * }
 *
 * @default false
 *
 *
 * @see {@link https://docs.imgproxy.net/usage/getting_info?#pages-number | Pages number imgproxy docs}
 */
type NeedPagesNumber = 1 | "t" | true | false | string;

/**
 * *Pages number option*
 *
 * To describe the Pages number option, you can use the keyword `pages_number` or `pn`.
 *
 * @see https://docs.imgproxy.net/usage/getting_info?#pages-number
 */
interface PagesNumberInfoOptionsPartial {
  pages_number?: NeedPagesNumber;
  pn?: NeedPagesNumber;
}

export { NeedPagesNumber, PagesNumberInfoOptionsPartial };
