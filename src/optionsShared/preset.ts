import { Preset, PresetOptionsPartial } from "../typesShared/preset";
import { guardParamIsUndef } from "../utils";

const getOpt = (options: PresetOptionsPartial): Preset | undefined =>
  options.preset || options.pr;

const test = (options: PresetOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: PresetOptionsPartial): string => {
  const preset = getOpt(options);

  guardParamIsUndef(preset, "preset");
  if (!Array.isArray(preset)) {
    throw new Error("preset option should be an array");
  }
  if (preset.length === 0) {
    throw new Error("preset option is empty array");
  }
  if (preset.some(item => typeof item !== "string")) {
    throw new Error("preset option should contain only strings");
  }

  return `pr:${preset.join(":")}`;
};

export { test, build };
