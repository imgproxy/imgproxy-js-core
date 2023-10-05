/**
 * *Gradient option*. **PRO feature**
 *
 * Places a gradient on the processed image. The placed gradient transitions from transparency to the specified color.
 *
 * @param {number} opacity - specifies gradient opacity. When set to 0, gradient is not applied. Value range: `0` - `1`.
 * @param {string} [color="000"] - (optional) specifies gradient color. If omitted, the gradient is black. Default `"000"`.
 * @param {"down" | "up" | "right" | "left"} [direction="down"] - (optional) specifies gradient direction. Default `"down"`.
 *
 * Available values:
 * - `down` - the top side of the gradient is transparrent, the bottom side is opaque
 * - `up` - the bottom side of the gradient is transparrent, the top side is opaque
 * - `right` -  the left side of the gradient is transparrent, the right side is opaque
 * - `left` - the right side of the gradient is transparrent, the left side is opaque
 * @param {number} [start=0.0] - (optional) specifies the start point of the gradient. Value range: `0.0` - `1.0`. Default `0.0`.
 * @param {number} [stop=1.0] - (optional) specifies the end point of the gradient. Value range: `0.0` - `1.0`. Default `1.0`.
 *
 * @example
 * // Apply a black gradient with 0.5 opacity from the top to the bottom of the image
 * {gradient: {opacity: 0.5}}
 *
 * // Apply a red gradient with 0.2 opacity from the top to the bottom of the image
 * {gradient: {opacity: 0.2, color: "ff0000"}}
 *
 * // Apply a gray gradient with 0.3 opacity from the left to the right of the image with the start point at 0.2 and the end point at 0.8
 * {gradient: {opacity: 0.3, direction: "right", color: "808080", start: 0.2, stop: 0.8}}
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=gradient
 */
interface Gradient {
  opacity: number;
  color?: string;
  direction?: "down" | "up" | "right" | "left";
  start?: number;
  stop?: number;
}

/**
 * *Gradient option*. **PRO feature**
 *
 * To describe the Gradient option, you can use the keyword `gradient` or `gr`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=gradient
 */
interface GradientOptionsPartial {
  gradient?: Gradient;
  gr?: Gradient;
}

export { Gradient, GradientOptionsPartial };
