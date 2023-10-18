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
 * BaseGravity. When imgproxy needs to cut some parts of the image, it is guided by the gravity option.
 *
 *
 * @param {GravityType} type - Must be one of the following values: `no`, `so`, `ea`, `we`, `noea`, `nowe`, `soea`, `sowe`, `ce`.
 * @param {number} [x_offset] - The horizontal offset of the focal point from the type value.
 * @param {number} [y_offset] - The vertical offset of the focal point from the type value.
 *
 * @example
 * // In this case we set the image's focal point to be in the middle of its top edge.
 * {gravity: {type: "no"}}
 *
 * // In this case we set the image's focal point to be in the middle of its top edge and shift this point 10px to the right and 10px down. This way, when resizing with imgproxy, it will be based on this specified point.
 * {gravity: {type: "no", x_offset: 10, y_offset: 10}}
 *
 * // In this case we set the image's focal point to be in the bottom right corner and shift this point 10px to the left and 20px to the up.
 * {gravity: {type: "soea", x_offset: -10, y_offset: -20}}
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=gravity
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
 * @param {string} type - Must be `sm`.
 *
 * @example
 * {gravity: {type: "sm"}}
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=gravity
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
 *
 * @param {string} type - Must be `fp`.
 * @param {number} x - The horizontal offset of the focal point from the type value.
 * @param {number} y - The vertical offset of the focal point from the type value.
 *
 * @example
 * {gravity: {type: "fp", x: 0.5, y: 0.5}}
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=gravity
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
 *
 * @param {string} type - Must be `obj`.
 * @param {string[]} class_names - Array of class names.
 *
 * @example
 * {gravity: {type: "obj", class_names: ["face", "person"]}}
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=gravity
 */
interface ObjGravity {
  type: "obj";
  class_names: string[];
}

/**
 * *Gravity option*
 *
 * When imgproxy needs to cut some parts of the image, it is guided by the gravity option.
 *
 * *Base gravity*.
 * @param {GravityType} type - Must be one of the following values: `no`, `so`, `ea`, `we`, `noea`, `nowe`, `soea`, `sowe`, `ce`.
 * @param {number} [x_offset] - The horizontal offset of the focal point from the type value.
 * @param {number} [y_offset] - The vertical offset of the focal point from the type value.fset` (optional). The vertical offset of the focal point from the type value.
 *
 * Available type values:
 * - `no`: north (top edge)
 * - `so`: south (bottom edge)
 * - `ea`: east (right edge)
 * - `we`: west (left edge)
 * - `noea`: north-east (top-right corner)
 * - `nowe`: north-west (top-left corner)
 * - `soea`: south-east (bottom-right corner)
 * - `sowe`: south-west (bottom-left corner)
 * - `ce`: center (default value)
 
 *
 * *Smart gravity*.
 * libvips detects the most “interesting” section of the image and considers it as the center of the resulting image.
 * Offsets are not applicable here.
 * @param {string} type - Must be `sm`.
 *
 * *Object-oriented gravity*. **PRO feature.**
 * imgproxy detects objects of provided classes on the image and calculates the resulting image center using their positions.
 * If class names are omited, imgproxy will use all the detected objects.
 * @param {string} type - Must be `obj`.
 * @param {string[]} class_names - Array of class names.
 *
 * *FP gravity*.
 * The gravity focus point.
 * `x` and `y` are floating point numbers between `0` and `1` that define the coordinates of the center of the resulting image.
 * Treat `0` and `1` as right/left for `x` and top/bottom for `y`.
 * @param {string} type - Must be `fp`.
 * @param {number} x - The horizontal offset of the focal point from the type value.
 * @param {number} y - The vertical offset of the focal point from the type value.
 *
 * @default {gravity: {type: "ce", x_offset: 0, y_offset: 0}}
 *
 * @example <caption>Base gravity</caption>
 * // In this case we set the image's focal point to be in the middle of its top edge.
 * {gravity: {type: "no"}}
 *
 * // In this case we set the image's focal point to be in the middle of its top edge and shift this point 10px to the right and 10px down. This way, when resizing with imgproxy, it will be based on this specified point.
 * {gravity: {type: "no", x_offset: 10, y_offset: 10}}
 *
 * // In this case we set the image's focal point to be in the bottom right corner and shift this point 10px to the left and 20px to the up.
 * {gravity: {type: "soea", x_offset: -10, y_offset: -20}}
 *
 * @example <caption>Smart gravity</caption>
 * {gravity: {type: "sm"}}
 *
 * @example <caption>Object-oriented gravity</caption>
 * {gravity: {type: "obj", class_names: ["face", "person"]}}
 *
 * @example <caption>FP gravity</caption>
 * {gravity: {type: "fp", x: 0.5, y: 0.5}}
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=gravity
 */
type Gravity = BaseGravity | SmartGravity | ObjGravity | FPGravity;

/**
 * *Gravity option*
 *
 * To describe the Gravity option, you can use the keyword `gravity` or `g`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=gravity
 */
interface GravityOptionsPartial {
  gravity?: Gravity;
  g?: Gravity;
}

export { BaseGravity, FPGravity, ObjGravity, Gravity, GravityOptionsPartial };
