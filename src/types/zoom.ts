interface ZoomObj {
  zoom_x: number;
  zoom_y: number;
}

/**
 * *Zoom option*
 *
 * When set, imgproxy will multiply the image dimensions according to these factors. The values must be greater than `0`.
 *
 * Can be combined with width and height options.
 * In this case, imgproxy calculates scale factors for the provided size and then multiplies it with the provided zoom factors.
 *
 * @note Unlike the `dpr` option, the `zoom` option doesn’t affect gravities offsets, watermark offsets, and paddings.
 *
 * @default 1
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=zoom
 */

type Zoom = ZoomObj | number;

/**
 * *Zoom option*
 *
 * To describe the Zoom option, you can use the keyword `zoom` or `z`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=zoom
 */

interface ZoomOptionsPartial {
  zoom?: Zoom;
  z?: Zoom;
}

export { Zoom, ZoomOptionsPartial };
