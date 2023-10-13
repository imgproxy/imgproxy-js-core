import type {
  ResizingTypeOptionsPartial,
  ResizingType,
} from "../types/resizingType";

const correctValues = {
  fit: true,
  fill: true,
  fill_down: true,
  force: true,
  auto: true,
};

const getOpt = (
  options: ResizingTypeOptionsPartial
): ResizingType | undefined => options.resizing_type || options.rt;

const test = (options: ResizingTypeOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: ResizingTypeOptionsPartial): string => {
  const resizingTypeOpts = getOpt(options);

  if (!resizingTypeOpts) {
    throw new Error("resizing_type option is undefined");
  }

  if (!correctValues[resizingTypeOpts]) {
    throw new Error(
      "resizing_type option is not correct. You can use: fit, fill, fill_down, force, auto"
    );
  }

  return `rt:${resizingTypeOpts}`;
};

export { test, build };
