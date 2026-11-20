import { photos, type PhotoAsset } from './images'

// Illustrative demonstration listings only. They are not real properties,
// carry no address, price or availability, and every attribute is labelled as demo data.
export interface DemoProperty {
  id: string
  title: string
  description: string
  attributes: { label: string; value: string }[]
  photo: PhotoAsset
  layout: 'tall' | 'wide'
}

export const demoProperties: DemoProperty[] = [
  {
    id: 'modern-apartment',
    title: 'آپارتمان مدرن',
    description: 'فضایی روشن با چیدمان باز، کف چوبی و نورگیر بزرگ؛ نمونه‌ای برای نمایش سبک و چیدمان.',
    attributes: [
      { label: 'متراژ نمونه', value: '۸۵ متر' },
      { label: 'ساختار', value: '۲ خوابه' },
    ],
    photo: photos.propertyApartment,
    layout: 'tall',
  },
  {
    id: 'contemporary-villa',
    title: 'ویلای معاصر',
    description: 'خطوط ساده، نمای روشن و فضای باز در کنار استخر؛ تصویری نمونه از سبک معاصر.',
    attributes: [
      { label: 'متراژ نمونه', value: '۲۸۰ متر' },
      { label: 'ساختار', value: '۴ خوابه' },
    ],
    photo: photos.propertyVilla,
    layout: 'wide',
  },
  {
    id: 'luxury-penthouse',
    title: 'پنت‌هاوس لوکس',
    description: 'پنجره‌های بزرگ، نورگیری بالا و متریال‌های خنثی برای نمایش فضایی با حس لوکس.',
    attributes: [
      { label: 'متراژ نمونه', value: '۱۷۰ متر' },
      { label: 'ساختار', value: '۳ خوابه' },
    ],
    photo: photos.propertyPenthouse,
    layout: 'wide',
  },
  {
    id: 'minimal-unit',
    title: 'واحد مسکونی مینیمال',
    description: 'خطوط ساده، کف چوبی طرح‌دار و فضای کم‌تزئین؛ نمونه‌ای از سبک مینیمال.',
    attributes: [
      { label: 'متراژ نمونه', value: '۶۵ متر' },
      { label: 'ساختار', value: '۱ خوابه' },
    ],
    photo: photos.propertyMinimal,
    layout: 'tall',
  },
]
