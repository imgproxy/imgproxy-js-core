/**
 * *Watermark shadow option*. **PRO feature**
 *
 * When set, imgproxy will add a shadow to the watermark
 * The value of this option defines the size of the mask imgproxy will use to blur the shadow.
 * The value can be an any positive number.
 *
 * @default disabled
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=watermark-shadow | watermark shadow option imgproxy docs}
 */
type WatermarkShadow = number;

/**
 * *Watermark shadow option*. **PRO feature**
 *
 * To describe the Watermark shadow option, you can use the keyword `watermark_shadow` or `wmsh`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=watermark-shadow
 */
interface WatermarkShadowOptionsPartial {
  watermark_shadow?: WatermarkShadow;
  wmsh?: WatermarkShadow;
}

export { WatermarkShadow, WatermarkShadowOptionsPartial };
