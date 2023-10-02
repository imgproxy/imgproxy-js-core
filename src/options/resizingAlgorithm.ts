import { ResizingAlgorithm, ResizingAlgorithmOptionsPartial } from "../types";

const getOpt = (
  options: ResizingAlgorithmOptionsPartial
): ResizingAlgorithm | undefined => options.resizing_algorithm || options.ra;

const test = (options: ResizingAlgorithmOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: ResizingAlgorithmOptionsPartial): string => {
  const resizingAlgorithmOpts = getOpt(options);

  if (!resizingAlgorithmOpts) {
    throw new Error("resizing algorithm options are undefined");
  }

  return `resizing_algorithm:${resizingAlgorithmOpts}`;
};

export { test, build };
