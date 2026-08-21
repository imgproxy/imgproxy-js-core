/**
 * *Progressive blur option*. **PRO feature**
 *
 * When `sigma` is greater than `0`, imgproxy will apply a progressive Gaussian blur filter
 * to the resulting image. The placed progressive blur transitions from no blur at the `start`
 * position to the specified `sigma` at the `stop` position.
 *
 * @param {number} sigma - defines the size of the mask imgproxy will use for the maximum blur. When set to `0`, the progressive blur is not applied.
 * @param {"down" | "up" | "right" | "left" | number} [direction="down"] - (optional) specifies the direction of the progressive blur. Default `"down"`.
 *
 * Available values:
 * - `down` - the top side of the progressive blur is not blurred, the bottom side is blurred
 * - `up` - the bottom side of the progressive blur is not blurred, the top side is blurred
 * - `right` - the left side of the progressive blur is not blurred, the right side is blurred
 * - `left` - the right side of the progressive blur is not blurred, the left side is blurred
 * - `number` - angle in degrees (clockwise). `0` creates a progressive blur from top to bottom; `90` creates a progressive blur from right to left.
 * @param {number} [start=0.0] - (optional) specifies the relative position where the progressive blur starts. Value range: `0.0` - `1.0`. Default `0.0`.
 * @param {number} [stop=1.0] - (optional) specifies the relative position where the progressive blur ends. Value range: `0.0` - `1.0`. Default `1.0`.
 *
 * @example
 * // Apply a progressive blur from the top to the bottom of the image
 * {progressive_blur: {sigma: 10}}
 *
 * // Apply a progressive blur from the left to the right of the image
 * {progressive_blur: {sigma: 10, direction: "right"}}
 *
 * // Apply a progressive blur at a 45 degree angle with the start point at 0.2 and the end point at 0.8
 * {progressive_blur: {sigma: 10, direction: 45, start: 0.2, stop: 0.8}}
 *
 * @see {@link https://docs.imgproxy.net/usage/processing#progressive-blur | progressive blur option imgproxy docs}
 */
interface ProgressiveBlur {
  sigma: number;
  direction?: "down" | "up" | "right" | "left" | number;
  start?: number;
  stop?: number;
}

/**
 * *Progressive blur option*. **PRO feature**
 *
 * To describe the Progressive Blur option, you can use the keyword `progressive_blur` or `pbl`.
 *
 * @see https://docs.imgproxy.net/usage/processing#progressive-blur
 */
interface ProgressiveBlurOptionsPartial {
  progressive_blur?: ProgressiveBlur;
  pbl?: ProgressiveBlur;
}

export { ProgressiveBlur, ProgressiveBlurOptionsPartial };
