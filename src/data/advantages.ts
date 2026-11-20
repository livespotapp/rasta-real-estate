export interface Advantage {
  id: string
  number: string
  title: string
  text: string
  icon: 'map' | 'route' | 'chat' | 'target' | 'spark'
}

export const advantages: Advantage[] = [
  {
    id: 'local-knowledge',
    number: '۰۱',
    title: 'شناخت دقیق منطقه ۱',
    text: 'آشنایی با محله‌ها و ویژگی‌های منطقه، برای تصمیمی آگاهانه‌تر.',
    icon: 'map',
  },
  {
    id: 'guidance',
    number: '۰۲',
    title: 'همراهی در مسیر انتخاب ملک',
    text: 'از شناسایی نیازها تا رسیدن به گزینه مناسب، کنار شما هستیم.',
    icon: 'route',
  },
  {
    id: 'communication',
    number: '۰۳',
    title: 'ارتباط شفاف و حرفه‌ای',
    text: 'اطلاعات روشن و پاسخ‌گویی منظم در هر مرحله از کار.',
    icon: 'chat',
  },
  {
    id: 'client-needs',
    number: '۰۴',
    title: 'توجه به نیازهای هر مشتری',
    text: 'هر خرید، فروش یا اجاره را با توجه به شرایط و اولویت‌های همان فرد پیش می‌بریم.',
    icon: 'target',
  },
  {
    id: 'simpler-process',
    number: '۰۵',
    title: 'تجربه‌ای ساده‌تر در معاملات ملکی',
    text: 'کاهش سردرگمی و تنش، با گام‌هایی روشن و قابل پیگیری.',
    icon: 'spark',
  },
]
