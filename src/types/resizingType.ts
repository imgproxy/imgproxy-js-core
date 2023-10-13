/**
 * *Resizing type option*
 *
 * Defines how imgproxy will resize the source image. Supported resizing types are:
 *
 * `fit`: resizes the image while keeping aspect ratio to fit a given size.
 *
 * `fill`: resizes the image while keeping aspect ratio to fill a given size and crops projecting parts.
 *
 * `fill_down`: the same as fill, but if the resized image is smaller than the requested size,
 * imgproxy will crop the result to keep the requested aspect ratio.
 *
 * `force`: resizes the image without keeping the aspect ratio.
 *
 * `auto`: if both source and resulting dimensions have the same orientation (portrait or landscape),
 * imgproxy will use fill. Otherwise, it will use fit.
 *
 * @default fit
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=resizing-type
 */
type ResizingType = "fit" | "fill" | "fill_down" | "force" | "auto";

/**
 * *Resizing type option*
 *
 * To describe the Resizing type option, you can use the keyword `resizing_type` or `rt`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=resizing-type
 */
interface ResizingTypeOptionsPartial {
  resizing_type?: ResizingType;
  rt?: ResizingType;
}

export { ResizingType, ResizingTypeOptionsPartial };
