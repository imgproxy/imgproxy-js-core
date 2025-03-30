/**
 * *Duotone options*
 *
 * When intensity is greater than zero, imgproxy will convert the resulting image to duotone.
 */
export interface Duotone {
  /** Floating-point number between 0-1 defining effect strength */
  intensity: number;
  /** Hex color for dark areas */
  color1?: string;
  /** Hex color for light areas */
  color2?: string;
}

export interface DuotoneOptionsPartial {
  duotone?: Duotone;
  dt?: Duotone;
}
