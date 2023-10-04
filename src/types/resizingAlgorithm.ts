/**
 * *Resizing algorithm option.*
 * **PRO feature.**
 *
 * Defines the algorithm that imgproxy will use for resizing.
 * Supported algorithms are
 * - `nearest` - The nearest neighbor algorithm is the simplest and fastest resizing technique.
 * It works by selecting the nearest pixel from the original image and replicating its color to create the new pixels.
 * - `linear` - Linear (or bilinear, in two dimensions) interpolation is typically good for changing the size of an image,
 * but causes some undesirable softening of details and can still be somewhat jagged.
 * - `cubic` - Bi-Cubic Interpolation is an extension of the Bi-Linear Interpolation technique,
 * which estimates pixel values based on the nearest four pixels.
 * Bi-Cubic Interpolation takes the surrounding sixteen pixels into account,
 * resulting in smoother and more accurate image scaling.
 * - `lanczos2` - Changes an image size using interpolation with the Lanczos filter.
 * This function changes an image size using interpolation with the Lanczos filter.
 * The image size may be either reduced or increased in each direction, depending on the destination image size.
 * - `lanczos3` - The lanczos3 result (lower center) is sharper than the bicubic and lanczos2 results but exhibits
 * a visible "ringing" artifact. The ringing artifact appears as a faint echo outside the gray boundary,
 * or by looking just to the left and right of the thick black stripe running down the middle of the image
 *
 * @default lanczos3
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=resizing-algorithm
 */
type ResizingAlgorithm =
  | "nearest"
  | "linear"
  | "cubic"
  | "lanczos2"
  | "lanczos3";

/** *Resizing algorithm option.*
 * **PRO feature.**
 *
 * To describe the Resizing algorithm option, you can use the keyword `resizing_algorithm` or `ra`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=resizing-algorithm
 */
interface ResizingAlgorithmOptionsPartial {
  resizing_algorithm?: ResizingAlgorithm;
  ra?: ResizingAlgorithm;
}

export { ResizingAlgorithm, ResizingAlgorithmOptionsPartial };
