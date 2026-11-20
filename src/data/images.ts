// Demonstration imagery (Unsplash). Replace these entries with licensed or client
// photography before launch. Only edit this file to swap images; components read from here.

export interface PhotoAsset {
  id: string
  alt: string
  /** Intrinsic display ratio. Every generated size keeps this crop. */
  width: number
  height: number
}

export const photos = {
  heroExterior: {
    id: '1512917774080-9991f1c4c750',
    alt: 'نمای بیرونی یک ساختمان مسکونی مدرن با حجم‌های سفید، چوب و استخر در نور روز',
    width: 800,
    height: 1000,
  },
  heroInterior: {
    id: '1600607687939-ce8a6c25118c',
    alt: 'فضای نشیمن روشن و معاصر با دیوار چوبی، مبلمان خاکستری و نور طبیعی',
    width: 800,
    height: 800,
  },
  about: {
    id: '1600047509807-ba8f99d2cdde',
    alt: 'نمای ساختمان مسکونی معاصر با نمای چوبی و سفید و باغچه‌ای مرتب در نور روز',
    width: 800,
    height: 1000,
  },
  advantages: {
    id: '1600596542815-ffad4c1539a9',
    alt: 'ویلای سفید و معاصر با بالکن‌های شیشه‌ای و استخر در نور روز',
    width: 800,
    height: 600,
  },
  propertyApartment: {
    id: '1522708323590-d24dbb6b0267',
    alt: 'تصویر نمایشی یک آپارتمان روشن با پنجره‌های بزرگ، صندلی قرمز و آشپزخانه باز',
    width: 800,
    height: 600,
  },
  propertyVilla: {
    id: '1580587771525-78b9dba3b914',
    alt: 'تصویر نمایشی یک ویلای معاصر با نمای سنگی روشن و استخر در جلو',
    width: 800,
    height: 600,
  },
  propertyPenthouse: {
    id: '1613490493576-7fde63acd811',
    alt: 'تصویر نمایشی از نشیمنی روشن با پنجره‌های بزرگ، مبلمان چرمی و دیوار قاب‌دار',
    width: 800,
    height: 600,
  },
  propertyMinimal: {
    id: '1493809842364-78817add7ffb',
    alt: 'تصویر نمایشی یک واحد مسکونی مینیمال با کف چوبی طرح‌دار و کابینت سفید',
    width: 800,
    height: 600,
  },
} satisfies Record<string, PhotoAsset>

export function photoUrl(photo: PhotoAsset, width: number): string {
  const height = Math.round((width * photo.height) / photo.width)
  return `https://images.unsplash.com/photo-${photo.id}?auto=format&fit=crop&w=${width}&h=${height}&q=75`
}

export function photoSrcSet(photo: PhotoAsset, widths: readonly number[]): string {
  return widths.map((width) => `${photoUrl(photo, width)} ${width}w`).join(', ')
}
