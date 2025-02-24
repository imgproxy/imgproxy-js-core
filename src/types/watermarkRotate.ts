/**
 * *Watermark rotate option*. **PRO feature**
 *
 * Rotates the watermark on the specified angle (clockwise).
 * The orientation from the image metadata is applied before the rotation.
 *
 * @default 0
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=watermark-rotate | watermark rotate option imgproxy docs}
 */
type WatermarkRotate = number;

/**
 * *Watermark rotate*. **PRO feature**
 *
 * To describe the Watermark rotate option, you can use the keyword `watermark_rotate`, `wm_rot`, or `wmr`.
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=watermark-rotate | watermark rotate option imgproxy docs}
 */
interface WatermarkRotateOptionsPartial {
  watermark_rotate?: WatermarkRotate;
  wm_rot?: WatermarkRotate;
  wmr?: WatermarkRotate;
}

export { WatermarkRotate, WatermarkRotateOptionsPartial };
