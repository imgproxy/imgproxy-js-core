/**
 * *Cache buster option*
 *
 * Cache buster doesn’t affect image processing but its changing allows for bypassing the CDN,
 * proxy server and browser cache. Useful when you have changed some things that are not reflected in the URL,
 * like image quality settings, presets, or watermark data.
 *
 * It’s highly recommended to prefer the cachebuster option over a URL query string
 * because that option can be properly signed.
 *
 * @default empty
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=cache-buster | cache buster option imgproxy docs}
 */
type CacheBuster = string;

/**
 * *Cache buster option*
 *
 * To describe the Cache Buster option, you can use the keyword `cachebuster` or `cb`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=cache-buster
 */
interface CacheBusterOptionsPartial {
  cachebuster?: CacheBuster;
  cb?: CacheBuster;
}

export { CacheBuster, CacheBusterOptionsPartial };
