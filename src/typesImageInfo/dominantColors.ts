/**
 * *Dominant colors option*
 *
 * @warning **Slow**. This option requires the image to be fully downloaded and processed.
 *
 * @param {(number | boolean | string)} dominant_colors - when set to 1`, `"t"` or `true`,
 * imgproxy will calculate and return the image’s dominant colors (vibrant,
 * light vibrant, dark vibrant, muted, light muted, and dark muted). Default: false
 * @param {(number | boolean | string)} [build_missed = false] - (optional) when set to `1`, `"t"` or `true`,
 * imgproxy will build colors that were not found in the image based on the found ones. Default: false
 *
 * @note If any value other than `1`, `"t"`, or `true` is passed, it will be recognized as `false`.
 *
 * Response example:
 * {
 *  "dominant_colors": {
 *   "dark_muted": { "R": 75, "G": 70, "B": 57 },
 *   "dark_vibrant": { "R": 90, "G": 78, "B": 43 },
 *   "light_muted": { "R": 167, "G": 156, "B": 130 },
 *   "light_vibrant": { "R": 212, "G": 198, "B": 165 },
 *   "muted": { "R": 155, "G": 146, "B": 120 },
 *   "vibrant": { "R": 172, "G": 146, "B": 83 }
 *  }
 * }
 *
 * @default false:false
 *
 *
 * @see {@link https://docs.imgproxy.net/getting_the_image_info?id=dominant-colors | Dominant colors imgproxy docs}
 */
interface DominantColors {
  dominant_colors: 1 | "t" | true | false | string;
  build_missed?: 1 | "t" | true | false | string;
}

/**
 * *Dominant colors option*
 *
 * To describe the Dominant colors option, you can use the keyword `dominant_colors` or `dc`.
 *
 * @see https://docs.imgproxy.net/getting_the_image_info?id=dominant-colors
 */
interface DCImageInfoOptionsPartial {
  dominant_colors?: DominantColors;
  dc?: DominantColors;
}

export { DominantColors, DCImageInfoOptionsPartial };
