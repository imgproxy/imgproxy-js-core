/**
 * *Watermark*. **PRO feature**
 *
 * @param {number} opacity - watermark opacity modifier.
 * Final opacity is calculated like general opacity option * opacity watermark. Value range: `0` - `1`.
 * @param {"ce" | "no" | "so" | "ea" | "we" | "noea" | "nowe" | "soea" | "sowe" | "re"} [position="ce"] -
 * (optional) specifies the position of the watermark. Default `"ce"`.
 *
 * Available values:
 * - `ce`: (default) center
 * - `no`: north (top edge)
 * - `so`: south (bottom edge)
 * - `ea`: east (right edge)
 * - `we`: west (left edge)
 * - `noea`: north-east (top-right corner)
 * - `nowe`: north-west (top-left corner)
 * - `soea`: south-east (bottom-right corner)
 * - `sowe`: south-west (bottom-left corner)
 * - `re`: repeat and tile the watermark to fill the entire image
 *
 * @param {number} [x_offset] - (optional) specifies the horizontal offset for the watermark.
 * You can use negative values, this means that the watermark will be shifted towards the edge that is selected.
 * That is, shifted by the selected number of pixels beyond the edge.
 * When using `re` position, these values define the spacing between the tiles.
 * @param {number} [y_offset] - (optional) specifies the vertical offset for the watermark.
 * You can use negative values, this means that the watermark will be shifted towards the edge that is selected.
 * That is, shifted by the selected number of pixels beyond the edge.
 * When using `re` position, these values define the spacing between the tiles.
 * @param {number} [scale] - (optional) a floating-point number that defines
 * the watermark size relative to the resultant image size.
 * When set to 0 or when omitted, the watermark size won’t be changed.
 *
 * @default disabled
 *
 * @example
 * // Apply a watermark with 0.5 opacity in the center of the image
 * {watermark: {opacity: 0.5}}
 *
 * // Apply a watermark with 0.3 opacity in the top-left corner of the image with 10px offset from the top and 20px offset from the left
 * {watermark: {opacity: 0.3, position: "nowe", x_offset: 20, y_offset: 10}}
 *
 * // Apply a watermark with 0.5 opacity in the center of the image and scale it to 50% of the watermark size
 * {watermark: {opacity: 0.5, scale: 0.5}}
 *
 * // Apply a watermark with 0.1 opacity in the bootom-right corner of the image with 30px offset from the bottom and 30px offset from the right
 * {watermark: {opacity: 0.1, position: "soea", x_offset: 30, y_offset: 30}}
 *
 * // Apply a watermark without opacity in the top right corner and repeat it to fill the entire image with 10px spacing between tiles
 * {watermark: {opacity: 0, position: "re", x_offset: 10, y_offset: 10}}
 *
 * // Apply a watermark without opacity in the top left corner of the image with -10px offset from the left (over the left edge of the picture) and 20px offset from the top
 * {watermark: {opacity: 0, position "nowe", x_offset: -10, y_offset: 20}}
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=watermark | watermark option imgproxy docs}
 */
interface Watermark {
  opacity: number;
  position?:
    | "ce"
    | "no"
    | "so"
    | "ea"
    | "we"
    | "noea"
    | "nowe"
    | "soea"
    | "sowe"
    | "re";
  x_offset?: number;
  y_offset?: number;
  scale?: number;
}

/**
 * *Watermark option*. **PRO feature**
 *
 * To describe the Watermark option, you can use the keyword `watermark` or `wm`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=watermark
 */
interface WatermarkOptionsPartial {
  watermark?: Watermark;
  wm?: Watermark;
}

export { Watermark, WatermarkOptionsPartial };
