import type { Crop } from "./typesShared/crop";
import type { Preset } from "./typesShared/preset";
import type { WildOptions } from "./typesShared/wildOptions";
import type { Ajust } from "./types/ajust";
import type { Autoquality } from "./types/autoquality";
import type { Background } from "./types/background";
import type { BlurDetections } from "./types/blurDetections";
import type { DrawDetections } from "./types/drawDetections";
import type { Extend } from "./types/extend";
import type { Filename } from "./types/filename";
import type { FormatQuality } from "./types/formatQuality";
import type { Gradient } from "./types/gradient";
import type { Gravity } from "./types/gravity";
import type { JPEGOptions } from "./types/jpegOptions";
import type { Padding } from "./types/padding";
import type { PNGOptions } from "./types/pngOptions";
import type { Resize } from "./types/resize";
import type { Trim } from "./types/trim";
import type { UnsharpMasking } from "./types/unsharpMasking";
import type { Zoom } from "./types/zoom";
import type { Average } from "./typesImageInfo/average";
import type { Blurhash } from "./typesImageInfo/blurhash";
import type { DominantColors } from "./typesImageInfo/dominantColors";

export const normalizeBoolean = (value: 1 | string | boolean): string => {
  if (value === true || value === "t" || value === 1) {
    return "t";
  }
  return "f";
};

export const errorParamIsUndef = (
  param:
    | number
    | string
    | boolean
    | Crop
    | Preset
    | WildOptions
    | Ajust
    | Autoquality
    | Background
    | BlurDetections
    | DrawDetections
    | Extend
    | Filename
    | FormatQuality
    | Gradient
    | Gravity
    | JPEGOptions
    | Padding
    | PNGOptions
    | Resize
    | Trim
    | UnsharpMasking
    | Zoom
    | Average
    | Blurhash
    | DominantColors
    | undefined,
  paramName: string,
  addInfo?: string
): void => {
  if (param === undefined) {
    throw new Error(
      `${paramName}${paramName.includes(".") ? "" : " option"} is undefined${
        addInfo ? `. ${addInfo}` : ""
      }`
    );
  }
};
