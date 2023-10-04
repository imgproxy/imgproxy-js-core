/**
 * *Saturation option*. **PRO feature.**
 *
 * When set, imgproxy will adjust saturation of the resulting image.
 * `saturation` is a positive floating-point number, where a value of 1 leaves the saturation unchanged.
 *
 * @example
 * {saturation: 0.5} - decrease saturation by 50%
 * {saturation: 1.5} - increase saturation by 50%
 * {saturation: 5} - increase saturation by 400%
 *
 * @default 1
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=saturation
 */
type Saturation = number;

/**
 * *Saturation option*. **PRO feature.**
 *
 * To describe the Saturation option, you can use the keyword `saturation` or `sa`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=saturation
 */
interface SaturationOptionsPartial {
  saturation?: Saturation;
  sa?: Saturation;
}

export { Saturation, SaturationOptionsPartial };
