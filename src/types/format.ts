/**
 * *Format option*
 *
 * Specifies the resulting image format. Alias for the extension part of the URL.
 * At the moment, imgproxy supports only the most popular image formats.
 * - `png` — Portable Network Graphics
 * - `jpg` — Joint Photographic Experts Group
 * - `jxl` — JPEG XL
 * - `webp` — WebP
 * - `avif` — AV1 Image File Format
 * - `gif` — Graphics Interchange Format
 * - `ico` — Microsoft icon
 * - `svg` — Scalable Vector Graphics
 * - `bmp` — Bitmap
 * - `tiff` — Tagged Image File Format
 * - `mp4` — **PRO feature** MPEG-4
 * - `pdf` — **PRO feature** PDF document
 * - `best` — **PRO feature** to make imgproxy pick the best format for the
 * resultant image. Check out the {@link https://docs.imgproxy.net/best_format | Best format guide}
 * to learn more.
 *
 * @see
 * - {@link https://docs.imgproxy.net/generating_the_url?id=format | format option imgproxy docs}
 * - {@link https://docs.imgproxy.net/image_formats_support | image formats support imgproxy docs}
 * - {@link https://docs.imgproxy.net/best_format | Best format guide}
 */
type Format =
  | "png"
  | "jpg"
  | "jxl"
  | "webp"
  | "avif"
  | "gif"
  | "ico"
  | "svg"
  | "bmp"
  | "tiff"
  | "mp4"
  | "pdf"
  | "best";

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
