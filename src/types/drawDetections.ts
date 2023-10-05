/**
 * *Draw detections option*. **PRO feature**
 *
 * @param {1 | "t" | true | false | string} draw - is set to `1`, `"t"` or `true`,
 * imgproxy detects objects of the provided classes and draws their bounding boxes.
 * If any value other than `1`, `"t"`, or `true` is passed, it will be recognized as `false`.
 * @param {string[]} [class_names] - (optional) A list of class names to draw.
 * If `class_names` are omitted, imgproxy draws the bounding boxes of all the detected objects.
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
 * // Draw bounding boxes of all detected objects
 * {draw_detections: {draw: 1}}
 *
 * // Draw bounding boxes of detected faces
 * {draw_detections: {draw: 1, class_names: ["face"]}}
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=draw-detections | draw detections option imgproxy docs}
 */
interface DrawDetections {
  draw: 1 | "t" | true | false | string;
  class_names?: string[];
}

/**
 * *Draw detections option*. **PRO feature**
 *
 * To describe the Draw detections option, you can use the keyword `draw_detections` or `dd`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=draw-detections
 */
interface DrawDetectionsOptionsPartial {
  draw_detections?: DrawDetections;
  dd?: DrawDetections;
}

export { DrawDetections, DrawDetectionsOptionsPartial };
