import type { AverageImageInfoOptionsPartial } from "./average";
import type { BHImageInfoOptionsPartial } from "./blurhash";
import type { CropOptionsPartial } from "../sharedTypes/crop";
import type { DCImageInfoOptionsPartial } from "./dominantColors";
import type { DetectObjectsImageInfoOptionsPartial } from "./detectObjects";
import type { DimensionsImageInfoOptionsPartial } from "./dimensions";
import type { ExifImageInfoOptionsPartial } from "./exif";
import type { FormatImageInfoOptionsPartial } from "./format";
import type { IptcImageInfoOptionsPartial } from "./iptc";
import type { PaletteImageInfoOptionsPartial } from "./palette";
import type { SizeImageInfoOptionsPartial } from "./size";
import type { VideoMetaImageInfoOptionsPartial } from "./videoMeta";
import type { XmpImageInfoOptionsPartial } from "./xmp";

export type Options = AverageImageInfoOptionsPartial &
  BHImageInfoOptionsPartial &
  CropOptionsPartial &
  DCImageInfoOptionsPartial &
  DetectObjectsImageInfoOptionsPartial &
  DimensionsImageInfoOptionsPartial &
  ExifImageInfoOptionsPartial &
  FormatImageInfoOptionsPartial &
  IptcImageInfoOptionsPartial &
  PaletteImageInfoOptionsPartial &
  SizeImageInfoOptionsPartial &
  VideoMetaImageInfoOptionsPartial &
  XmpImageInfoOptionsPartial;
