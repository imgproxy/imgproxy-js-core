import type { BlurAreas, BlurAreasOptionsPartial } from "../types/blurAreas";
import { guardIsUndef, guardIsNotNum, guardIsNotArray } from "../utils";

const getOpt = (options: BlurAreasOptionsPartial): BlurAreas | undefined =>
  options.blur_areas ?? options.ba;

const test = (options: BlurAreasOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: BlurAreasOptionsPartial): string => {
  const blurAreasOpts = getOpt(options);

  guardIsUndef(blurAreasOpts, "blur_areas");
  guardIsNotNum(blurAreasOpts.sigma, "blur_areas.sigma", {
    addParam: { min: 0 },
  });
  guardIsNotArray(blurAreasOpts.areas, "blur_areas.areas");

  const parts: Array<string | number> = [blurAreasOpts.sigma];

  blurAreasOpts.areas.forEach((area, index) => {
    guardIsNotNum(area?.left, `blur_areas.areas[${index}].left`, {
      addParam: { min: 0, max: 1 },
    });
    guardIsNotNum(area.top, `blur_areas.areas[${index}].top`, {
      addParam: { min: 0, max: 1 },
    });
    guardIsNotNum(area.width, `blur_areas.areas[${index}].width`, {
      addParam: { min: 0, max: 1 },
    });
    guardIsNotNum(area.height, `blur_areas.areas[${index}].height`, {
      addParam: { min: 0, max: 1 },
    });
    parts.push(area.left, area.top, area.width, area.height);
  });

  return `ba:${parts.join(":")}`;
};

export { test, build };
