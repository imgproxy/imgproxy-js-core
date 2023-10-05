/**
 * *Blur detections*. **PRO feature**
 *
 * @param {number} sigma - The value of sigma defines the size of the mask imgproxy will use.
 * @param {string[]} [class_names] - (optional) A list of class names to blur.
 * If `class_names` are omitted, imgproxy blurs all the detected objects.
 *
 * @note imgproxy can detect objects on the image and use them for smart cropping,
 * bluring the detections, or drawing the detections.
 *
 * For object detection purposes, imgproxy uses the {@link https://github.com/AlexeyAB/darknet | Darknet YOLO model}.
 * We provide Docker images with a model trained for face detection,
 * but you can use any Darknet YOLO model found in the {@link https://github.com/AlexeyAB/darknet/wiki/YOLOv4-model-zoo | zoo}
 * or you can train your own model by following this {@link https://github.com/AlexeyAB/darknet#how-to-train-to-detect-your-custom-objects | guide}.
 *
 * @example
 * // Blur all detected objects
 * {blur_detections: {sigma: 5}}
 *
 * // Blur only detected faces
 * {blur_detections: {sigma: 10, class_names: ["face"]}}
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=blur-detections | blur detections option imgproxy docs}
 */
interface BlurDetections {
  sigma: number;
  class_names?: string[];
}

/**
 * *Blur detections option*. **PRO feature**
 *
 * To describe the Blur detections option, you can use the keyword `blur_detections` or `bd`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=blur-detections
 */
interface BlurDetectionsOptionsPartial {
  blur_detections?: BlurDetections;
  bd?: BlurDetections;
}

export { BlurDetections, BlurDetectionsOptionsPartial };
