/**
 * *Blur hash option*
 *
 * @warning **Slow**. This option requires the image to be fully downloaded and processed.
 *
 * When x_components and y_components are greater than zero, imgproxy will calculate
 * and return the image’s {@link https://blurha.sh/ | BlurHash}. x_components and y_components is the numbers of
 * horizontal and vertical components of BlurHash. The larger the numbers the more
 * "detailed” will be the BlurHash.
 *
 * @param {number} x_components - The number of horizontal components of BlurHash.
 * Available range: 0-9. Default: 0.
 * @param {number} y_components - The number of vertical components of BlurHash.
 * Available range: 0-9. Default: 0.
 *
 * Response example:
 * {
 *  "blurhash": "LLH-}fox0fRQ%Do}9as9_3%2M{S2"
 * }
 *
 * @default 0:0
 *
 *
 * @see
 * - {@link https://docs.imgproxy.net/getting_the_image_info?id=blurhash | BlurHash imgproxy docs}
 * - {@link https://blurha.sh/ | BlurHash}
 */
interface Blurhash {
  x_components: number;
  y_components: number;
}

/**
 * *Blur hash option*
 *
 * To describe the Blur hash option, you can use the keyword `blurhash` or `bh`.
 *
 * @see https://docs.imgproxy.net/getting_the_image_info?id=blurhash
 */
interface BHImageInfoOptionsPartial {
  blurhash?: Blurhash;
  bh?: Blurhash;
}

export { Blurhash, BHImageInfoOptionsPartial };
