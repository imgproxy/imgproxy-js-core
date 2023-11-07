import type {
  ResizingAlgorithm,
  ResizingAlgorithmOptionsPartial,
} from "../types/resizingAlgorithm";
import { errorParamIsUndef } from "../utils";

const correctValues = {
  nearest: true,
  linear: true,
  cubic: true,
  lanczos2: true,
  lanczos3: true,
};

const getOpt = (
  options: ResizingAlgorithmOptionsPartial
): ResizingAlgorithm | undefined => options.resizing_algorithm || options.ra;

const test = (options: ResizingAlgorithmOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: ResizingAlgorithmOptionsPartial): string => {
  const resizingAlgorithmOpts = getOpt(options);

  errorParamIsUndef(resizingAlgorithmOpts, "resizing_algorithm");
  if (!correctValues[resizingAlgorithmOpts as ResizingAlgorithm]) {
    throw new Error(
      "resizing_algorithm option is not correct. You can use: 'nearest', 'linear', 'cubic', 'lanczos2', 'lanczos3'"
    );
  }

  return `ra:${resizingAlgorithmOpts}`;
};

export { test, build };
