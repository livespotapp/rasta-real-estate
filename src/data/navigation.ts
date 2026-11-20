export interface NavLink {
  id: string
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { id: 'about', label: 'درباره ما', href: '#about' },
  { id: 'services', label: 'خدمات', href: '#services' },
  { id: 'properties', label: 'ملک‌ها', href: '#properties' },
  { id: 'advantages', label: 'مزیت‌ها', href: '#advantages' },
  { id: 'contact', label: 'تماس', href: '#contact' },
]
