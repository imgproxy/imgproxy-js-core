/**
 * *Background option*
 *
 * When set, imgproxy will fill the resulting image background with the specified color.
 * `r`, `g`, and `b` are the red, green and blue channel values of the background color (0-255).
 * `hex_color` is a hex-coded value of the color. Useful when you convert an image with alpha-channel to JPEG.
 *
 * With no arguments provided, disables any background manipulations.
 *
 * @example
 * {background: {r: 255, g: 255, b: 255}} - background in RGB format
 * {background: "ff00ff"} - background in hex format
 *
 * @default disabled
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=background
 */
type Background = BackgroundRGB | string;

interface BackgroundRGB {
  r: number;
  g: number;
  b: number;
}

/**
 * *Background option*
 *
 * To describe the Background option, you can use the keyword `background` or `bg`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=background
 */

interface BackgroundOptionsPartial {
  background?: Background;
  bg?: Background;
}

export { Background, BackgroundOptionsPartial };
