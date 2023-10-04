/**
 * *Pixelate option*
 *
 * When set, imgproxy will apply the pixelate filter to the resulting image. The value defines individual pixel size.
 * The value can be an any positive number.
 *
 * @default disabled
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=pixelate
 */
type Pixelate = number;

/**
 * *Pixelate option*
 *
 * To describe the Pixelate option, you can use the keyword `pixelate` or `pix`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=pixelate
 */
interface PixelateOptionsPartial {
  pixelate?: Pixelate;
  pix?: Pixelate;
}

export { Pixelate, PixelateOptionsPartial };
