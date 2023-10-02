/**
 * When set to `1`, `t` or `true`, imgproxy will enlarge the image if it is smaller than the given size.
 *
 * @default false
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=enlarge
 */
export type Enlarge = 1 | "t" | true | false | string;

/**
 * *Enlarge option*
 *
 * To describe the Enlarge option, you can use the keyword `enlarge` or `el`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=enlarge
 */
export interface EnlargeOptionsPartial {
  enlarge?: Enlarge;
  el?: Enlarge;
}

/**
 * *Extend option*
 *
 * When `extend` is set to 1, t or true, imgproxy will extend the image if it is smaller than the given size.
 *
 * `gravity` (optional) accepts the same values as the gravity option, except sm. When `gravity` is not set, imgproxy will use `ce` gravity without offsets.
 *
 * @default
 * {
 *   extend: "false",
 *   gravity: {
 *     type: "ce",
 *     x_offset: 0,
 *     y_offset: 0,
 *   },
 * }
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=extend
 */
export interface ExtendType {
  extend: "1" | "t" | "true" | "false" | string;
  gravity?: BaseGravity | FPGravity;
}

/**
 * *Extend option*
 *
 * To describe the Extend option, you can use the keyword `extend` or `ex`.
 *
 * When `extend` is set to 1, t or true, imgproxy will extend the image if it is smaller than the given size.
 * `gravity` (optional) accepts the same values as the gravity option, except sm. When `gravity` is not set, imgproxy will use `ce` gravity without offsets.
 *
 * @default false:ce:0:0
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=extend
 */
export interface ExtendOptionsPartial {
  extend?: ExtendType;
  ex?: ExtendType;
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

/**
 * *Format option*
 *
 * To describe the Format option, you can use the keyword `format`, `f`, or `ext`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=format
 */
export interface ExtensionsOptionsPartial {
  format?: Extensions;
  f?: Extensions;
  ext?: Extensions;
}

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
export interface BaseGravity {
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
export interface FPGravity {
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
export interface ObjGravity {
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
 * *Gravity option*
 *
 * To describe the Gravity option, you can use the keyword `gravity` or `g`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=gravity
 */
export interface GravityOptionsPartial {
  gravity?: Gravity;
  g?: Gravity;
}

/**
 * *Height option*
 *
 * Defines the height of the resulting image. When set to `0`, imgproxy will calculate resulting height using the defined width and source aspect ratio.
 * When set to `0` and resizing type is `force`, imgproxy will keep the original height.
 *
 * @default 0
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=height
 */
export type Height = number;

/**
 * *Height option*
 *
 * To describe the Height option, you can use the keyword `height` or `h`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=height
 */
export interface HeightOptionsPartial {
  height?: Height;
  h?: Height;
}

export interface Padding {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

/**
 * *Padding option*
 *
 * To describe the Padding option, you can use the keyword `padding` or `pd`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=padding
 */
export interface PaddingOptionsPartial {
  padding?: Padding;
  pd?: Padding;
}

/**
 * This is a meta-option that defines the `resizing_type`, `width`, `height`, `enlarge`, and `extend`.
 *
 * All arguments are optional and can be omitted to use their default values.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=resize
 */
export interface Resize {
  resizing_type?: ResizingType;
  width?: Width;
  height?: Height;
  enlarge?: Enlarge;
  extend?: ExtendType;
}

/**
 * *Resize option*
 *
 * To describe the Resize option, you can use the keyword `resize` or `rs`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=resize
 */
export interface ResizeOptionsPartial {
  resize?: Resize;
  rs?: Resize;
}

/**
 * *Resizing algorithm option.*
 * **PRO feature.**
 *
 * Defines the algorithm that imgproxy will use for resizing. Supported algorithms are `nearest`, `linear`, `cubic`, `lanczos2`, and `lanczos3`.
 *
 * @default lanczos3
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=resizing-algorithm
 */
export type ResizingAlgorithm =
  | "nearest"
  | "linear"
  | "cubic"
  | "lanczos2"
  | "lanczos3";

/** *Resizing algorithm option.*
 * **PRO feature.**
 *
 * To describe the Resizing algorithm option, you can use the keyword `resizing_algorithm` or `ra`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=resizing-algorithm
 */
export interface ResizingAlgorithmOptionsPartial {
  resizing_algorithm?: ResizingAlgorithm;
  ra?: ResizingAlgorithm;
}

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
 * @default fit
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=resizing-type
 */
export type ResizingType = "fit" | "fill" | "fill_down" | "force" | "auto";

/**
 * *Resizing type option*
 *
 * To describe the Resizing type option, you can use the keyword `resizing_type` or `rt`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=resizing-type
 */
export interface ResizingTypeOptionsPartial {
  resizing_type?: ResizingType;
  rt?: ResizingType;
}

/**
 * This is a meta-option that defines the `width`, `height`, `enlarge`, and `extend`.
 *
 * All arguments are optional and can be omitted to use their default values.
 *
 * @see width https://docs.imgproxy.net/generating_the_url?id=width
 * @see height https://docs.imgproxy.net/generating_the_url?id=height
 * @see enlarge https://docs.imgproxy.net/generating_the_url?id=enlarge
 * @see extend https://docs.imgproxy.net/generating_the_url?id=extend
 *
 * @see size https://docs.imgproxy.net/generating_the_url?id=size
 */
export interface Size {
  width?: Width;
  height?: Height;
  enlarge?: Enlarge;
  extend?: ExtendType;
}

/**
 * *Size option*
 *
 * To describe the Size option, you can use the keyword `size` or `s`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=size
 */
export interface SizeOptionsPartial {
  size?: Size;
  s?: Size;
}

/**
 * *Width option*
 *
 * Defines the width of the resulting image. When set to `0`, imgproxy will calculate width using the defined height and source aspect ratio.
 * When set to `0` and resizing type is `force`, imgproxy will keep the original width.
 *
 * @default 0
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=width
 */
export type Width = number;

/**
 * *Width option*
 *
 * To describe the Width option, you can use the keyword `width` or `w`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=width
 */
export interface WidthOptionsPartial {
  width?: Width;
  w?: Width;
}

export type Options = EnlargeOptionsPartial &
  ExtendOptionsPartial &
  ExtensionsOptionsPartial &
  GravityOptionsPartial &
  HeightOptionsPartial &
  PaddingOptionsPartial &
  ResizeOptionsPartial &
  ResizingAlgorithmOptionsPartial &
  ResizingTypeOptionsPartial &
  SizeOptionsPartial &
  WidthOptionsPartial;
