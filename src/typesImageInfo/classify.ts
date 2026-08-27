/**
 * *Classify option*
 *
 * @warning **Slow**. This option requires the image to be fully downloaded and processed.
 *
 * When `top_k` is greater than zero, imgproxy will classify the image and return
 * the top K classes with the highest confidence scores. Read the
 * {@link https://docs.imgproxy.net/features/classification | classification manual}
 * to learn how to configure classification.
 *
 * @param {number} top_k - The number of classes with the highest confidence scores to return.
 * Default: 0.
 * @param {string[]} [class_names] - (optional) A list of class names to classify.
 * If `class_names` are omitted, imgproxy classifies all the known classes.
 *
 * Response example:
 * [
 *  {
 *    "class_id": 68,
 *    "name": "Bus",
 *    "confidence": 0.8745117
 *  },
 *  {
 *    "class_id": 351,
 *    "name": "Person",
 *    "confidence": 0.7734375
 *  }
 * ]
 *
 * @default 0
 *
 * @example
 * // Return the top 3 classes
 * {classify: {top_k: 3}}
 *
 * // Classify only the given classes
 * {classify: {top_k: 2, class_names: ["Bus", "Person"]}}
 *
 * @see
 * - {@link https://docs.imgproxy.net/usage/getting_info#classify | Classify imgproxy docs}
 * - {@link https://docs.imgproxy.net/features/classification | classification manual}
 */
interface Classify {
  top_k: number;
  class_names?: string[];
}

/**
 * *Classify option*
 *
 * To describe the Classify option, you can use the keyword `classify` or `cl`.
 *
 * @see https://docs.imgproxy.net/usage/getting_info#classify
 */
interface ClassifyImageInfoOptionsPartial {
  classify?: Classify;
  cl?: Classify;
}

export { Classify, ClassifyImageInfoOptionsPartial };
