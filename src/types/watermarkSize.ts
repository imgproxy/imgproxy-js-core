/**
 * *Watermark size option*. **PRO feature**
 *
 * Defines the desired width and height of the watermark.
 * imgproxy always uses `fit` resizing type when resizing watermarks and enlarges them when needed.
 *
 * @param {number} [width=0] - Desired width of the watermark. When `width` is set to `0`,
 * imgproxy will calculate the width using the defined height and watermark’s aspect ratio. Default `0`.
 * @param {number} [height=0] - Desired height of the watermark. When `height` is set to `0`,
 * imgproxy will calculate the height using the defined width and watermark’s aspect ratio. Default `0`
 *
 * @warning This processing option takes effect only when the `scale` argument of the `watermark` option is set to `0`.
 *
 * @default {width: 0, height: 0}
 *
 * @see
 * - {@link https://docs.imgproxy.net/generating_the_url?id=watermark-size | watermark size option imgproxy docs}
 * - {@link https://docs.imgproxy.net/generating_the_url?id=watermark | watermark option imgproxy docs}
 */
interface WatermarkSize {
  width?: number;
  height?: number;
}

/**
 * *Watermark size option*. **PRO feature**
 *
 * To describe the Watermark size option, you can use the keyword `watermark_size` or `wms`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=watermark-size
 */
interface WatermarkSizeOptionsPartial {
  watermark_size?: WatermarkSize;
  wms?: WatermarkSize;
}

export { WatermarkSize, WatermarkSizeOptionsPartial };
