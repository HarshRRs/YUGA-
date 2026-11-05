import en from '@/dictionaries/en.json'
import fr from '@/dictionaries/fr.json'

export type Locale = 'en' | 'fr'
export const defaultLocale: Locale = 'en'
export const locales: Locale[] = ['en', 'fr']

export type Dictionary = typeof en

const dictionaries: Record<Locale, Dictionary> = {
  en,
  fr,
}

export function getDictionary(locale: string): Dictionary {
  if (locale === 'fr') return dictionaries.fr
  return dictionaries.en
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

