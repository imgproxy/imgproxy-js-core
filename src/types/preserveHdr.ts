/**
 * *Preserve HDR option*
 *
 * If set to `1`, `"t"` or `true`, a high bit image will
 * {@link https://docs.imgproxy.net/image_formats_support#colorspace-and-hdr-preservation | remain high bit}.
 * If set to `0`, `"f"` or `false`, a high bit image will be downscaled to 8 bit.
 *
 * Overrides the {@link https://docs.imgproxy.net/configuration/options#IMGPROXY_PRESERVE_HDR | IMGPROXY_PRESERVE_HDR}
 * configuration value.
 *
 * @note If any value other than `1`, `"t"`, or `true` is passed, it will be recognized as `false`.
 *
 * @default the `IMGPROXY_PRESERVE_HDR` value
 *
 * @example
 * {preserve_hdr: 1}
 *
 * @see {@link https://docs.imgproxy.net/usage/processing#preserve-hdr | preserve HDR option imgproxy docs}
 */
type PreserveHDR = 1 | "t" | true | false | string;

/**
 * *Preserve HDR option*
 *
 * To describe the Preserve HDR option, you can use the keyword `preserve_hdr` or `ph`.
 *
 * @see https://docs.imgproxy.net/usage/processing#preserve-hdr
 */
interface PreserveHDROptionsPartial {
  preserve_hdr?: PreserveHDR;
  ph?: PreserveHDR;
}

export { PreserveHDR, PreserveHDROptionsPartial };
