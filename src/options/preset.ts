import { Preset, PresetOptionsPartial } from "../types/preset";

const getOpt = (options: PresetOptionsPartial): Preset | undefined =>
  options.preset || options.pr;

const test = (options: PresetOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: PresetOptionsPartial): string => {
  const preset = getOpt(options);

  if (!preset) {
    throw new Error("preset option is undefined");
  } else if (!Array.isArray(preset)) {
    throw new Error("preset option should be an array");
  }

  return `preset:${preset.join(":")}`;
};

export { test, build };
