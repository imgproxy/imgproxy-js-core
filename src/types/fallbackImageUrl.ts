/**
 * *Fallback image url option*. **PRO feature**
 *
 * Custom fallback image by specifying its URL. The value should be in the URL-safe Base64-encoded format.
 *
 * @default blank
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=fallback-image-url | fallback image url option imgproxy docs}
 */
type FallbackImageUrl = string;

/**
 * *Fallback image url option*. **PRO feature**
 *
 * To describe the Fallback Image Url option, you can use the keyword `fallback_image_url` or `fiu`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=fallback-image-url
 */
interface FallbackImageUrlOptionsPartial {
  fallback_image_url?: FallbackImageUrl;
  fiu?: FallbackImageUrl;
}

export { FallbackImageUrl, FallbackImageUrlOptionsPartial };
