/**
 * *Detect objects option*
 *
 * @warning **Slow**. This option requires the image to be fully downloaded and processed.
 *
 * When set to `1`, `"t"` or `true`, imgproxy will return the info about the objects
 * found in the image. Read the {@link https://docs.imgproxy.net/object_detection | object detection manual} to learn how
 * to configure object detection.
 *
 * @note If any value other than `1`, `"t"`, or `true` is passed, it will be recognized as `false`.
 * imgproxy returns the relative coordinates of the found objects.
 *
 * Response example:
 * {
 *  "objects": [
 *   {
 *     "class_id": 0,
 *     "class_name": "face",
 *     "confidence": 0.985792,
 *     "left": 0.6602726057171822,
 *     "top": 0.23434072732925415,
 *     "width": 0.11385439336299896,
 *     "height": 0.18671900033950806
 *   },
 *   {
 *     "class_id": 0,
 *     "class_name": "face",
 *     "confidence": 0.9810329,
 *     "left": 0.4354642778635025,
 *     "top": 0.3503067269921303,
 *     "width": 0.10691609978675842,
 *     "height": 0.18357203900814056
 *   }
 *  ]
 * }
 *
 * @default false
 *
 *
 * @see
 * - {@link https://docs.imgproxy.net/getting_the_image_info?id=detect-objects | Detect objects imgproxy docs}
 * - {@link https://docs.imgproxy.net/object_detection | object detection manual}
 */
type DetectObjects = 1 | "t" | true | false | string;

/**
 * *Detect objects option*
 *
 * To describe the Detect object option, you can use the keyword `detect_objects` or `do`.
 *
 * @see https://docs.imgproxy.net/getting_the_image_info?id=detect-objects
 */
interface DetectObjectsImageInfoOptionsPartial {
  detect_objects?: DetectObjects;
  do?: DetectObjects;
}

export { DetectObjects, DetectObjectsImageInfoOptionsPartial };
