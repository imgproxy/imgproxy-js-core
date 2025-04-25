import { VideoThumbnailTileOptionsPartial } from "../types/videoThumbnailTile";
import { guardIsNotNum, guardIsUndef, normalizeBoolean } from "../utils";

function getOpts(options: VideoThumbnailTileOptionsPartial) {
  return options.video_thumbnail_tile || options.vtt;
}

function test(options: VideoThumbnailTileOptionsPartial) {
  return Boolean(getOpts(options));
}

function build(options: VideoThumbnailTileOptionsPartial) {
  const vtt = getOpts(options);
  guardIsUndef(vtt, "video_thumbnail_tile");

  guardIsNotNum(vtt.step, "video_thumbnail_tile.step");
  guardIsNotNum(vtt.columns, "video_thumbnail_tile.columns");
  guardIsNotNum(vtt.rows, "video_thumbnail_tile.rows");
  guardIsNotNum(vtt.tile_width, "video_thumbnail_tile.tile_width");
  guardIsNotNum(vtt.tile_height, "video_thumbnail_tile.tile_height");

  const parts = [];

  // Add boolean flags with proper normalization
  const extend_tile =
    vtt.extend_tile !== undefined
      ? normalizeBoolean(vtt.extend_tile)
      : undefined;
  const trim = vtt.trim !== undefined ? normalizeBoolean(vtt.trim) : undefined;
  const fill = vtt.fill !== undefined ? normalizeBoolean(vtt.fill) : undefined;

  parts.push(extend_tile, trim, fill);

  // Add focus coordinates if fill is true and coordinates are defined
  if (fill === "t") {
    parts.push(vtt.focus_x, vtt.focus_y);
  }

  // Remove trailing undefined values
  while (parts.length > 0 && parts[parts.length - 1] === undefined) {
    parts.pop();
  }

  const optionsPart = parts.length > 0 ? `:${parts.join(":")}` : "";

  return `vtt:${vtt.step}:${vtt.columns}:${vtt.rows}:${vtt.tile_width}:${vtt.tile_height}${optionsPart}`;
}

export { test, build };
