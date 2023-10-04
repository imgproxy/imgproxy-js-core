/**
 * *Sharpen option*
 *
 * When set, imgproxy will apply the sharpen filter to the resulting image.
 * The value of sigma defines the size of the mask imgproxy will use.
 *
 * As an approximate guideline, use
 * - 0.5 for 4 pixels/mm (display resolution),
 * - 1.0 for 12 pixels/mm,
 * - 1.5 for 16 pixels/mm (300 dpi == 12 pixels/mm).
 *
 * @default disabled
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=sharpen
 */
type Sharpen = number;

/**
 * *Sharpen option*
 *
 * To describe the Sharpen option, you can use the keyword `sharpen` or `sh`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=sharpen
 */
interface SharpenOptionsPartial {
  sharpen?: Sharpen;
  sh?: Sharpen;
}

export { Sharpen, SharpenOptionsPartial };
