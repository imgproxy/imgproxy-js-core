import type { AverageImageInfoOptionsPartial } from "./average";
import type { BHImageInfoOptionsPartial } from "./blurhash";
import type { CacheBusterOptionsPartial } from "../typesShared/cacheBuster";
import type { CropOptionsPartial } from "../typesShared/crop";
import type { DCImageInfoOptionsPartial } from "./dominantColors";
import type { DetectObjectsImageInfoOptionsPartial } from "./detectObjects";
import type { DimensionsImageInfoOptionsPartial } from "./dimensions";
import type { ExifImageInfoOptionsPartial } from "./exif";
import type { ExpiresOptionsPartial } from "../typesShared/expires";
import type { FormatImageInfoOptionsPartial } from "./format";
import type { IptcImageInfoOptionsPartial } from "./iptc";
import type { MaxSrcFileSizeOptionsPartial } from "../typesShared/maxSrcFileSize";
import type { MaxSrcResolutionOptionsPartial } from "../typesShared/maxSrcResolution";
import type { PageOptionsPartial } from "../typesShared/page";
import type { PaletteImageInfoOptionsPartial } from "./palette";
import type { PresetOptionsPartial } from "../typesShared/preset";
import type { SizeImageInfoOptionsPartial } from "./size";
import type { VideoMetaImageInfoOptionsPartial } from "./videoMeta";
import type { VideoThumbnailSecondOptionsPartial } from "../typesShared/videoThumbnailSecond";
import type { XmpImageInfoOptionsPartial } from "./xmp";

export type OptionsImageInfo = AverageImageInfoOptionsPartial &
  BHImageInfoOptionsPartial &
  CacheBusterOptionsPartial &
  CropOptionsPartial &
  DCImageInfoOptionsPartial &
  DetectObjectsImageInfoOptionsPartial &
  DimensionsImageInfoOptionsPartial &
  ExifImageInfoOptionsPartial &
  ExpiresOptionsPartial &
  FormatImageInfoOptionsPartial &
  IptcImageInfoOptionsPartial &
  MaxSrcFileSizeOptionsPartial &
  MaxSrcResolutionOptionsPartial &
  PageOptionsPartial &
  PaletteImageInfoOptionsPartial &
  PresetOptionsPartial &
  SizeImageInfoOptionsPartial &
  VideoMetaImageInfoOptionsPartial &
  VideoThumbnailSecondOptionsPartial &
  XmpImageInfoOptionsPartial;
