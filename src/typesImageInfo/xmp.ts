/**
 * *XMP option*
 *
 * When set to `1`, `"t"` or `true`, imgproxy will return the image’s XMP metadata.
 *
 * @note If any value other than `1`, `"t"`, or `true` is passed, it will be recognized as `false`.
 *
 * Response example:
 * {
 *  "xmp": {
 *   "aux": {
 *     "ApproximateFocusDistance": "4294967295/1",
 *     "ImageNumber": "16604",
 *     "Lens": "16.0-35.0 mm f/4.0",
 *     "LensID": "163",
 *     "LensInfo": "160/10 350/10 40/10 40/10",
 *     "SerialNumber": "12345678"
 *   },
 *   "dc": {
 *     "creator": ["Peter B. Parker"],
 *     "publisher": ["Daily Bugle"],
 *     "subject": ["spider-man", "menance", "offender"],
 *     "format": "image/jpeg"
 *   },
 *   "photoshop": {
 *     "DateCreated": "2016-09-11T18:44:50.003"
 *   }
 *  }
 * }
 *
 * @default true
 *
 *
 * @see {@link https://docs.imgproxy.net/getting_the_image_info?id=xmp | XMP imgproxy docs}
 */
type Xmp = 1 | "t" | true | false | string;

/**
 * *XMP option*
 *
 * To describe the Size option, you can use the keyword `xmp`.
 *
 * @see https://docs.imgproxy.net/getting_the_image_info?id=xmp
 */
interface XmpImageInfoOptionsPartial {
  xmp?: Xmp;
}

export { Xmp, XmpImageInfoOptionsPartial };
