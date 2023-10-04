/**
 * *Format option*
 *
 * Specifies the resulting image format. Alias for the extension part of the URL.
 * At the moment, imgproxy supports only the most popular image formats.
 * - `png` — Portable Network Graphics
 * - `jpg` — Joint Photographic Experts Group
 * - `webp` — WebP
 * - `avif` — AV1 Image File Format
 * - `gif` — Graphics Interchange Format
 * - `ico` — Microsoft icon
 * - `svg` — Scalable Vector Graphics
 * - `bmp` — Bitmap
 * - `tiff` — Tagged Image File Format
 * - `mp4` — MPEG-4
 *
 * @see
 * - `format` https://docs.imgproxy.net/generating_the_url?id=format
 * - Image formats support https://docs.imgproxy.net/image_formats_support
 */
type Format =
  | "png"
  | "jpg"
  | "webp"
  | "avif"
  | "gif"
  | "ico"
  | "svg"
  | "bmp"
  | "tiff"
  | "mp4";

/**
 * *Format option*
 *
 * To describe the Format option, you can use the keyword `format`, `f`, or `ext`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=format
 */
interface FormatOptionsPartial {
  format?: Format;
  f?: Format;
  ext?: Format;
}

export { Format, FormatOptionsPartial };
