/**
 * *Raw options*
 *
 * When set to `1`, `"t"` or `true`, imgproxy will respond with a raw unprocessed, and unchecked source image.
 *
 * @note If any value other than `1`, `"t"`, or `true` is passed, it will be recognized as `false`.
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
 * @default false
 *
 * @see
 * - {@link https://docs.imgproxy.net/generating_the_url?id=raw | raw option imgproxy docs}
 * - {@link https://docs.imgproxy.net/generating_the_url?id=skip-processing | skip processing option imgproxy docs}
 */
type Raw = 1 | "t" | true | false | string;

/**
 * *Raw options*
 *
 * To describe the Raw option, you can use the keyword `raw`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=raw
 */
interface RawOptionsPartial {
  raw?: Raw;
}

export { Raw, RawOptionsPartial };
