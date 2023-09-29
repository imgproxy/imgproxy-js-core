import { Options } from "../types";

const generateUrl = (url: string, options: Options): string => {
  const format = options.format || options.f || options.ext;

  return `${options}/${url}${format ? `@${format}` : ""}`;
};

export default generateUrl;
