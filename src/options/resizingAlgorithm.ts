import type {
  ResizingAlgorithm,
  ResizingAlgorithmOptionsPartial,
} from "../types/resizingAlgorithm";
import { guardIsUndef, guardIsValidVal } from "../utils";

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

  guardIsUndef(resizingAlgorithmOpts, "resizing_algorithm");
  guardIsValidVal(correctValues, resizingAlgorithmOpts, "resizing_algorithm");

  return `ra:${resizingAlgorithmOpts}`;
};

export { test, build };
