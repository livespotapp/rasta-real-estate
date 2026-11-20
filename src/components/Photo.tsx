import { photoSrcSet, photoUrl, type PhotoAsset } from '../data/images'

interface PhotoProps {
  photo: PhotoAsset
  sizes: string
  widths: readonly number[]
  priority?: boolean
}

export function Photo({ photo, sizes, widths, priority = false }: PhotoProps) {
  const largest = widths[widths.length - 1]

  return (
    <img
      className="img-cover"
      src={photoUrl(photo, largest)}
      srcSet={photoSrcSet(photo, widths)}
      sizes={sizes}
      width={photo.width}
      height={photo.height}
      alt={photo.alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
    />
  )
}
