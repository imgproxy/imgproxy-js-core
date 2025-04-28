/**
 * *CalcHashsums option*
 *
 * @warning **Slow**. This option requires the image to be fully downloaded and processed.
 *
 * When specified, imgproxy will calculate the specified hashsums of the source image.
 *
 * Available hashsum types: md5, sha1, sha256, sha512
 *
 * Response example:
 * {
 * "hashsums": {
 *   "md5": "cc507f81206a4c7d0a995a07c3d9f43a",
 *   "sha256": "621f6c6d68de754c6cdf3d286b7837634ce9f273f30f377b3e0df0568a23cee0"
 * }
 * }
 *
 * @note Hashsum calculation for video files is not supported.
 *
 * @see {@link https://docs.imgproxy.net/usage/getting_info#calc-hashsums | CalcHashsums imgproxy docs}
 */
type HashsumType = "md5" | "sha1" | "sha256" | "sha512";

/**
 * *CalcHashsums option*
 *
 * To specify hashsum types to calculate, you can use the keyword `calcHashsums` or `chs`.
 *
 * @see https://docs.imgproxy.net/usage/getting_info#calc-hashsums
 */
interface CalcHashsumsImageInfoOptionsPartial {
  calcHashsums?: HashsumType[];
  chs?: HashsumType[];
}

export { HashsumType, CalcHashsumsImageInfoOptionsPartial };
