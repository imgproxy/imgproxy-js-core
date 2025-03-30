/**
 * *Monochrome option*. **PRO feature**
 *
 * When `intensity` is greater than zero, imgproxy will convert the resulting image to monochrome.
 */
export interface Monochrome {
  /** Floating-point number between 0-1 defining effect strength */
  intensity: number;
  /** Optional hex color for monochrome palette base */
  color?: string;
}

export interface MonochromeOptionsPartial {
  monochrome?: Monochrome;
  mc?: Monochrome;
}
