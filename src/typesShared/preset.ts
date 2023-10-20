/**
 * *Preset option*
 *
 * Defines a list of presets to be used by imgproxy. Feel free to use as many presets in a single URL as you need.
 *
 * Read more about presets in the {@link https://docs.imgproxy.net/presets | Presets} guide.
 *
 * @default empty
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=preset | preset option imgproxy docs}
 */
type Preset = string[];

/**
 * *Preset option*
 *
 * To describe the Preset option, you can use the keyword `preset` or `pr`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=preset
 */
interface PresetOptionsPartial {
  preset?: Preset;
  pr?: Preset;
}

export { Preset, PresetOptionsPartial };
