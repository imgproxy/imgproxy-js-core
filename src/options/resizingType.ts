import { ResizingTypeOptionsPartial, ResizingType } from "../types";

const getOpt = (
  options: ResizingTypeOptionsPartial
): ResizingType | undefined => options.resizing_type || options.rt;

const test = (options: ResizingTypeOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: ResizingTypeOptionsPartial): string => {
  const resizingTypeOpts = getOpt(options);

  if (!resizingTypeOpts) {
    throw new Error("resizing type option is undefined");
  }

  return `resizing_type:${resizingTypeOpts}`;
};

export { test, build };
