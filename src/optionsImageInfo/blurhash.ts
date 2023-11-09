import type {
  Blurhash,
  BHImageInfoOptionsPartial,
} from "../typesImageInfo/blurhash";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (options: BHImageInfoOptionsPartial): Blurhash | undefined => {
  if ("blurhash" in options) {
    return options.blurhash;
  } else if ("bh" in options) {
    return options.bh;
  }

  return undefined;
};

const test = (options: BHImageInfoOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: BHImageInfoOptionsPartial): string => {
  const blurhashOpts = getOpt(options);

  guardIsUndef(blurhashOpts, "blurhash");
  const { x_components, y_components } = blurhashOpts;

  guardIsUndef(x_components, "blurhash.x_components");
  guardIsUndef(y_components, "blurhash.y_components");
  guardIsNotNum(x_components, "blurhash.x_components", {
    addParam: { min: 0, max: 9 },
  });
  guardIsNotNum(y_components, "blurhash.y_components", {
    addParam: { min: 0, max: 9 },
  });

  return `bh:${x_components}:${y_components}`;
};

export { test, build };
