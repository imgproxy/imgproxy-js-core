/**
 * *Width option*
 *
 * Defines the width of the resulting image.
 * When set to `0`, imgproxy will calculate width using the defined height and source aspect ratio.
 * When set to `0` and resizing type is `force`, imgproxy will keep the original width.
 *
 * @default 0
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=width
 */
type Width = number;

/**
 * *Width option*
 *
 * To describe the Width option, you can use the keyword `width` or `w`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=width
 */
interface WidthOptionsPartial {
  width?: Width;
  w?: Width;
}

export { Width, WidthOptionsPartial };
