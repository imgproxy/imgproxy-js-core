/**
 * *Background alpha option*. **PRO feature.**
 *
 * Adds an alpha channel to background. The value of alpha is a positive floating point number between 0 and 1.
 *
 * @example
 * {background_alpha: 0.5} - background alpha 0.5
 *
 * @default 1
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=background-alpha
 */
type BackgroundAlpha = number;

/**
 * *Background alpha option*. **PRO feature.**
 *
 * To describe the Background alpha option, you can use the keyword `background_alpha` or `bga`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=background-alpha
 */
interface BackgroundAlphaOptionsPartial {
  background_alpha?: BackgroundAlpha;
  bga?: BackgroundAlpha;
}

export { BackgroundAlpha, BackgroundAlphaOptionsPartial };
