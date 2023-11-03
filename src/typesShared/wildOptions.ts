/**
 * *Raw option*.
 *
 * This is a type for options that are not yet supported by the library.
 *
 * When using this, you should supply the option's name as the first element of the array. Follow this with the option's parameters, separated by commas.
 *
 * @example
 * // Option name is "resize", parametres is resizing_type: "force", width: 100, height: 200
 * rawOption: [["resize", "force", 100, 200 ]]
 *
 * // Option name is "resize", parametres is resizing_type: "fill", width: 100, height: 200 and one more Option with name resizing_algorithm: "lanczos2"
 * rawOption: [["resize", "fill", 100, 200], ["resizing_algorithm", "lanczos2"]]
 */
type WildOptions = Array<Array<string | number | boolean>>;

/**
 * *Raw options*.
 *
 * This is a type for options that are not yet supported by the library.
 *
 */
interface WildOptionsPartial {
  wild_options?: WildOptions;
}

export { WildOptions, WildOptionsPartial };
