import { normalizeDigits } from './persian'

const MOBILE_PATTERN = /^09\d{9}$/
const LANDLINE_PATTERN = /^0[1-8]\d{9}$/

export function normalizePhone(value: string): string {
  let digits = normalizeDigits(value).replace(/[\s\-().\u200c\u200e\u200f]/g, '')
  if (digits.startsWith('+98')) {
    digits = `0${digits.slice(3)}`
  } else if (digits.startsWith('0098')) {
    digits = `0${digits.slice(4)}`
  }
  return digits
}

export function validateName(value: string): string | undefined {
  const name = value.trim()
  if (!name) return 'لطفاً نام و نام‌خانوادگی خود را وارد کنید.'
  if (Array.from(name).length < 2) return 'نام باید حداقل ۲ نویسه باشد.'
  return undefined
}

export function validatePhone(value: string): string | undefined {
  const phone = normalizePhone(value)
  if (!phone) return 'لطفاً شماره تماس خود را وارد کنید.'
  if (MOBILE_PATTERN.test(phone) || LANDLINE_PATTERN.test(phone)) return undefined
  return 'شماره وارد شده معتبر نیست. لطفاً شماره موبایل یا تلفن ثابت همراه با کد شهر را وارد کنید.'
}

export function validateMessage(value: string): string | undefined {
  const message = value.trim()
  if (!message) return 'لطفاً پیام خود را بنویسید.'
  if (Array.from(message).length < 10) return 'پیام باید حداقل ۱۰ نویسه باشد.'
  return undefined
}
