/**
 * *Blur area coordinates*. **PRO feature**
 *
 * @param {number} left - The left edge of the area, as a floating-point value between `0` and `1`, relative to the source image width.
 * @param {number} top - The top edge of the area, as a floating-point value between `0` and `1`, relative to the source image height.
 * @param {number} width - The width of the area, as a floating-point value between `0` and `1`, relative to the source image width.
 * @param {number} height - The height of the area, as a floating-point value between `0` and `1`, relative to the source image height.
 *
 * @note The coordinates should be defined with respect to the source image EXIF orientation,
 * as imgproxy doesn't rotate/flip them according to EXIF orientation.
 * However, imgproxy rotates/flips the areas according to the `rotate` and `flip` options.
 */
interface BlurArea {
  left: number;
  top: number;
  width: number;
  height: number;
}

/**
 * *Blur areas*. **PRO feature**
 *
 * When `sigma` is greater than `0`, imgproxy will apply a Gaussian blur filter
 * to the defined areas of the resulting image.
 *
 * @param {number} sigma - Defines the size of the mask imgproxy will use.
 * @param {BlurArea[]} areas - The list of areas to be blurred.
 *
 * @example
 * {blur_areas: {sigma: 5, areas: [{left: 0.1, top: 0.1, width: 0.2, height: 0.2}]}}
 *
 * @see {@link https://docs.imgproxy.net/usage/processing#blur-areas | blur areas option imgproxy docs}
 */
interface BlurAreas {
  sigma: number;
  areas: BlurArea[];
}

/**
 * *Blur areas option*. **PRO feature**
 *
 * To describe the Blur areas option, you can use the keyword `blur_areas` or `ba`.
 *
 * @see https://docs.imgproxy.net/usage/processing#blur-areas
 */
interface BlurAreasOptionsPartial {
  blur_areas?: BlurAreas;
  ba?: BlurAreas;
}

export { BlurArea, BlurAreas, BlurAreasOptionsPartial };
