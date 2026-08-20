/**
 * *Cache tags option*
 *
 * Defines a list of tags that imgproxy will add to the cache entry and the response headers.
 * Use the `IMGPROXY_CACHE_TAGS_FORMAT` config to change the format of the cache tags
 * in the response headers.
 *
 * @default empty
 *
 * @see {@link https://docs.imgproxy.net/usage/processing#cache-tags | cache tags option imgproxy docs}
 */
type CacheTags = string[];

/**
 * *Cache tags option*
 *
 * To describe the Cache Tags option, you can use the keyword `cache_tags` or `ct`.
 *
 * @see https://docs.imgproxy.net/usage/processing#cache-tags
 */
interface CacheTagsOptionsPartial {
  cache_tags?: CacheTags;
  ct?: CacheTags;
}

export { CacheTags, CacheTagsOptionsPartial };
