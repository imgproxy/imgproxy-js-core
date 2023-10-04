/**
 * *Rotate option*
 *
 * Rotates the image on the specified angle.
 * The orientation from the image metadata is applied before the rotation unless autorotation is disabled.
 *
 * Available values:
 * - `0` - no rotation
 * - `90` - rotate 90 degrees clockwise
 * - `180` - rotate 180 degrees
 * - `270` - rotate 90 degrees counterclockwise
 *
 * @default 0
 */
type Rotate = 0 | 90 | 180 | 270;

/**
 * *Rotate option*
 *
 * To describe the Rotate option, you can use the keyword `rotate` or `rot`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=rotate
 */
interface RotateOptionsPartial {
  rotate?: Rotate;
  rot?: Rotate;
}

export { Rotate, RotateOptionsPartial };
