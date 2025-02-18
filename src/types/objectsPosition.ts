export const OBJECTS_POSITION_OPTIONS = [
  "no",
  "so",
  "ea",
  "we",
  "noea",
  "nowe",
  "soea",
  "sowe",
  "ce",
] as const;

export type ObjectsPositionType = (typeof OBJECTS_POSITION_OPTIONS)[number];

export type ObjectsPositionSpecialType =
  | "fp" // the focus point position
  | "prop"; // the proportional position

export type ObjectsPositionNormalOptions = {
  /**
   * specifies the position type
   */
  type: ObjectsPositionType;
  /**
   * (optional) specifies the position offset along the X axis.
   */
  xOffset?: number;
  /**
   * (optional) specifies the position offset along the X axis.
   */
  yOffset?: number;
};

export type ObjectsPositionFocusPointOptions = {
  /**
   * Focus point position
   */
  type: "fp";
  /**
   * `x` is floating point number between 0 and 1 that define the coordinates of the center of the objects' area in the
   * resulting image. Treat 0 and 1 as right/left
   */
  x?: number;
  /**
   * `y` is floating point number between 0 and 1 that define the coordinates of the center of the objects' area in the
   * resulting image. Treat 0 and 1 as top/bottom.
   */
  y?: number;
};

export type ObjectctPositionProportionalOptions = {
  type: "prop";
};

/**
 * *Objcts position option*. **PRO feature.**
 *
 * When imgproxy needs to cut some parts of the image, and the obj/objw gravity is used, the objects_position option
 * allows you to adjust the position of the detected objects on the resulting image.
 *
 * @default ce:0:0
 *
 * Special positions:
 * - objects_position:fp:%x:%y: the focus point position. x and y are floating point numbers between 0 and 1 that define the coordinates of the center of the objects' area in the resulting image. Treat 0 and 1 as right/left for x and top/bottom for y.
 * - objects_position:prop: the proportional position. imgproxy will try to set object offsets in the resulting image proportional to their offsets in the original image. This position type allows the picture scene to be maintained after cropping.
 *
 * @see https://docs.imgproxy.net/usage/processing#objects-position
 */
export type ObjectsPositionOptions =
  | ObjectsPositionNormalOptions
  | ObjectsPositionFocusPointOptions
  | ObjectctPositionProportionalOptions;

export interface ObjectsPositionOptionsPartial {
  objects_position?: ObjectsPositionOptions;
  obj_pos?: ObjectsPositionOptions;
  op?: ObjectsPositionOptions;
}
