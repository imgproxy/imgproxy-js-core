/**
 * *Crop objects*. **PRO feature**
 *
 * imgproxy {@link https://docs.imgproxy.net/features/object_detection | detects objects}
 * of the provided classes and crops the image to fit all detected objects.
 *
 * @param {number} scale_factor - Defines how much the crop area should be scaled
 * relative to the detected objects. For example, `1.0` crops exactly to the detected
 * objects, while `1.2` adds 20% padding around them.
 * @param {string[]} [class_names] - (optional) A list of the object class names to detect.
 * If `class_names` are omitted, imgproxy crops to all the detected objects.
 *
 * @note It respects the `resizing_type` option, so if you set it to `fill` or `fill-down`,
 * imgproxy will expand the cropping area to match the output dimensions' aspect ratio.
 * It also respects the `IMGPROXY_OBJECT_DETECTION_GRAVITY_MODE` config option when selecting
 * objects to crop around, and the `objects_position` option when deciding where to place
 * the objects in the output image.
 *
 * When no objects are detected, imgproxy will not crop the image and will process it as usual.
 * The `crop_objects` option takes precedence over the `crop` option.
 *
 * @example
 * // Crop to all the detected objects
 * {crop_objects: {scale_factor: 1}}
 *
 * // Crop to the detected faces with 20% padding around them
 * {crop_objects: {scale_factor: 1.2, class_names: ["face"]}}
 *
 * @see {@link https://docs.imgproxy.net/usage/processing#crop-objects | crop objects option imgproxy docs}
 */
interface CropObjects {
  scale_factor: number;
  class_names?: string[];
}

/**
 * *Crop objects option*. **PRO feature**
 *
 * To describe the Crop objects option, you can use the keyword `crop_objects` or `c_obj`.
 *
 * @see https://docs.imgproxy.net/usage/processing#crop-objects
 */
interface CropObjectsOptionsPartial {
  crop_objects?: CropObjects;
  c_obj?: CropObjects;
}

export { CropObjects, CropObjectsOptionsPartial };
