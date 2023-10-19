/**
 * *Video meta option*
 *
 * When set to `1`, `"t"` or `true`, imgproxy will return the video metadata and video streams info.
 *
 * @note If any value other than `1`, `"t"`, or `true` is passed, it will be recognized as `false`.
 *
 * Response example:
 * {
 *  "video_meta": {
 *   "com.android.version": "9",
 *   "compatible_brands": "isommp42",
 *   "creation_time": "2022-01-12T15:04:10.000000Z",
 *   "location": "+46.4845+030.6848/",
 *   "location-eng": "+46.4845+030.6848/",
 *   "major_brand": "mp42",
 *   "minor_version": "0"
 * },
 * "video_streams": [
 *   {
 *     "type": "video",
 *     "codec": "h264",
 *     "bps": 16910024,
 *     "fps": 24,
 *     "language": "eng"
 *   },
 *   {
 *     "type": "audio",
 *     "codec": "eac3",
 *     "bps": 768000,
 *     "frequency": 48000,
 *     "layout": "5.1(side)",
 *     "language": "eng"
 *   },
 *   {
 *     "type": "subtitle",
 *     "codec": "subrip",
 *     "language": "eng"
 *   }
 *  ]
 * }
 *
 * @default true
 *
 *
 * @see {@link https://docs.imgproxy.net/getting_the_image_info?id=video-meta | Video meta imgproxy docs}
 */
type VideoMeta = 1 | "t" | true | false | string;

/**
 * *Video meta option*
 *
 * To describe the Video meta option, you can use the keyword `video_meta` or `vm`.
 *
 * @see https://docs.imgproxy.net/getting_the_image_info?id=video-meta
 */
interface VideoMetaImageInfoOptionsPartial {
  video_meta?: VideoMeta;
  vm?: VideoMeta;
}

export { VideoMeta, VideoMetaImageInfoOptionsPartial };
