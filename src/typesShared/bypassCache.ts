/**
 * *Bypass cache option*
 *
 * When set to `1`, `"t"` or `true`, imgproxy will bypass the internal cache
 * and do all the processing and fetching from the source image.
 *
 * @note If any value other than `1`, `"t"`, or `true` is passed, it will be recognized as `false`.
 *
 * @warning Since this option allows bypassing the internal cache, its usage is not allowed
 * unless the `IMGPROXY_ALLOW_BYPASS_CACHE` config is set to `true`.
 *
 * @default false
 *
 * @see {@link https://docs.imgproxy.net/usage/processing#bypass-cache | bypass cache option imgproxy docs}
 */
type BypassCache = 1 | "t" | true | false | string;

/**
 * *Bypass cache option*
 *
 * To describe the Bypass Cache option, you can use the keyword `bypass_cache` or `bc`.
 *
 * @see https://docs.imgproxy.net/usage/processing#bypass-cache
 */
interface BypassCacheOptionsPartial {
  bypass_cache?: BypassCache;
  bc?: BypassCache;
}

export { BypassCache, BypassCacheOptionsPartial };
