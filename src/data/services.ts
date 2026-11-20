import type { RequestType } from '../types'

export interface Service {
  id: string
  number: string
  title: string
  description: string
  cta: string
  icon: 'buy' | 'sell' | 'rent'
  requestType: Exclude<RequestType, 'other'>
}

export const services: Service[] = [
  {
    id: 'buy',
    number: '۰۱',
    title: 'خرید ملک',
    description: 'راهنمایی برای یافتن و ارزیابی ملک مناسب در منطقه ۱.',
    cta: 'درخواست مشاوره خرید',
    icon: 'buy',
    requestType: 'buy',
  },
  {
    id: 'sell',
    number: '۰۲',
    title: 'فروش ملک',
    description: 'معرفی درست ملک و مسیری روشن برای فروش آن.',
    cta: 'درخواست مشاوره فروش',
    icon: 'sell',
    requestType: 'sell',
  },
  {
    id: 'rent',
    number: '۰۳',
    title: 'اجاره ملک',
    description: 'ارتباطی شفاف میان موجر و مستأجر، با گفت‌وگوی ساده.',
    cta: 'درخواست مشاوره اجاره',
    icon: 'rent',
    requestType: 'rent',
  },
]
