/**
 * *DPR option*
 *
 * When set, imgproxy will multiply the image dimensions according to this factor for HiDPI
 * (Retina) devices. The value must be greater than `0`.
 *
 * @note The dpr option affects gravities offsets, watermark offsets, and paddings
 * to make the resulting image structures with and without the dpr option applied match.
 *
 * @default 1
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=dpr
 */
type DPR = number;

/**
 * *DPR option*
 *
 * To describe the DPR option, you can use the keyword `dpr`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=dpr
 */
interface DPROptionsPartial {
  dpr?: DPR;
}

export { DPR, DPROptionsPartial };
