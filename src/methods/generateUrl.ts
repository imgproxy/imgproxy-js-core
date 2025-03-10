import { Options } from "../types";
import * as optionModules from "../options";
import { guardIsUndef, guardIsValidVal } from "../utils";
import type { URLImageInfo } from "./generateImageInfoUrl";
import { Settings } from "../settings";

const correctUrlTypes = {
  plain: true,
  base64: true,
  encrypted: true,
};

const allModules = Object.values(optionModules);
const presetOnlyModule = [optionModules.preset];

const generateUrl = (
  url: URLImageInfo,
  options?: Options,
  settings?: Settings
): string => {
  guardIsUndef(url.value, "url.value", "Must be a string");
  guardIsUndef(
    url.type,
    "url.type",
    `Valid values are: ${Object.keys(correctUrlTypes).join(", ")}`
  );
  guardIsValidVal(correctUrlTypes, url.type, "url.type");

  let optsPart = "";
  if (options) {
    const modules = settings?.onlyPresets ? presetOnlyModule : allModules;

    for (const optionModule of modules) {
      if (optionModule.test(options)) {
        optsPart += "/";
        optsPart += optionModule.build(options, settings);
      }
    }
  }

  let urlPart = "";

  if (url.type === "plain") {
    urlPart = `/plain/${url.value}`;
  } else if (url.type === "base64") {
    urlPart = `/${url.value}`;
  } else if (url.type === "encrypted") {
    urlPart = `/enc/${url.value}`;
  }

  return `${optsPart}${urlPart}`;
};

export default generateUrl;
