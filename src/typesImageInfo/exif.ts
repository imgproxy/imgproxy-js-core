/**
 * *EXIF option*
 *
 * When set to `1`, `"t"` or `true`, imgproxy will return the image’s EXIF metadata.
 *
 * @note If any value other than `1`, `"t"`, or `true` is passed, it will be recognized as `false`.
 *
 * Response example:
 * {
 *  "exif": {
 *   "Aperture": "8.00 EV (f/16.0)",
 *   "Contrast": "Normal",
 *   "Date and Time": "2016:09:11 22:15:03",
 *   "Model": "NIKON D810",
 *   "Software": "Adobe Photoshop Lightroom 6.1 (Windows)"
 *  }
 * }
 *
 * @default true
 *
 *
 * @see {@link https://docs.imgproxy.net/getting_the_image_info?id=exif | EXIF imgproxy docs}
 */
type Exif = 1 | "t" | true | false | string;

/**
 * *EXIF option*
 *
 * To describe the EXIF option, you can use the keyword `exif`.
 *
 * @see https://docs.imgproxy.net/getting_the_image_info?id=exif
 */
interface ExifImageInfoOptionsPartial {
  exif?: Exif;
}

export { Exif, ExifImageInfoOptionsPartial };
