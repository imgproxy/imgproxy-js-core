import { VideoThumbnailAnimationOptionsPartial } from "../types/videoThumbnailAnimation";
import { guardIsNotNum, guardIsUndef, normalizeBoolean } from "../utils";

function getOpts(options: VideoThumbnailAnimationOptionsPartial) {
  return options.video_thumbnail_animation || options.vta;
}

function test(options: VideoThumbnailAnimationOptionsPartial) {
  return Boolean(getOpts(options));
}

function build(options: VideoThumbnailAnimationOptionsPartial) {
  const vta = getOpts(options);
  guardIsUndef(vta, "video_thumbnail_animation");

  guardIsNotNum(vta.step, "video_thumbnail_animation.step");
  guardIsNotNum(vta.delay, "video_thumbnail_animation.delay");
  guardIsNotNum(vta.frames, "video_thumbnail_animation.frames");

  if (vta.frame_width !== undefined) {
    guardIsNotNum(vta.frame_width, "video_thumbnail_animation.frame_width");
  }

  if (vta.frame_height !== undefined) {
    guardIsNotNum(vta.frame_height, "video_thumbnail_animation.frame_height");
  }

  const parts = [];

  // Add boolean flags with proper normalization
  const extend_frame =
    vta.extend_frame !== undefined
      ? normalizeBoolean(vta.extend_frame)
      : undefined;
  const trim = vta.trim !== undefined ? normalizeBoolean(vta.trim) : undefined;
  const fill = vta.fill !== undefined ? normalizeBoolean(vta.fill) : undefined;

  parts.push(extend_frame, trim, fill);

  // Add focus coordinates if fill is true and coordinates are defined
  if (fill === "t") {
    parts.push(vta.focus_x, vta.focus_y);
  }

  // Remove trailing undefined values
  while (parts.length > 0 && parts[parts.length - 1] === undefined) {
    parts.pop();
  }

  const optionsPart = parts.length > 0 ? `:${parts.join(":")}` : "";

  return `vta:${vta.step}:${vta.delay}:${vta.frames}:${vta.frame_width}:${vta.frame_height}${optionsPart}`;
}

export { test, build };
