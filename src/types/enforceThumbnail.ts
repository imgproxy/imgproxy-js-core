/**
 * *Enforce Thumbnail option*
 *
 * When set to `1`, `"t"` or `true` and the source image has an embedded thumbnail,
 * imgproxy will always use the embedded thumbnail instead of the main image.
 *
 * This is normally controlled by the IMGPROXY_ENFORCE_THUMBNAIL configuration
 * but this procesing option allows the configuration to be set for each request.
 *
 * @note If any value other than `1`, `"t"`, or `true` is passed, it will be recognized as `false`.
 *
 * @warning This option is only supported for images in AVIF (`.avif`) and HEIC (`.heic`) formats.
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url_advanced#enforce-thumbnail-option | enforce thumbnail option imgproxy docs}
 */
type EnforceThumbnail = 1 | "t" | true | false | string;

/**
 * *Enforce Thumbnail option*
 *
 * To describe the Enforce Thumbnail option, you can use the keyword `enforce_thumbnail` or `eth`.
 *
 * @see https://docs.imgproxy.net/generating_the_url_advanced#enforce-thumbnail-option
 */
interface EnforceThumbnailOptionsPartial {
  enforce_thumbnail?: EnforceThumbnail;
  eth?: EnforceThumbnail;
}

export { EnforceThumbnail, EnforceThumbnailOptionsPartial };
