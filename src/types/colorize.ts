/**
 * *Colorize option*. **PRO feature**
 *
 * Places a color overlay on the processed image.
 * @see
 * - `colorize` https://docs.imgproxy.net/generating_the_url?id=colorize
 */
export interface Colorize {
  /** Opacity of the color overlay (0-1). When set to 0, overlay is not applied */
  opacity: number;
  /** Optional hex-coded color value (default is black: 000) */
  color?: string;
  /** Optional flag to preserve the original image's alpha channel (default is false) */
  keepAlpha?: boolean;
}

export interface ColorizeOptionsPartial {
  colorize?: Colorize;
  col?: Colorize;
}
