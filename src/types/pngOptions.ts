/**
 * *PNG options*. **PRO feature**
 *
 * Allows redefining PNG saving options. All arguments are optional and can be omitted.
 *
 * @param {boolean} [interlaced=false] - (optional) enables interlaced PNG compression. Default: `false`.
 * @param {boolean} [quantize=false] - (optional) enables PNG quantanization.
 * libvips should be built with {@link https://github.com/DarthSim/quantizr | Quantizr} or libimagequant support.
 * Default: `false`.
 * @param {number} [quantization_colors=256] - (optional) maximum number of quantization palette entries.
 * Should be between 2 and 256. Default: `256`.
 *
 * @example
 * // Enable interlaced PNG compression
 * {png_options: {interlaced: true}};
 *
 * // Enable PNG quantanization with 128 colors
 * {png_options: {quantize: true, quantization_colors: 128}};
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=png-options | PNG options imgproxy docs}
 */
interface PNGOptions {
  interlaced?: boolean;
  quantize?: boolean;
  quantization_colors?: number;
}

/**
 * *PNG options option*. **PRO feature**
 *
 * To describe the PNG options option, you can use the keyword `png_options` or `pngo`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=png-options
 */
interface PNGOptionsPartial {
  png_options?: PNGOptions;
  pngo?: PNGOptions;
}

export { PNGOptions, PNGOptionsPartial };
