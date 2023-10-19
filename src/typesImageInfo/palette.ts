/**
 * *Palette option*
 *
 * @warning **Slow**. This option requires the image to be fully downloaded and processed.
 *
 * When colors is greater than zero, imgproxy will build and return the image’s
 * RGBA palette containing maximum colors colors.
 *
 * @note When colors is greater than zero, its value should be between 2 and 256.
 *
 * Response example:
 * {
 *  "palette": [
 *   { "R": 189, "G": 178, "B": 169, "A": 255 },
 *   { "R": 83, "G": 79, "B": 67, "A": 255 }
 *  ]
 * }
 *
 * @default 0
 *
 *
 * @see {@link https://docs.imgproxy.net/getting_the_image_info?id=palette | Palette imgproxy docs}
 */
type Palette = number;

/**
 * *Palette option*
 *
 * To describe the Palette option, you can use the keyword `palette` or `p`.
 *
 * @see https://docs.imgproxy.net/getting_the_image_info?id=palette
 */
interface PaletteImageInfoOptionsPartial {
  palette?: Palette;
  p?: Palette;
}

export { Palette, PaletteImageInfoOptionsPartial };
