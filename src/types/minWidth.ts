/**
 * *Min width option*
 *
 * Defines the minimum width of the resulting image.
 *
 * @warning When both `width` and `min-width` are set, the final image will be cropped according to `width`,
 * so use this combination with care.
 *
 * @default 0
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=min-width
 */
type MinWidth = number;

/**
 * *Min width option*
 *
 * To describe the Min width option, you can use the keyword `min_width` or `mw`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=min-width
 */
interface MinWidthOptionsPartial {
  min_width?: MinWidth;
  mw?: MinWidth;
}

export { MinWidth, MinWidthOptionsPartial };
