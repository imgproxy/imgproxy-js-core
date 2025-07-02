/**
 * *Crop aspect ratio option*. **PRO feature**
 *
 * **Description to the generateUrl method**
 *
 * Defines the aspect ratio to match the crop area. This is a Pro feature.
 *
 * @param {number} `aspect_ratio` defines the desired aspect ratio for the crop area:
 * - When set to `0`, no aspect ratio correction is applied.
 * - Any positive number defines the aspect ratio (width/height).
 *
 * @param `enlarge` {1 | "t" | true} - (optional) controls crop area sizing:
 * - When set to `true`, `1`, or `"t"`, imgproxy will enlarge the crop area if needed.
 * - If the enlarged crop area exceeds the image size, imgproxy will reduce the area to fit while maintaining the requested aspect ratio.
 *
 * @see {@link https://docs.imgproxy.net/latest/usage/processing#crop-aspect-ratio | crop aspect ratio imgproxy docs}
 */
interface CropAspectRatio {
  aspect_ratio: number;
  enlarge?: boolean | 1 | 0 | "t" | "f";
}

/**
 * *Crop aspect ratio option*
 *
 * To describe the crop aspect ratio option, you can use the keyword `crop_aspect_ratio`, `crop_ar`, or `car`.
 *
 * @see https://docs.imgproxy.net/latest/usage/processing#crop-aspect-ratio
 */
interface CropAspectRatioOptionsPartial {
  crop_aspect_ratio?: CropAspectRatio;
  crop_ar?: CropAspectRatio;
  car?: CropAspectRatio;
}

export { CropAspectRatio, CropAspectRatioOptionsPartial };
