/**
 * *Perceptual hash option*
 *
 * @warning **Slow**. This option requires the image to be fully downloaded and processed.
 *
 * When set, imgproxy will calculate and return the perceptual hash of the image.
 * Perceptual hashes can be used to find similar or duplicate images.
 *
 * Use {@link https://en.wikipedia.org/wiki/Hamming_distance | Hamming Distance} to
 * calculate the distance between two perceptual hashes. In a nutshell, the Hamming
 * distance is the number of positions at which the corresponding bits of the two
 * hashes differ.
 *
 * @note If any value other than `1`, `"t"`, or `true` is passed, it will be recognized as `false`.
 *
 * Response example:
 * {
 *  "perceptual_hash": "9797306d694b4e94"
 * }
 *
 * @example
 * {perceptual_hash: 1}
 *
 * @see
 * - {@link https://docs.imgproxy.net/usage/getting_info#perceptual-hash | Perceptual hash imgproxy docs}
 * - {@link https://en.wikipedia.org/wiki/Hamming_distance | Hamming Distance}
 */
type PerceptualHash = 1 | "t" | true | false | string;

/**
 * *Perceptual hash option*
 *
 * To describe the Perceptual hash option, you can use the keyword `perceptual_hash`,
 * `phash` or `ph`.
 *
 * @note In image info URLs, `ph` means `perceptual_hash`. Don't confuse it with the
 * `ph` keyword of the `preserve_hdr` processing option.
 *
 * @see https://docs.imgproxy.net/usage/getting_info#perceptual-hash
 */
interface PerceptualHashImageInfoOptionsPartial {
  perceptual_hash?: PerceptualHash;
  phash?: PerceptualHash;
  ph?: PerceptualHash;
}

export { PerceptualHash, PerceptualHashImageInfoOptionsPartial };
