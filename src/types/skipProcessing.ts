/**
 * *Skip processing option*
 *
 * A list of formats that imgproxy shouldn’t process.
 *
 * @warning Processing can only be skipped when the requested format is the same as the source format.
 * Video thumbnail processing can’t be skipped.
 *
 * There are some differences between `raw` and `skip_processing` options:
 * - While the `skip_processing` option has some conditions to skip the processing,
 * the `raw` option allows to skip processing no matter what.
 * - With the `raw` option set, imgproxy doesn’t check the source image’s type,
 * resolution, and file size. Basically, the `raw` option allows streaming of any file type.
 * - With the `raw` option set, imgproxy won’t download the whole image to the memory.
 * Instead, it will stream the source image directly to the response lowering memory usage.
 * - The requests with the `raw` option set are not limited by the `IMGPROXY_WORKERS` config
 *
 * @default empty
 *
 * @see
 * - {@link https://docs.imgproxy.net/generating_the_url?id=skip-processing | skip processing option imgproxy docs}
 * - {@link https://docs.imgproxy.net/generating_the_url?id=raw | raw option imgproxy docs}
 */
type SkipProcessing = Array<
  | "jpg"
  | "png"
  | "webp"
  | "avif"
  | "gif"
  | "ico"
  | "svg"
  | "heic"
  | "bmp"
  | "tiff"
  | "pdf"
  | "mp4"
>;

/**
 * *Skip processing option*
 *
 * To describe the Skip Processing option, you can use the keyword `skip_processing` or `sp`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=skip-processing
 */
interface SkipProcessingOptionsPartial {
  skip_processing?: SkipProcessing;
  sp?: SkipProcessing;
}

export { SkipProcessing, SkipProcessingOptionsPartial };
