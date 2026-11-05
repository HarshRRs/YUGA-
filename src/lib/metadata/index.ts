import type { Metadata } from 'next'
import { getDictionary, type Locale } from '@/lib/i18n'

export function constructMetadata({
  locale,
  title,
  description,
  path = '',
}: {
  locale: Locale
  title?: string
  description?: string
  path?: string
}): Metadata {
  const dict = getDictionary(locale)
  const metaTitle = title ? `${title} — YUGA` : dict.meta.siteTitle
  const metaDesc = description || dict.meta.siteDescription
  const canonicalUrl = `https://yuga-atelier.com/${locale}${path}`

  return {
    title: metaTitle,
    description: metaDesc,
    metadataBase: new URL('https://yuga-atelier.com'),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `https://yuga-atelier.com/en${path}`,
        fr: `https://yuga-atelier.com/fr${path}`,
      },
    },
    openGraph: {
      title: title ? `${title} — YUGA` : dict.meta.ogTitle,
      description: metaDesc,
      url: canonicalUrl,
      siteName: 'YUGA',
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title ? `${title} — YUGA` : dict.meta.ogTitle,
      description: metaDesc,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

