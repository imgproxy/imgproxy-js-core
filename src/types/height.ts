/**
 * *Height option*
 *
 * Defines the height of the resulting image.
 * When set to `0`, imgproxy will calculate resulting height using the defined width and source aspect ratio.
 * When set to `0` and resizing type is `force`, imgproxy will keep the original height.
 *
 * @default 0
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=height
 */
type Height = number;

/**
 * *Height option*
 *
 * To describe the Height option, you can use the keyword `height` or `h`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=height
 */
interface HeightOptionsPartial {
  height?: Height;
  h?: Height;
}

export { Height, HeightOptionsPartial };
