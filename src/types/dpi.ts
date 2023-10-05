/**
 * *DPI option*. **PRO feature**
 *
 * When set, imgproxy will replace the image’s DPI metadata with the provided value.
 * When set to `0`, imgproxy won’t change the image’s DPI or will reset it to the default value
 * if the image’s metadata should be stripped.
 *
 * @warning This processing option takes effect whether imgproxy should strip the image’s metadata or not.
 *
 * @default 0
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=dpi | DPI option imgproxy docs}
 */
type DPI = number;

/**
 * *DPI option*. **PRO feature**
 *
 * To describe the DPI option, you can use the keyword `dpi` or `d`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=dpi
 */
interface DPIOptionsPartial {
  dpi?: DPI;
}

export { DPI, DPIOptionsPartial };
