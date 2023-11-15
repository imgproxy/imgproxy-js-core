import { Preset, PresetOptionsPartial } from "../typesShared/preset";
import { guardIsUndef, guardIsNotArray } from "../utils";

const getOpt = (options: PresetOptionsPartial): Preset | undefined =>
  options.preset || options.pr;

const test = (options: PresetOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: PresetOptionsPartial): string => {
  const preset = getOpt(options);

  guardIsUndef(preset, "preset");
  guardIsNotArray(preset, "preset");

  if (preset.some(item => typeof item !== "string")) {
    throw new Error("preset option should contain only strings");
  }

  return `pr:${preset.join(":")}`;
};

export { test, build };
