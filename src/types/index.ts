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
 * `sm`: smart gravity. libvips detects the most “interesting” section of the image and considers it as the center of the resulting image
 *
 * More information https://docs.imgproxy.net/generating_the_url?id=gravity
 */
interface BaseGravity {
  type: GravityType | "sm";
  offsetX?: number;
  offsetY?: number;
}

/**
 * The gravity focus point.
 *
 * `x` and `y` are floating point numbers between `0` and `1` that define the coordinates of the center of the resulting image.
 *
 * Treat `0` and `1` as right/left for `x` and top/bottom for `y`.
 */
interface GravityFP {
  type: "fp";
  x: number;
  y: number;
}

//TODO: `gravity:obj:%class_name1:%class_name2:...:%class_nameN` - object-oriented gravity.

/**
 * When imgproxy needs to cut some parts of the image, it is guided by the gravity option.
 *
 * `x_offset`, `y_offset` - (optional) specifies the gravity offset along the X and Y axes.
 *
 * Default: `ce:0:0`.
 */
interface GravityInExtend {
  type: GravityType;
  offsetX?: number;
  offsetY?: number;
}

export type Gravity = BaseGravity | GravityFP;

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
  gravity?: GravityInExtend | GravityFP;
}

/**
 * This is a meta-option that defines the `resizing type`, `width`, `height`, `enlarge`, and `extend`.
 *
 * All arguments are optional and can be omitted to use their default values.
 *
 * More information https://docs.imgproxy.net/generating_the_url?id=resize
 */
export interface Resize {
  resizingType?: ResizingType;
  width?: number;
  height?: number;
  enlarge?: Enlarge;
  extend?: ExtendType;
}

export interface Padding {
  top: number;
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
