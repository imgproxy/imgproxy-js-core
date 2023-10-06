/**
 * *WEBP options*. **PRO feature**
 *
 * Allows redefining WebP saving options.
 *
 * Available values:
 * - `"lossy"` - (default) lossy compression. The lossy compression is based on VP8 key frame encoding.
 * VP8 is a video compression format created by On2 Technologies as a successor to the VP6 and VP7 formats.
 * - `"near_lossless"` - near lossless compression
 * - `"lossless"` - lossless compression. The WebP-lossless encoding is based on transforming
 * the image using several different techniques.
 * Then, entropy coding is performed on the transform parameters and transformed image data.
 * The transforms applied to the image include spatial prediction of pixels, color space transform,
 * using locally emerging palettes, packing multiple pixels into one pixel, and alpha replacement.
 * For the entropy coding we use a variant of LZ77-Huffman coding, which uses 2D encoding of distance values
 * and compact sparse values.
 *
 * @default "lossy"
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=webp-options | WEBP options imgproxy docs}
 */
type WebpOptions = "lossy" | "near_lossless" | "lossless";

/**
 * *WEBP options option*. **PRO feature**
 *
 * To describe the WEBP options option, you can use the keyword `webp_options` or `webpo`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=webp-options
 */
interface WebpOptionsPartial {
  webp_options?: WebpOptions;
  webpo?: WebpOptions;
}

export { WebpOptions, WebpOptionsPartial };
