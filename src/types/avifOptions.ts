/**
 * Available AVIF subsample values:
 * - `"auto"` - (default) use subsampling when the image is saved with quality less than 90
 * - `"on"` - always apply subsampling
 * - `"off"` - never apply subsampling
 */
type AvifSubsampleOptions = "auto" | "on" | "off";

/**
 * *AVIF options*. **PRO feature**
 *
 * Allows redefining AVIF saving options.
 *
 * @default "auto"
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=avif-options | AVIF options imgproxy docs}
 */
type AvifOptions =
  | AvifSubsampleOptions
  | {
      /**
       * Controls when chroma subsampling is used. Default: `"auto"`
       */
      subsample: AvifSubsampleOptions;
    };

/**
 * *AVIF options option*. **PRO feature**
 *
 * To describe the AVIF options option, you can use the keyword `avif_options` or `avifo`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=avif-options
 */
interface AvifOptionsPartial {
  avif_options?: AvifOptions;
  avifo?: AvifOptions;
}

export { AvifOptions, AvifOptionsPartial };
