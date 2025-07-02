/**
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
 */
type WebPCompressionOptions = "lossy" | "near_lossless" | "lossless";

/**
 * Available WebP preset values:
 * - `"default"` - A general-purpose preset (default setting)
 * - `"photo"` - A digital picture, like a portrait or indoor shot
 * - `"picture"` - An outdoor photograph with natural lighting
 * - `"drawing"` - A hand or line drawing with high-contrast details
 * - `"icon"` - A small-sized colorful image
 * - `"text"` - A text image with large areas of uniform color
 */
type WebPPresetOptions =
  | "default"
  | "photo"
  | "picture"
  | "drawing"
  | "icon"
  | "text";

/**
 * *WEBP options*. **PRO feature**
 *
 * Allows redefining WebP saving options.
 *
 * @default "lossy"
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=webp-options | WEBP options imgproxy docs}
 */
type WebpOptions =
  | WebPCompressionOptions
  | {
      compression: WebPCompressionOptions;
      /**
       * when `true`, enables smart subsampling. Smart subsampling increases the resulting file size and compression time but improves quality. Default: `false`
       */
      smart_subsample?: boolean;
      /**
       * A hint to the encoder about the type of image being compressed. This helps optimize WebP compression based on the specific type of image being processed.
       */
      preset?: WebPPresetOptions;
    };

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
