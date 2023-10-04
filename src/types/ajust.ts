import type { Brightness } from "./brightness";
import type { Contrast } from "./contrast";
import type { Saturation } from "./saturation";

/**
 * *Ajust option*. **PRO feature.**
 *
 * This is a meta-option that defines the brightness, contrast, and saturation.
 * All arguments are optional and can be omitted to use their default values.
 *
 * *Brightness*.
 *
 * When set, imgproxy will adjust brightness of the resulting image.
 * `brightness` is an integer number ranging from -255 to 255.
 *
 * *Contrast*.
 *
 * When set, imgproxy will adjust the contrast of the resulting image.
 * `contrast` is a positive floating point number, where a value of 1 leaves the contrast unchanged.
 *
 * *Saturation*.
 *
 * When set, imgproxy will adjust saturation of the resulting image.
 * `saturation` is a positive floating-point number, where a value of 1 leaves the saturation unchanged.
 *
 * @example
 * {ajust: {brightness: 50, contrast: 1.5, saturation: 0.5}} - increase brightness by 50, increase contrast by 50%, decrease saturation by 50%
 * {ajust: {brightness: -50, contrast: 0.5, saturation: 5}} - decrease brightness by 50, decrease contrast by 50%, increase saturation by 400%
 * {ajust: {brightness: 50}} - increase brightness by 50, leave contrast and saturation unchanged
 * {ajust: {contrast: 2.5, saturation: 0.5}} - leave brightness unchanged, increase contrast by 150%, decrease saturation by 50%
 *
 * @default
 * - brightness: 0
 * - contrast: 1
 * - saturation: 1
 *
 * @see
 * - `ajust` https://docs.imgproxy.net/generating_the_url?id=adjust
 * - `brightness` https://docs.imgproxy.net/generating_the_url?id=brightness
 * - `contrast` https://docs.imgproxy.net/generating_the_url?id=contrast
 * - `saturation` https://docs.imgproxy.net/generating_the_url?id=saturation
 */
interface Ajust {
  brightness?: Brightness;
  contrast?: Contrast;
  saturation?: Saturation;
}

/**
 * *Ajust option*. **PRO feature.**
 *
 * To describe the Ajust option, you can use the keyword `ajust` or `aj`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=adjust
 */
interface AjustOptionsPartial {
  ajust?: Ajust;
  aj?: Ajust;
}

export { Ajust, AjustOptionsPartial };
