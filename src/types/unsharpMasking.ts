/**
 * *Unsharp masking option*. **PRO feature**
 *
 * Allows redefining unsharp masking options.
 *
 * - `mode` (optional) - controls when unsharp masking should be applied.
 * - `weight` (optional) - a floating-point number that defines how neighboring pixels will affect the current pixel.
 * The greater the value, the sharper the image. This value should be greater than zero. Default: `1`.
 * - `divider` (optional) - a floating-point number that defines unsharp masking strength.
 * The lesser the value, the sharper the image. This value be greater than zero. Default: `24`
 *
 * The following modes are supported:
 * - `auto`: (default) apply unsharp masking only when an image is downscaled and the sharpen option has not been set.
 * - `none`: unsharp masking is not applied.
 * - `always`: always applies unsharp masking.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=unsharp-masking
 */
interface UnsharpMasking {
  mode?: "auto" | "none" | "always";
  weight?: number;
  divider?: number;
}

/**
 * *Unsharp masking option*. **PRO feature**
 *
 * To describe the Unsharp masking option, you can use the keyword `unsharp` or `ush`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=unsharp-masking
 */
interface UnsharpMaskingOptionsPartial {
  unsharp_masking?: UnsharpMasking;
  ush?: UnsharpMasking;
}

export { UnsharpMasking, UnsharpMaskingOptionsPartial };
