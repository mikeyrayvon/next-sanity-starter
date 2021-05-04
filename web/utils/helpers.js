import { urlFor } from 'utils/sanity'

export const imageUrl = (image, width, height) => (image ? urlFor(image).auto('format').width(width).height(height).dpr(2).fit('scale').url() : '')
