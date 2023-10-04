/**
 * *Contrast option*. **PRO feature.**
 *
 * When set, imgproxy will adjust the contrast of the resulting image.
 * `contrast` is a positive floating point number, where a value of 1 leaves the contrast unchanged.
 *
 * @example
 * {contrast: 0.5} - decrease contrast by 50%
 * {contrast: 1.5} - increase contrast by 50%
 * {contrast: 3} - increase contrast by 200%
 *
 * @default 1
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=contrast
 */
type Contrast = number;

/**
 * *Contrast option*. **PRO feature.**
 *
 * To describe the Contrast option, you can use the keyword `contrast` or `co`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=contrast
 */
interface ContrastOptionsPartial {
  contrast?: Contrast;
  co?: Contrast;
}

export { Contrast, ContrastOptionsPartial };
