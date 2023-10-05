interface FormatQualityType {
  format:
    | "png"
    | "jpg"
    | "webp"
    | "avif"
    | "gif"
    | "ico"
    | "svg"
    | "bmp"
    | "tiff"
    | "heic"
    | "pdf"
    | "mp4";
  quality: number;
}

/**
 * *Format quality option*
 *
 * Adds or redefines `IMGPROXY_FORMAT_QUALITY` values.
 *
 * @param {"png" | "jpg" | "webp" | "avif" | "gif" | "ico" | "svg" | "bmp" | "tiff"  | "heic" | "pdf" | "mp4"} format - image format
 * @param {number} quality - quality of the resulting image, as a percentage (from `1` to `100`)
 *
 * @example
 * {format_quality: [{format: "jpg", quality: 60}, {format: "webp", quality: 60}, {format: "png", quality: 75}]}
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=format-quality | format quality option imgproxy docs}
 */
type FormatQuality = FormatQualityType[];

/**
 * *Format quality option*
 *
 * To describe the Format quality option, you can use the keyword `format_quality` or `fq`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=format-quality
 */
interface FormatQualityOptionsPartial {
  format_quality?: FormatQuality;
  fq?: FormatQuality;
}

export { FormatQuality, FormatQualityOptionsPartial };
