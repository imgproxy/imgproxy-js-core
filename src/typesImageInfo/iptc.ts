/**
 * *IPTC option*
 *
 * When set to `1`, `"t"` or `true`, imgproxy will return the image’s IPTC (IPTC-IIM)
 * metadata and Photoshop metadata (currently, only the resolution data).
 *
 * @note If any value other than `1`, `"t"`, or `true` is passed, it will be recognized as `false`.
 *
 * Response example:
 * {
 *  "iptc": {
 *   "Name": "Spider-Man",
 *   "Caption": "Spider-Man swings on the web",
 *   "Copyright Notice": "Daily Bugle",
 *   "Keywords": ["spider-man", "menance", "offender"]
 *  },
 *  "photoshop": {
 *   "resolution": {
 *     "XResolution": 240,
 *     "XResolutionUnit": "inches",
 *     "WidthUnit": "inches",
 *     "YResolution": 240,
 *     "YResolutionUnit": "inches",
 *     "HeightUnit": "inches"
 *   }
 *  }
 * }
 *
 * @default true
 *
 *
 * @see {@link https://docs.imgproxy.net/getting_the_image_info?id=iptc | IPTC imgproxy docs}
 */
type Iptc = 1 | "t" | true | false | string;

/**
 * *IPTC option*
 *
 * To describe the IPTC option, you can use the keyword `iptc`.
 *
 * @see https://docs.imgproxy.net/getting_the_image_info?id=iptc
 */
interface IptcImageInfoOptionsPartial {
  iptc?: Iptc;
}

export { Iptc, IptcImageInfoOptionsPartial };
