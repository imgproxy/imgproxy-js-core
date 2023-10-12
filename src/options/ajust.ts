import type { Ajust, AjustOptionsPartial } from "../types/ajust";

const getOpt = (options: AjustOptionsPartial): Ajust | undefined =>
  options.ajust || options.aj;

const test = (options: AjustOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: AjustOptionsPartial): string => {
  const ajustOpts = getOpt(options);

  if (!ajustOpts) {
    throw new Error("ajust options are undefined");
  } else if (
    ajustOpts.brightness &&
    (ajustOpts.brightness > 255 || ajustOpts.brightness < -255)
  ) {
    throw new Error("brightness must be in range [-255, 255]");
  }

  const brightness = ajustOpts.brightness || "";
  const contrast = ajustOpts.contrast || "";
  const saturation = ajustOpts.saturation || "";

  return `aj:${brightness}:${contrast}:${saturation}`;
};

export { test, build };
