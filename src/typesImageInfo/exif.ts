/**
 * Boolean-like values for EXIF option fields.
 *
 * @note Only `1`, `"t"`, or `true` are recognized as truthy values.
 * Any other value (including `"true"` or `"1"` as strings) will be treated as false.
 */
type ExifBooleanValue = 1 | 0 | "t" | "f" | boolean | string;

/**
 * *EXIF option (object form)*
 *
 * @param {ExifBooleanValue} enabled - When set to `1`, `"t"` or `true`,
 * imgproxy will return the image’s EXIF metadata. Default: `true`.
 * @param {ExifBooleanValue} canonical_names - When set to `1`, `"t"` or `true`,
 * imgproxy will return the EXIF metadata field names in a canonical form
 * (e.g. `DateTimeOriginal`) instead of a human-readable form
 * (e.g. `Date and Time (Original)`). Default: `false`.
 */
interface ExifObject {
  enabled?: ExifBooleanValue;
  canonical_names?: ExifBooleanValue;
}

/**
 * *EXIF option*
 *
 * When `enabled` is set to `1`, `"t"` or `true`, imgproxy will return the image’s EXIF metadata.
 * When `canonical_names` is set to `1`, `"t"` or `true`, imgproxy will return the EXIF
 * metadata field names in a canonical form (e.g. `DateTimeOriginal`) instead of a
 * human-readable form (e.g. `Date and Time (Original)`).
 *
 * Accepts a plain boolean-like value (controls `enabled` only) or an object
 * `{ enabled, canonical_names }`.
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
 * @default true:false
 *
 *
 * @see {@link https://docs.imgproxy.net/usage/getting_info#exif | EXIF imgproxy docs}
 */
type Exif = ExifBooleanValue | ExifObject;

/**
 * *EXIF option*
 *
 * To describe the EXIF option, you can use the keyword `exif`.
 *
 * @see https://docs.imgproxy.net/usage/getting_info#exif
 */
interface ExifImageInfoOptionsPartial {
  exif?: Exif;
}

export { Exif, ExifObject, ExifBooleanValue, ExifImageInfoOptionsPartial };
