/**
 * *Enlarge option*
 *
 * When set to `1`, `t` or `true`, imgproxy will enlarge the image if it is smaller than the given size.
 *
 * @note If any value other than `1`, `t`, or `true` is passed, it will be recognized as `false`.
 *
 * @warning The `enlarge` option will only work in conjunction with `width` or `height` options.
 * If `width` or `height` options are not specified, the `enlarge` option will not have any effects.
 *
 * @default false
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=enlarge
 */
type Enlarge = 1 | "t" | true | false | string;

/**
 * *Enlarge option*
 *
 * To describe the Enlarge option, you can use the keyword `enlarge` or `el`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=enlarge
 */
interface EnlargeOptionsPartial {
  enlarge?: Enlarge;
  el?: Enlarge;
}

export { Enlarge, EnlargeOptionsPartial };
