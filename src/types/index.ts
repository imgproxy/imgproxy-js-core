import type { AjustOptionsPartial } from "./ajust";
import type { AutoRotateOptionsPartial } from "./autoRotate";
import type { BackgroundOptionsPartial } from "./background";
import type { BackgroundAlphaOptionsPartial } from "./backgroundAlpha";
import type { BlurOptionsPartial } from "./blur";
import type { BrightnessOptionsPartial } from "./brightness";
import type { ContrastOptionsPartial } from "./contrast";
import type { CropOptionsPartial } from "./crop";
import type { DPROptionsPartial } from "./dpr";
import type { EnlargeOptionsPartial } from "./enlarge";
import type { ExtendAspectRatioOptionsPartial } from "./extendAspectRatio";
import type { ExtendOptionsPartial } from "./extend";
import type { FormatOptionsPartial } from "./format";
import type { GravityOptionsPartial } from "./gravity";
import type { HeightOptionsPartial } from "./height";
import type { MinHeightOptionsPartial } from "./minHeight";
import type { MinWidthOptionsPartial } from "./minWidth";
import type { PaddingOptionsPartial } from "./padding";
import type { PixelateOptionsPartial } from "./pixelate";
import type { ResizeOptionsPartial } from "./resize";
import type { ResizingAlgorithmOptionsPartial } from "./resizingAlgorithm";
import type { ResizingTypeOptionsPartial } from "./resizingType";
import type { RotateOptionsPartial } from "./rotate";
import type { SaturationOptionsPartial } from "./saturation";
import type { SharpenOptionsPartial } from "./sharpen";
import type { SizeOptionsPartial } from "./size";
import type { TrimOptionsPartial } from "./trim";
import type { UnsharpMaskingOptionsPartial } from "./unsharpMasking";
import type { WidthOptionsPartial } from "./width";
import type { ZoomOptionsPartial } from "./zoom";

export type Options = AjustOptionsPartial &
  AutoRotateOptionsPartial &
  BackgroundOptionsPartial &
  BackgroundAlphaOptionsPartial &
  BlurOptionsPartial &
  BrightnessOptionsPartial &
  ContrastOptionsPartial &
  CropOptionsPartial &
  DPROptionsPartial &
  EnlargeOptionsPartial &
  ExtendAspectRatioOptionsPartial &
  ExtendOptionsPartial &
  FormatOptionsPartial &
  GravityOptionsPartial &
  HeightOptionsPartial &
  MinHeightOptionsPartial &
  MinWidthOptionsPartial &
  PaddingOptionsPartial &
  PixelateOptionsPartial &
  ResizeOptionsPartial &
  ResizingAlgorithmOptionsPartial &
  ResizingTypeOptionsPartial &
  RotateOptionsPartial &
  SaturationOptionsPartial &
  SizeOptionsPartial &
  SharpenOptionsPartial &
  TrimOptionsPartial &
  UnsharpMaskingOptionsPartial &
  WidthOptionsPartial &
  ZoomOptionsPartial;
