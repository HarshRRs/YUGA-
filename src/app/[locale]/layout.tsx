import React from 'react'
import { notFound } from 'next/navigation'
import { cormorant, manrope } from '@/app/fonts'
import { getDictionary, isValidLocale, locales, type Locale } from '@/lib/i18n'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { constructMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isValidLocale(locale)) return {}
  return constructMetadata({ locale })
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isValidLocale(locale)) {
    notFound()
  }

  const dict = getDictionary(locale)

  return (
    <html lang={locale} className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-white text-neutral-900 font-sans antialiased selection:bg-neutral-900 selection:text-white">
        <a href="#main-content" className="skip-link">
          {dict.nav.skipToContent}
        </a>
        
        <Header locale={locale} dict={dict} />

        <main id="main-content" className="relative z-10">
          {children}
        </main>

        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  )
}

