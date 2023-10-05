/**
 * *Style option*. **PRO feature**.
 *
 * When set, imgproxy will prepend a `<style>` node with the provided content to the `<svg>` node of a source SVG image.
 * The value should be in URL-safe Base64 format.
 *
 * @default blank
 *
 * @warning This option is working only with images in SVG format (`.svg`).
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=style | style option imgproxy docs}
 */
type Style = string;

/**
 * *Style option*. **PRO feature**.
 *
 * To describe the Style option, you can use the keyword `style` or `stl`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=style
 */
interface StyleOptionsPartial {
  style?: Style;
  stl?: Style;
}

export { Style, StyleOptionsPartial };
