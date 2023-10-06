/**
 * *JPEG options*. **PRO feature**
 *
 * Allows redefining JPEG saving options. All arguments are optional and can be omitted.
 *
 * @param {boolean} [progressive=false] - (optional) enables progressive JPEG compression. Default: `false`.
 * @param {boolean} [no_subsample=false] - (optional) disables chrominance subsampling.
 * This will improve quality at the cost of larger file size. Default: `false`.
 * @param {boolean} [trellis_quant=false] - (optional) enables trellis quantisation for each 8x8 block.
 * Reduces file size but increases compression time. Default: `false`.
 * @param {boolean} [overshoot_deringing=false] - (optional)enables overshooting of samples with extreme values.
 * Overshooting may reduce ringing artifacts from compression, in particular in areas where black text appears
 * on a white background. Default: `false`.
 * @param {boolean} [optimize_scans=false] - (optional) splits the spectrum of DCT coefficients into separate scans.
 * Reduces file size but increases compression time. Requires parameter `progressive` to be set to `true`. Default: `false`.
 * @param {0|1|2|3|4|5|6|7|8} [quant_table=0] - (optional) selects quantization table. Default: `0`.
 *
 * Available values:
 * - `0` - Table from JPEG Annex K (default)
 * - `1` - Flat table
 * - `2` - Table tuned for MSSIM on Kodak image set
 * - `3` - Table from ImageMagick by N. Robidoux
 * - `4` - Table tuned for PSNR-HVS-M on Kodak image set
 * - `5` - Table from Relevance of Human Vision to JPEG-DCT Compression (1992)
 * - `6` - Table from DCTune Perceptual Optimization of Compressed Dental X-Rays (1997)
 * - `7` - Table from A Visual Detection Model for DCT Coefficient Quantization (1993)
 * - `8` - Table from An Improved Detection Model for DCT Coefficient Quantization (1993)
 *
 * @example
 * // Disable chrominance subsampling
 * {jpeg_options: {no_subsample: true}};
 *
 * // Enable progressive JPEG compression
 * {jpeg_options: {progressive: true}};
 *
 * // Disable chrominance subsampling and enable trellis quantisation
 * {jpeg_options: {no_subsample: true, trellis_quant: true}};
 *
 * // Enable overshooting of samples with extreme values and select quantization table 4
 * {jpeg_options: {overshoot_deringing: true, quant_table: 4}};
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=jpeg-options | JPEG options imgproxy docs}
 */
interface JPEGOptions {
  progressive?: boolean;
  no_subsample?: boolean;
  trellis_quant?: boolean;
  overshoot_deringing?: boolean;
  optimize_scans?: boolean;
  quant_table?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}

/**
 * *JPEG options option*. **PRO feature**
 *
 * To describe the JPEG options option, you can use the keyword `jpeg_options` or `jpgo`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=jpeg-options
 */
interface JPEGOptionsPartial {
  jpeg_options?: JPEGOptions;
  jpgo?: JPEGOptions;
}

export { JPEGOptions, JPEGOptionsPartial };
