
export interface PhotoAsset {
  filePrefix: string
  alt: string
  width: number
  height: number
}

export const photos = {
  heroExterior: {
    filePrefix: 'hero-modern-villa-exterior',
    alt: 'نمای بیرونی یک ساختمان مسکونی مدرن با حجم‌های سفید، چوب و استخر در نور روز',
    width: 800,
    height: 1000,
  },
  heroInterior: {
    filePrefix: 'hero-living-room-interior',
    alt: 'فضای نشیمن روشن و معاصر با دیوار چوبی، مبلمان خاکستری و نور طبیعی',
    width: 800,
    height: 800,
  },
  about: {
    filePrefix: 'about-modern-house-facade',
    alt: 'نمای ساختمان مسکونی معاصر با نمای چوبی و سفید و باغچه‌ای مرتب در نور روز',
    width: 800,
    height: 1000,
  },
  advantages: {
    filePrefix: 'advantages-white-villa-pool',
    alt: 'ویلای سفید و معاصر با بالکن‌های شیشه‌ای و استخر در نور روز',
    width: 800,
    height: 600,
  },
  propertyApartment: {
    filePrefix: 'property-modern-apartment',
    alt: 'تصویر نمایشی یک آپارتمان روشن با پنجره‌های بزرگ، صندلی قرمز و آشپزخانه باز',
    width: 800,
    height: 600,
  },
  propertyVilla: {
    filePrefix: 'property-contemporary-villa',
    alt: 'تصویر نمایشی یک ویلای معاصر با نمای سنگی روشن و استخر در جلو',
    width: 800,
    height: 600,
  },
  propertyPenthouse: {
    filePrefix: 'property-luxury-penthouse',
    alt: 'تصویر نمایشی از نشیمنی روشن با پنجره‌های بزرگ، مبلمان چرمی و دیوار قاب‌دار',
    width: 800,
    height: 600,
  },
  propertyMinimal: {
    filePrefix: 'property-minimal-residence',
    alt: 'تصویر نمایشی یک واحد مسکونی مینیمال با کف چوبی طرح‌دار و کابینت سفید',
    width: 800,
    height: 600,
  },
} satisfies Record<string, PhotoAsset>

export function photoUrl(photo: PhotoAsset, width: number): string {
  return `/images/${photo.filePrefix}-${width}.webp`
}

export function photoSrcSet(photo: PhotoAsset, widths: readonly number[]): string {
  return widths.map((width) => `${photoUrl(photo, width)} ${width}w`).join(', ')
}
