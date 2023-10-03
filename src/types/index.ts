/**
 * *Auto rotate option*
 *
 * When set to `1`, `t` or `true`, imgproxy will automatically rotate images based on the EXIF Orientation parameter
 * (if available in the image meta data). The orientation tag will be removed from the image in all cases.
 * Normally this is controlled by the `IMGPROXY_AUTO_ROTATE` configuration
 * but this procesing option allows the configuration to be set for each request.
 *
 * @note If any value other than `1`, `t`, or `true` is passed, it will be recognized as `false`.
 *
 * @see
 * - `Auto rotate` https://docs.imgproxy.net/generating_the_url?id=auto-rotate
 * - `IMGPROXY_AUTO_ROTATE` https://docs.imgproxy.net/configuration?id=miscellaneous
 */
export type AutoRotate = 1 | "t" | true | false | string;

/**
 * *Auto rotate option*
 *
 * To describe the Auto rotate option, you can use the keyword `auto_rotate` or `ar`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=auto-rotate
 */
export interface AutoRotateOptionsPartial {
  auto_rotate?: AutoRotate;
  ar?: AutoRotate;
}

/**
 * *Background option*
 *
 * When set, imgproxy will fill the resulting image background with the specified color.
 * `r`, `g`, and `b` are the red, green and blue channel values of the background color (0-255).
 * `hex_color` is a hex-coded value of the color. Useful when you convert an image with alpha-channel to JPEG.
 *
 * With no arguments provided, disables any background manipulations.
 *
 * @example
 * {background: {r: 255, g: 255, b: 255}} - background in RGB format
 * {background: "ff00ff"} - background in hex format
 *
 * @default disabled
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=background
 */
export type Background = BackgroundRGB | string;

interface BackgroundRGB {
  r: number;
  g: number;
  b: number;
}

/**
 * *Background option*
 *
 * To describe the Background option, you can use the keyword `background` or `bg`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=background
 */

export interface BackgroundOptionsPartial {
  background?: Background;
  bg?: Background;
}

/**
 * *Background alpha option*. **PRO feature.**
 *
 * Adds an alpha channel to background. The value of alpha is a positive floating point number between 0 and 1.
 *
 * @example
 * {background_alpha: 0.5} - background alpha 0.5
 *
 * @default 1
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=background-alpha
 */
export type BackgroundAlpha = number;

/**
 * *Background alpha option*. **PRO feature.**
 *
 * To describe the Background alpha option, you can use the keyword `background_alpha` or `bga`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=background-alpha
 */
export interface BackgroundAlphaOptionsPartial {
  background_alpha?: BackgroundAlpha;
  bga?: BackgroundAlpha;
}

/**
 * *Brightness option*. **PRO feature.**
 *
 * When set, imgproxy will adjust brightness of the resulting image.
 * `brightness` is an integer number ranging from -255 to 255.
 *
 * @example
 * {brightness: 50} - increase brightness by 50
 * {brightness: -50} - decrease brightness by 50
 *
 * @default 0
 */
export type Brightness = number;

/**
 * *Brightness option*. **PRO feature.**
 *
 * To describe the Brightness option, you can use the keyword `brightness` or `br`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=brightness
 */
export interface BrightnessOptionsPartial {
  brightness?: Brightness;
  br?: Brightness;
}

/**
 * *Contrast option*. **PRO feature.**
 *
 * When set, imgproxy will adjust the contrast of the resulting image.
 * `contrast` is a positive floating point number, where a value of 1 leaves the contrast unchanged.
 *
 * @example
 * {contrast: 0.5} - decrease contrast by 50%
 * {contrast: 1.5} - increase contrast by 50%
 *
 * @default 1
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=contrast
 */
export type Contrast = number;

/**
 * *Contrast option*. **PRO feature.**
 *
 * To describe the Contrast option, you can use the keyword `contrast` or `co`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=contrast
 */
export interface ContrastOptionsPartial {
  contrast?: Contrast;
  co?: Contrast;
}

/**
 * *Crop option*
 *
 * Defines an area of the image to be processed (crop before resize).
 *
 * `width` and `height` define the size of the area:
 * - When `width` or `height` is greater than or equal to `1`, imgproxy treats it as an absolute value.
 * - When `width` or `height` is less than `1`, imgproxy treats it as a relative value.
 * - When `width` or `height` is set to `0`, imgproxy will use the full width/height of the source image.
 *
 * `gravity` (optional) accepts the same values as the gravity option.
 * When `gravity` is not set, imgproxy will use the value of the gravity option
 * or when `gravity` is not set, imgproxy will use `ce` gravity without offsets.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=crop
 */
export interface Crop {
  width: Width;
  height: Height;
  gravity?: Gravity;
}

/**
 * *Crop option*
 *
 * To describe the Crop option, you can use the keyword `crop` or `c`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=crop
 */
export interface CropOptionsPartial {
  crop?: Crop;
  c?: Crop;
}

/**
 * *DPR option*
 *
 * When set, imgproxy will multiply the image dimensions according to this factor for HiDPI
 * (Retina) devices. The value must be greater than `0`.
 *
 * @note The dpr option affects gravities offsets, watermark offsets, and paddings
 * to make the resulting image structures with and without the dpr option applied match.
 *
 * @default 1
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=dpr
 */
export type DPR = number;

/**
 * *DPR option*
 *
 * To describe the DPR option, you can use the keyword `dpr`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=dpr
 */
export interface DPROptionsPartial {
  dpr?: DPR;
}

/**
 * When set to `1`, `t` or `true`, imgproxy will enlarge the image if it is smaller than the given size.
 *
 * @default false
 *
 * @note If any value other than `1`, `t`, or `true` is passed, it will be recognized as `false`.
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
 * When `extend` is set to `1`, `t` or `true`, imgproxy will extend the image if it is smaller than the given size.
 *
 * `gravity` (optional) accepts the same values as the gravity option, except `sm` and `object-oriented gravity`
 *  When `gravity` is not set, imgproxy will use `ce` gravity without offsets.
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
 * @note If any value other than `1`, `t`, or `true` is passed, it will be recognized as `false`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=extend
 */
export interface ExtendType {
  extend: 1 | "t" | true | false | string;
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
 * *Extend aspect ratio option*
 *
 * When extend is set to `1`, `t` or `true`, imgproxy will extend the image to the requested aspect ratio.
 *
 * `gravity` (optional) accepts the same values as the gravity option, except `sm` and `object-oriented gravity`
 *  When `gravity` is not set, imgproxy will use `ce` gravity without offsets.
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
 * @note If any value other than `1`, `t`, or `true` is passed, it will be recognized as `false`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=extend-aspect-ratio
 */
export interface ExtendAspectRatio {
  extend: 1 | "t" | true | false | string;
  gravity?: BaseGravity | FPGravity;
}

/**
 * *Extend aspect ratio option*
 *
 * To describe the Extend aspect ratio option, you can use the keyword `extend_aspect_ratio`, `extend_ar`, or `exar`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=extend-aspect-ratio
 */
export interface ExtendAspectRatioOptionsPartial {
  extend_aspect_ratio?: ExtendAspectRatio;
  extend_ar?: ExtendAspectRatio;
  exar?: ExtendAspectRatio;
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
 * - `no`: north (top edge)
 * - `so`: south (bottom edge)
 * - `ea`: east (right edge)
 * - `we`: west (left edge)
 * - `noea`: north-east (top-right corner)
 * - `nowe`: north-west (top-left corner)
 * - `soea`: south-east (bottom-right corner)
 * - `sowe`: south-west (bottom-left corner)
 * - `ce`: center
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

/**
 * *Min height option*
 *
 * Defines the minimum height of the resulting image.
 *
 * @warning  When both `height` and `min-height` are set, the final image will be cropped according to `height`,
 * so use this combination with care.
 *
 * @default 0
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=min-height
 */
export type MinHeight = number;

/**
 * *Min height option*
 *
 * To describe the Min height option, you can use the keyword `min_height` or `mh`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=min-height
 */
export interface MinHeightOptionsPartial {
  min_height?: MinHeight;
  mh?: MinHeight;
}

/**
 * *Min width option*
 *
 * Defines the minimum width of the resulting image.
 *
 * @warning When both `width` and `min-width` are set, the final image will be cropped according to `width`,
 * so use this combination with care.
 *
 * @default 0
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=min-width
 */
export type MinWidth = number;

/**
 * *Min width option*
 *
 * To describe the Min width option, you can use the keyword `min_width` or `mw`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=min-width
 */
export interface MinWidthOptionsPartial {
  min_width?: MinWidth;
  mw?: MinWidth;
}

interface PaddingDetails {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

/**
 * *Padding option*
 *
 * Defines padding size using CSS-style syntax.
 * All arguments are optional but at least one dimension must be set.
 * Padded space is filled according to the `background` option.
 *
 * - `top` - top padding (and for all other sides if they haven’t been explicitly st)
 * - `right` - right padding (and left if it hasn’t been explicitly set)
 * - `bottom` - bottom padding
 * - `left` - left padding
 *
 *
 * @note
 * - Padding is applied after all image transformations (except watermarking) and enlarges the generated image.
 * This means that if your resize dimensions were 100x200px and you applied the `padding:10` option,
 * then you will end up with an image with dimensions of 120x220px.
 * - Padding follows the `dpr` option so it will also be scaled if you’ve set it.
 *
 * @example
 * {padding: 10} - 10px padding on all sides
 * {padding: {top:10, right: 20}} - 10px top and bottom padding, 20px left and right padding
 * {padding: {top: 10, right: 20, bottom: 30}} - 10px top padding, 20px left and right padding, 30px bottom padding
 * {padding: {bottom: 30, left: 40}} - 0px top padding, 0px right padding, 30px bottom padding, 40px left padding
 *
 * @see
 * - `padding` https://docs.imgproxy.net/generating_the_url?id=padding
 * - `background` https://docs.imgproxy.net/generating_the_url?id=background
 * - `dpr` https://docs.imgproxy.net/generating_the_url?id=dpr
 */
export type Padding = PaddingDetails | number;

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
 * *Rotate option*
 *
 * Rotates the image on the specified angle.
 * The orientation from the image metadata is applied before the rotation unless autorotation is disabled.
 *
 * @default 0
 */
export type Rotate = 0 | 90 | 180 | 270;

/**
 * *Rotate option*
 *
 * To describe the Rotate option, you can use the keyword `rotate` or `rot`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=rotate
 */
export interface RotateOptionsPartial {
  rotate?: Rotate;
  rot?: Rotate;
}

/**
 * *Saturation option*. **PRO feature.**
 *
 * When set, imgproxy will adjust saturation of the resulting image.
 * `saturation` is a positive floating-point number, where a value of 1 leaves the saturation unchanged.
 *
 * @example
 * {saturation: 0.5} - decrease saturation by 50%
 * {saturation: 1.5} - increase saturation by 50%
 *
 * @default 1
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=saturation
 */
export type Saturation = number;

/**
 * *Saturation option*. **PRO feature.**
 *
 * To describe the Saturation option, you can use the keyword `saturation` or `sa`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=saturation
 */
export interface SaturationOptionsPartial {
  saturation?: Saturation;
  sa?: Saturation;
}

/**
 * *Size option*
 *
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
 * *Trim option*
 *
 * Removes surrounding background.
 *
 * - `threshold` - color similarity tolerance.
 * - `color` - (optional) a hex-coded value of the color that needs to be cut off.
 * - `equal_hor` - (optional) set to `1`, `t` or `true`, imgproxy will cut only equal parts from left and right sides.
 * That means that if 10px of background can be cut off from the left and 5px from the right, then 5px will be cut off from both sides.
 * For example, this can be useful if objects on your images are centered but have non-symmetrical shadow.
 * - `equal_ver` - (optional) acts like `equal_hor` but for top/bottom sides.
 *
 * @warning Trimming requires an image to be fully loaded into memory.
 * This disables scale-on-load and significantly increases memory usage and processing time. Use it carefully with large images.
 *
 * @note
 * - If you know background color of your images then setting it explicitly via color
 * will also save some resources because imgproxy won’t need to automatically detect it.
 * - Use a color value of `FF00FF` for trimming transparent backgrounds as imgproxy uses magenta as a transparency key.
 * - The trimming of animated images is not supported.
 * - In the `equal_hor` and `equal_ver` parameters, if any value other than `1`, `t`, or `true` is passed, it will be recognized as false.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=trim
 */
export interface Trim {
  threshold: number;
  color?: string;
  equal_hor?: 1 | "t" | true | false | string;
  equal_ver?: 1 | "t" | true | false | string;
}

/**
 * *Trim option*
 *
 * To describe the Trim option, you can use the keyword `trim` or `t`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=trim
 */
export interface TrimOptionsPartial {
  trim?: Trim;
  t?: Trim;
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

interface ZoomObj {
  zoom_x: number;
  zoom_y: number;
}

/**
 * *Zoom option*
 *
 * When set, imgproxy will multiply the image dimensions according to these factors. The values must be greater than `0`.
 *
 * Can be combined with width and height options.
 * In this case, imgproxy calculates scale factors for the provided size and then multiplies it with the provided zoom factors.
 *
 * @note Unlike the `dpr` option, the `zoom` option doesn’t affect gravities offsets, watermark offsets, and paddings.
 *
 * @default 1
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=zoom
 */

export type Zoom = ZoomObj | number;

/**
 * *Zoom option*
 *
 * To describe the Zoom option, you can use the keyword `zoom` or `z`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=zoom
 */

export interface ZoomOptionsPartial {
  zoom?: Zoom;
  z?: Zoom;
}

export type Options = AutoRotateOptionsPartial &
  BackgroundOptionsPartial &
  BackgroundAlphaOptionsPartial &
  BrightnessOptionsPartial &
  ContrastOptionsPartial &
  CropOptionsPartial &
  DPROptionsPartial &
  EnlargeOptionsPartial &
  ExtendOptionsPartial &
  ExtendAspectRatioOptionsPartial &
  ExtensionsOptionsPartial &
  GravityOptionsPartial &
  HeightOptionsPartial &
  MinHeightOptionsPartial &
  MinWidthOptionsPartial &
  PaddingOptionsPartial &
  ResizeOptionsPartial &
  ResizingAlgorithmOptionsPartial &
  ResizingTypeOptionsPartial &
  RotateOptionsPartial &
  SaturationOptionsPartial &
  SizeOptionsPartial &
  TrimOptionsPartial &
  WidthOptionsPartial &
  ZoomOptionsPartial;
