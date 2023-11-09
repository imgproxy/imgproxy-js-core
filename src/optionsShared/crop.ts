import type { Crop, CropOptionsPartial } from "../typesShared/crop";
import * as gravityOpt from "../options/gravity";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (options: CropOptionsPartial): Crop | undefined =>
  options.crop || options.c;

const test = (options: CropOptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: CropOptionsPartial): string => {
  const cropOpts = getOpt(options);

  guardIsUndef(cropOpts, "crop");
  const { width, height } = cropOpts;
  guardIsUndef(width, "crop.width");
  guardIsUndef(height, "crop.height");
  guardIsNotNum(width, "crop.width", { addParam: { min: 0 } });
  guardIsNotNum(height, "crop.height", { addParam: { min: 0 } });

  const gravity = gravityOpt.test(cropOpts)
    ? gravityOpt.build(cropOpts, { headless: true })
    : "";

  return `c:${width}:${height}:${gravity}`.replace(/:+$/, "");
};

export { test, build };
