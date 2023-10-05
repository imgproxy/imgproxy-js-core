/**
 * * Watermark URL option*. **PRO feature**
 *
 * When set, imgproxy will use the image from the specified URL as a watermark.
 * The value should be in the URL-safe Base64-encoded format.
 *
 * @default blank
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=watermark-url | watermark URL option imgproxy docs}
 */
type WatermarkUrl = string;

/**
 * *Watermark URL option*. **PRO feature**
 *
 * To describe the Watermark URL option, you can use the keyword `watermark_url` or `wmu`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=watermark-url
 */
interface WatermarkUrlOptionsPartial {
  watermark_url?: WatermarkUrl;
  wmu?: WatermarkUrl;
}

export { WatermarkUrl, WatermarkUrlOptionsPartial };
