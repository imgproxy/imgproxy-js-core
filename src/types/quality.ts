/**
 * *Quality option*
 *
 * Redefines quality of the resulting image, as a percentage.
 * When set to `0`, quality is assumed based on IMGPROXY_QUALITY and `format quality` option.
 * Available range - from `1` to `100`.
 *
 * @see
 * - {@link https://docs.imgproxy.net/generating_the_url?id=quality | quality option imgproxy docs}
 * - {@link https://docs.imgproxy.net/generating_the_url?id=format-quality | format quality option imgproxy docs}
 */
type Quality = number;

/**
 * *Quality option*
 *
 * To describe the Quality option, you can use the keyword `quality` or `q`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=quality
 */
interface QualityOptionsPartial {
  quality?: Quality;
  q?: Quality;
}

export { Quality, QualityOptionsPartial };
