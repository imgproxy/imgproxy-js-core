/**
 * *Strip metadata option*.
 *
 * When set to `1`, `"t"` or `true`, imgproxy will strip the metadata (EXIF, IPTC, etc.) on JPEG and WebP output images.
 *
 * This is normally controlled by the {@link https://docs.imgproxy.net/configuration?id=miscellaneous | IMGPROXY_STRIP_METADATA}
 * configuration but this procesing option allows the configuration to be set for each request.
 *
 * @note If any value other than `1`, `"t"`, or `true` is passed, it will be recognized as `false`.
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=strip-metadata | strip metadata option imgproxy docs}
 */
type StripMetadata = 1 | "t" | "true" | "false" | string;

/**
 * *Strip metadata option*.
 *
 * To describe the Strip metadata option, you can use the keyword `strip_metadata` or `sm`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=strip-metadata
 */
interface StripMetadataOptionsPartial {
  strip_metadata?: StripMetadata;
  sm?: StripMetadata;
}

export { StripMetadata, StripMetadataOptionsPartial };
