import {
  ObjectsPositionOptions,
  ObjectsPositionOptionsPartial,
  OBJECTS_POSITION_OPTIONS,
  ObjectsPositionType,
  ObjectsPositionNormalOptions,
} from "../types/objectsPosition";
import { guardIsNotNum, guardIsOneOf, guardIsUndef } from "../utils";

const isPositionalType = (
  option: ObjectsPositionOptions
): option is ObjectsPositionNormalOptions =>
  OBJECTS_POSITION_OPTIONS.includes(option.type as ObjectsPositionType);

const getOpt = (
  options: ObjectsPositionOptionsPartial
): ObjectsPositionOptions | undefined =>
  options.objects_position || options.obj_pos || options.op;

export const test = (options: ObjectsPositionOptionsPartial): boolean =>
  Boolean(getOpt(options));

export const build = (options: ObjectsPositionOptionsPartial): string => {
  const opt = getOpt(options);

  guardIsUndef(opt, "objects_position");

  const type = opt.type;

  guardIsOneOf([...OBJECTS_POSITION_OPTIONS, "fp", "prop"], type, "type");

  if (isPositionalType(opt)) {
    if (opt.xOffset !== undefined)
      guardIsNotNum(opt.xOffset, "objects_position.xOffset");
    if (opt.yOffset !== undefined)
      guardIsNotNum(opt.yOffset, "objects_position.yOffset");

    const xOffset = opt.xOffset ?? "";
    const yOffset = opt.yOffset ?? "";

    return `op:${type}:${xOffset}:${yOffset}`;
  } else if (opt.type === "fp") {
    if (opt.x !== undefined)
      guardIsNotNum(opt.x, "objects_position.x", {
        addParam: { min: 0, max: 1 },
      });
    if (opt.y !== undefined)
      guardIsNotNum(opt.y, "objects_position.y", {
        addParam: { min: 0, max: 1 },
      });

    const x = opt.x ?? "";
    const y = opt.y ?? "";

    return `op:${type}:${x}:${y}`;
  } else if (type === "prop") {
    return `op:prop`;
  } else {
    throw new Error(`Unknown object position type: ${type}`);
  }
};
