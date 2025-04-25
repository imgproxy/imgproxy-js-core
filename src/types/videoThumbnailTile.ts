/**
 * *Video thumbnail tile option*. **PRO feature**
 *
 * Generate a tiled sprite using the source video frames.
 */
interface VideoThumbnailTile {
  /**
   * step: the step of timestamp (in seconds) between video frames that should be used for the sprite generation:
   *     When step value is positive, imgproxy will use it as an absolute value
   *     When step value is negative, imgproxy will calculate the actual step as video_duration / (columns * rows)
   */
  step: number;

  /**
   * the number of columns in the sprite
   */
  columns: number;

  /**
   * the number of rows in the sprite
   */
  rows: number;

  /**
   * the width and height of tiles. imgproxy will resize each used frame to fit the provided size
   */
  tile_width: number;
  tile_height: number;

  /**
   * when set to 1, t or true, imgproxy will extend each tile to the requested size using a black background
   */
  extend_tile?: boolean | 1 | string;

  /**
   * when set to 1, t or true, imgproxy will trim the unused sprite space
   */
  trim?: boolean | 1 | string;

  /**
   * when set to 1, t or true, imgproxy will use the fill resizing type for the tiles
   */
  fill?: boolean | 1 | string;

  /**
   * floating point numbers between 0 and 1 that define the coordinates of the center of the resulting tile
   * (as in the fp gravity type). Treat 0 and 1 as right/left for x and top/bottom for y.
   * Applicable only when fill is set. Default: 0.5:0.5
   */
  focus_x?: number;
  focus_y?: number;
}

/**
 * *Video thumbnail tile option*. **PRO feature**
 *
 * Allows generating a tiled sprite using the source video frames.
 *
 * @see https://docs.imgproxy.net/usage/processing#video-thumbnail-tile
 */
interface VideoThumbnailTileOptionsPartial {
  video_thumbnail_tile?: VideoThumbnailTile;
  vtt?: VideoThumbnailTile;
}

export { VideoThumbnailTile, VideoThumbnailTileOptionsPartial };
