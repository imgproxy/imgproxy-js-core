import type { AjustOptionsPartial } from "./ajust";
import type { AutoqualityOptionsPartial } from "./autoquality";
import type { AutoRotateOptionsPartial } from "./autoRotate";
import type { BackgroundOptionsPartial } from "./background";
import type { BackgroundAlphaOptionsPartial } from "./backgroundAlpha";
import type { BlurDetectionsOptionsPartial } from "./blurDetections";
import type { BlurOptionsPartial } from "./blur";
import type { BrightnessOptionsPartial } from "./brightness";
import type { CacheBusterOptionsPartial } from "../typesShared/cacheBuster";
import type { ContrastOptionsPartial } from "./contrast";
import type { CropOptionsPartial } from "../typesShared/crop";
import type { DisableAnimationOptionsPartial } from "./disableAnimation";
import type { DPIOptionsPartial } from "./dpi";
import type { DPROptionsPartial } from "./dpr";
import type { DrawDetectionsOptionsPartial } from "./drawDetections";
import type { EnforceThumbnailOptionsPartial } from "./enforceThumbnail";
import type { EnlargeOptionsPartial } from "./enlarge";
import type { ExpiresOptionsPartial } from "../typesShared/expires";
import type { ExtendAspectRatioOptionsPartial } from "./extendAspectRatio";
import type { ExtendOptionsPartial } from "./extend";
import type { FallbackImageUrlOptionsPartial } from "./fallbackImageUrl";
import type { FilenameOptionsPartial } from "./filename";
import type { FormatOptionsPartial } from "./format";
import type { FormatQualityOptionsPartial } from "./formatQuality";
import type { GradientOptionsPartial } from "./gradient";
import type { GravityOptionsPartial } from "./gravity";
import type { HeightOptionsPartial } from "./height";
import type { JPEGOptionsPartial } from "./jpegOptions";
import type { KeepCopyrightOptionsPartial } from "./keepCopyright";
import type { MAFROptionsPartial } from "./maxAnimationFrameResolution";
import type { MaxAnimationFramesOptionsPartial } from "./maxAnimationFrames";
import type { MaxBytesOptionsPartial } from "./maxBytes";
import type { MaxSrcFileSizeOptionsPartial } from "../typesShared/maxSrcFileSize";
import type { MaxSrcResolutionOptionsPartial } from "../typesShared/maxSrcResolution";
import type { MinHeightOptionsPartial } from "./minHeight";
import type { MinWidthOptionsPartial } from "./minWidth";
import type { PaddingOptionsPartial } from "./padding";
import type { PageOptionsPartial } from "../typesShared/page";
import type { PagesOptionsPartial } from "./pages";
import type { PixelateOptionsPartial } from "./pixelate";
import type { PNGOptionsPartial } from "./pngOptions";
import type { PresetOptionsPartial } from "../typesShared/preset";
import type { QualityOptionsPartial } from "./quality";
import type { RawOptionsPartial } from "./raw";
import type { ResizeOptionsPartial } from "./resize";
import type { ResizingAlgorithmOptionsPartial } from "./resizingAlgorithm";
import type { ResizingTypeOptionsPartial } from "./resizingType";
import type { ReturnAttachmentOptionsPartial } from "./returnAttachment";
import type { RotateOptionsPartial } from "./rotate";
import type { SaturationOptionsPartial } from "./saturation";
import type { SharpenOptionsPartial } from "./sharpen";
import type { SizeOptionsPartial } from "./size";
import type { SkipProcessingOptionsPartial } from "./skipProcessing";
import type { StripColorProfileOptionsPartial } from "./stripColorProfile";
import type { StripMetadataOptionsPartial } from "./stripMetadata";
import type { StyleOptionsPartial } from "./style";
import type { TrimOptionsPartial } from "./trim";
import type { UnsharpMaskingOptionsPartial } from "./unsharpMasking";
import type { VideoThumbnailSecondOptionsPartial } from "../typesShared/videoThumbnailSecond";
import type { WatermarkOptionsPartial } from "./watermark";
import type { WatermarkShadowOptionsPartial } from "./watermarkShadow";
import type { WatermarkSizeOptionsPartial } from "./watermarkSize";
import type { WatermarkTextOptionsPartial } from "./watermarkText";
import type { WatermarkUrlOptionsPartial } from "./watermarkUrl";
import type { WebpOptionsPartial } from "./webpOptions";
import type { WidthOptionsPartial } from "./width";
import type { ZoomOptionsPartial } from "./zoom";

export type Options = AjustOptionsPartial &
  AutoqualityOptionsPartial &
  AutoRotateOptionsPartial &
  BackgroundOptionsPartial &
  BackgroundAlphaOptionsPartial &
  BlurDetectionsOptionsPartial &
  BlurOptionsPartial &
  BrightnessOptionsPartial &
  CacheBusterOptionsPartial &
  ContrastOptionsPartial &
  CropOptionsPartial &
  DisableAnimationOptionsPartial &
  DPIOptionsPartial &
  DPROptionsPartial &
  DrawDetectionsOptionsPartial &
  EnforceThumbnailOptionsPartial &
  EnlargeOptionsPartial &
  ExpiresOptionsPartial &
  ExtendAspectRatioOptionsPartial &
  ExtendOptionsPartial &
  FallbackImageUrlOptionsPartial &
  FilenameOptionsPartial &
  FormatOptionsPartial &
  FormatQualityOptionsPartial &
  GradientOptionsPartial &
  GravityOptionsPartial &
  HeightOptionsPartial &
  JPEGOptionsPartial &
  KeepCopyrightOptionsPartial &
  MAFROptionsPartial &
  MaxAnimationFramesOptionsPartial &
  MaxBytesOptionsPartial &
  MaxSrcFileSizeOptionsPartial &
  MaxSrcResolutionOptionsPartial &
  MinHeightOptionsPartial &
  MinWidthOptionsPartial &
  PaddingOptionsPartial &
  PageOptionsPartial &
  PagesOptionsPartial &
  PixelateOptionsPartial &
  PNGOptionsPartial &
  PresetOptionsPartial &
  RawOptionsPartial &
  QualityOptionsPartial &
  ResizeOptionsPartial &
  ResizingAlgorithmOptionsPartial &
  ResizingTypeOptionsPartial &
  ReturnAttachmentOptionsPartial &
  RotateOptionsPartial &
  SaturationOptionsPartial &
  SizeOptionsPartial &
  SkipProcessingOptionsPartial &
  SharpenOptionsPartial &
  StripColorProfileOptionsPartial &
  StripMetadataOptionsPartial &
  StyleOptionsPartial &
  TrimOptionsPartial &
  UnsharpMaskingOptionsPartial &
  VideoThumbnailSecondOptionsPartial &
  WatermarkOptionsPartial &
  WatermarkShadowOptionsPartial &
  WatermarkSizeOptionsPartial &
  WatermarkTextOptionsPartial &
  WatermarkUrlOptionsPartial &
  WebpOptionsPartial &
  WidthOptionsPartial &
  ZoomOptionsPartial;
