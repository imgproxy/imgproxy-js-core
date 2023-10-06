/**
 * *Autoquality option*. **PRO feature**
 *
 * Redefines autoquality settings.
 * All arguments are optional and can be omitted.
 *
 * @param {"none" | "size" | "dssim" | "ml"} [method="none"] - (optional) the method of quality calculation. Default: `none`.
 *
 * Available methods:
 * - `none` - Disable the autoquality.
 * - `size` - With this method, imgproxy will try to degrade the quality so your image fits the desired file size.
 * With this method parameter `target` must be equal to the desired file size.
 * - `dssim` - With this method imgproxy will try to select a level of quality so that the saved image
 * will have the desired {@link https://en.wikipedia.org/wiki/Structural_similarity#Structural_Dissimilarity | DSSIM} value.
 * With this method parameter `target` must be equal to the desired DSSIM value.
 * - `ml` - This method is almost the same as autoquality with {@link https://docs.imgproxy.net/autoquality?id=autoquality-by-dssim | DSSIM}
 * but imgproxy will try to predict the initial quality using neural networks.
 * This requires neural networks to be configured (see the config examlpe or the config documentation).
 * If a neural network for the resulting format is not provided,
 * the {@link https://docs.imgproxy.net/autoquality?id=autoquality-by-dssim | DSSIM} method will be used instead.
 * When this method is used, imgproxy will save JPEG images with the most optimal
 * {@link https://docs.imgproxy.net/configuration?id=advanced-jpeg-compression | advanced JPEG compression}
 * settings, ignoring config and processing options.
 * With this method parameter `target` must be equal to the desired DSSIM value.
 * If you trust your neural network’s autoquality, you may want to set `allowed_error` to `1`
 * (the maximum possible DSSIM value). In this case, imgproxy will always use the quality predicted by the neural network.
 *
 * @param {number} [target=0.02] - (optional) desired value of the autoquality method metric.
 * The value can be any positive number. Default: `0.02`
 * @param {number} [min_quality=70] - (optional) the minimal quality imgproxy can use. Default: `70`
 * @param {number} [max_quality=80] - (optional) the maximum quality imgproxy can use. Default: `80`
 * @param {number} [allowed_error=0.001] - (optional) the allowed `target` error. Available range values from `0` to `1`.
 * Applicable only to `dssim` and `ml` methods. Default: `0.001`
 *
 * @warning Autoquality requires the image to be saved several times.
 * Use it only when you prefer the resulting size and quality over the speed.
 *
 * @example
 * // Auquality with size method
 * {autoquality: {method: "size", target: 10240, min_quality: 10, max_quality: 80}}
 * // Auquality with dssim method, `allowed_error` - we're happy enough if the resulting DSSIM will differ from the desired by `0.001`
 * {autoquality: {method: "dssim", target: 0.02, min_quality: 70, max_quality: 80, allowed_error: 0.001}}
 * // Auquality with ml method
 * {autoquality: {method: "ml", target: 0.02, min_quality: 70, max_quality: 80, allowed_error: 0.001}}
 *
 * @see
 * - {@link https://docs.imgproxy.net/generating_the_url?id=autoquality | autoquality option imgproxy docs}
 * - {@link https://docs.imgproxy.net/autoquality | more info about autoquality option imgproxy docs}
 * - {@link https://docs.imgproxy.net/autoquality?id=autoquality-by-file-size | autoquality by file size imgproxy docs}
 * - {@link https://docs.imgproxy.net/autoquality?id=autoquality-by-dssim | autoquality by DSSIM imgproxy docs}
 * - {@link https://docs.imgproxy.net/autoquality?id=autoquality-with-ml | autoquality with ML imgproxy docs}
 */
interface Autoquality {
  method?: "none" | "size" | "dssim" | "ml";
  target?: number;
  min_quality?: number;
  max_quality?: number;
  allowed_error?: number;
}

/**
 * *Autoquality option*. **PRO feature**
 *
 * To describe the Autoquality option, you can use the keyword `autoquality` or `aq`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=autoquality
 */
interface AutoqualityOptionsPartial {
  autoquality?: Autoquality;
  aq?: Autoquality;
}

export { Autoquality, AutoqualityOptionsPartial };
