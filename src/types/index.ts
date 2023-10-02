/**
 * Defines how imgproxy will resize the source image. Supported resizing types are:
 *
 * `fit`: resizes the image while keeping aspect ratio to fit a given size.
 *
 * `fill`: resizes the image while keeping aspect ratio to fill a given size and crops projecting parts.
 *
 * `fill-down`: the same as fill, but if the resized image is smaller than the requested size, imgproxy will crop the result to keep the requested aspect ratio.
 *
 * `force`: resizes the image without keeping the aspect ratio.
 *
 * `auto`: if both source and resulting dimensions have the same orientation (portrait or landscape), imgproxy will use fill. Otherwise, it will use fit.
 *
 * Default: `fit`.
 *
 * More information https://docs.imgproxy.net/generating_the_url?id=resizing-type
 */
type ResizingType = "fit" | "fill" | "fill_down" | "force" | "auto";

/**
 * When set to 1, t or true, imgproxy will enlarge the image if it is smaller than the given size.
 *
 * Default: `false`.
 *
 * More information https://docs.imgproxy.net/generating_the_url?id=enlarge
 */
type Enlarge = "1" | "t" | "true" | "false" | string;

/**
 *  Specifies the gravity type. Available values:
 *
 * `no`: north (top edge)
 *
 * `so`: south (bottom edge)
 *
 * `ea`: east (right edge)
 *
 * `we`: west (left edge)
 *
 * `noea`: north-east (top-right corner)
 *
 * `nowe`: north-west (top-left corner)
 *
 * `soea`: south-east (bottom-right corner)
 *
 * `sowe`: south-west (bottom-left corner)
 *
 * `ce`: center
 */
type GravityType =
  | "no"
  | "so"
  | "ea"
  | "we"
  | "noea"
  | "nowe"
  | "soea"
  | "sowe"
  | "ce";

/**
 * When imgproxy needs to cut some parts of the image, it is guided by the gravity option.
 *
 * More information https://docs.imgproxy.net/generating_the_url?id=gravity
 */
interface BaseGravity {
  type: GravityType;
  x_offset?: number;
  y_offset?: number;
}

/**
 * Smart gravity. libvips detects the most “interesting” section of the image and considers it as the center of the resulting image.
 *
 * Offsets are not applicable here.
 *
 * More information https://docs.imgproxy.net/generating_the_url?id=gravity
 */
interface SmartGravity {
  type: "sm";
}

/**
 * The gravity focus point.
 *
 * `x` and `y` are floating point numbers between `0` and `1` that define the coordinates of the center of the resulting image.
 *
 * Treat `0` and `1` as right/left for `x` and top/bottom for `y`.
 */
interface FPGravity {
  type: "fp";
  x: number;
  y: number;
}

/**
 * **PRO feature.**
 *
 * Object-oriented gravity. imgproxy detects objects of provided classes on the image and calculates the resulting image center using their positions.
 *
 * If class names are omited, imgproxy will use all the detected objects.
 */
interface ObjGravity {
  type: "obj";
  class_names: string[];
}

/**
 * When imgproxy needs to cut some parts of the image, it is guided by the gravity option.
 *
 * More information https://docs.imgproxy.net/generating_the_url?id=gravity
 */
export type Gravity = BaseGravity | SmartGravity | ObjGravity | FPGravity;

/**
 * When `extend` is set to 1, t or true, imgproxy will extend the image if it is smaller than the given size.
 *
 * `gravity` (optional) accepts the same values as the gravity option, except sm. When `gravity` is not set, imgproxy will use `ce` gravity without offsets.
 *
 * Default: `false:ce:0:0`.
 *
 * More information https://docs.imgproxy.net/generating_the_url?id=extend
 */
interface ExtendType {
  extend: "1" | "t" | "true" | "false" | string;
  gravity?: BaseGravity | FPGravity;
}

/**
 * This is a meta-option that defines the `resizing type`, `width`, `height`, `enlarge`, and `extend`.
 *
 * All arguments are optional and can be omitted to use their default values.
 *
 * More information https://docs.imgproxy.net/generating_the_url?id=resize
 */
export interface Resize {
  resizing_type?: ResizingType;
  width?: number;
  height?: number;
  enlarge?: Enlarge;
  extend?: ExtendType;
}

export interface Padding {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

/**
 * At the moment, imgproxy supports only the most popular image formats.
 *
 * More information https://docs.imgproxy.net/image_formats_support
 */
type Extensions =
  | "png"
  | "jpg"
  | "webp"
  | "avif"
  | "gif"
  | "ico"
  | "svg"
  | "bmp"
  | "tiff"
  | "mp4";

export interface Options {
  format?: Extensions;
  f?: Extensions;
  ext?: Extensions;

  resize?: Resize;
  rs?: Resize;

  padding?: Padding;
  pd?: Padding;
}
