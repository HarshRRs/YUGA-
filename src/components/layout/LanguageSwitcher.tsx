'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Locale } from '@/lib/i18n'

interface LanguageSwitcherProps {
  currentLocale: Locale
  className?: string
  onSelect?: () => void
}

export function LanguageSwitcher({
  currentLocale,
  className = '',
  onSelect,
}: LanguageSwitcherProps) {
  const pathname = usePathname()

  // Replace current locale prefix with target locale prefix
  const getEquivalentPath = (targetLocale: Locale) => {
    if (!pathname) return `/${targetLocale}`
    const segments = pathname.split('/')
    if (segments.length > 1 && (segments[1] === 'en' || segments[1] === 'fr')) {
      segments[1] = targetLocale
      return segments.join('/') || `/${targetLocale}`
    }
    return `/${targetLocale}${pathname}`
  }

  return (
    <div
      role="group"
      aria-label="Language selection"
      className={`inline-flex items-center text-xs tracking-widest font-sans uppercase ${className}`}
    >
      <Link
        href={getEquivalentPath('en')}
        hrefLang="en"
        onClick={onSelect}
        className={`px-1.5 py-1 transition-opacity ${
          currentLocale === 'en'
            ? 'font-bold opacity-100 underline underline-offset-4 decoration-1'
            : 'opacity-40 hover:opacity-80'
        }`}
        aria-current={currentLocale === 'en' ? 'true' : undefined}
      >
        EN
      </Link>
      <span className="opacity-30 select-none mx-0.5" aria-hidden="true">
        /
      </span>
      <Link
        href={getEquivalentPath('fr')}
        hrefLang="fr"
        onClick={onSelect}
        className={`px-1.5 py-1 transition-opacity ${
          currentLocale === 'fr'
            ? 'font-bold opacity-100 underline underline-offset-4 decoration-1'
            : 'opacity-40 hover:opacity-80'
        }`}
        aria-current={currentLocale === 'fr' ? 'true' : undefined}
      >
        FR
      </Link>
    </div>
  )
}

