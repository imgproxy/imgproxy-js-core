import type { AverageImageInfoOptionsPartial } from "./average";
import type { BHImageInfoOptionsPartial } from "./blurhash";
import type { BypassCacheOptionsPartial } from "../typesShared/bypassCache";
import type { CacheBusterOptionsPartial } from "../typesShared/cacheBuster";
import type { CacheTagsOptionsPartial } from "../typesShared/cacheTags";
import type { CalcHashsumsImageInfoOptionsPartial } from "./calcHashsums";
import type { ClassifyImageInfoOptionsPartial } from "./classify";
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
import type { PagesNumberInfoOptionsPartial } from "./pagesNumber";
import type { PaletteImageInfoOptionsPartial } from "./palette";
import type { PerceptualHashImageInfoOptionsPartial } from "./perceptualHash";
import type { PresetOptionsPartial } from "../typesShared/preset";
import type { SizeImageInfoOptionsPartial } from "./size";
import type { ThumbHashImageInfoOptionsPartial } from "./thumbHash";
import type { VideoMetaImageInfoOptionsPartial } from "./videoMeta";
import type { VideoThumbnailKeyframesOptionsPartial } from "../typesShared/videoThumbnailKeyframes";
import type { VideoThumbnailSecondOptionsPartial } from "../typesShared/videoThumbnailSecond";
import type { XmpImageInfoOptionsPartial } from "./xmp";
import type { WildOptionsPartial } from "../typesShared/wildOptions";

export type OptionsImageInfo = AverageImageInfoOptionsPartial &
  BHImageInfoOptionsPartial &
  BypassCacheOptionsPartial &
  CacheBusterOptionsPartial &
  CacheTagsOptionsPartial &
  CalcHashsumsImageInfoOptionsPartial &
  ClassifyImageInfoOptionsPartial &
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
  PagesNumberInfoOptionsPartial &
  PaletteImageInfoOptionsPartial &
  PerceptualHashImageInfoOptionsPartial &
  PresetOptionsPartial &
  SizeImageInfoOptionsPartial &
  ThumbHashImageInfoOptionsPartial &
  VideoMetaImageInfoOptionsPartial &
  VideoThumbnailKeyframesOptionsPartial &
  VideoThumbnailSecondOptionsPartial &
  XmpImageInfoOptionsPartial &
  WildOptionsPartial;
