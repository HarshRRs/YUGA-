import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, Clock, Compass } from 'lucide-react'
import { getDictionary, isValidLocale, type Locale } from '@/lib/i18n'
import { constructMetadata } from '@/lib/metadata'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isValidLocale(locale)) return {}
  const dict = getDictionary(locale)
  return constructMetadata({
    locale,
    title: dict.nav.luxury,
    description: dict.futureRoutes.luxurySubtitle,
    path: '/luxury-edit',
  })
}

export default async function LuxuryEditPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isValidLocale(locale)) {
    notFound()
  }

  const dict = getDictionary(locale)

  return (
    <div className="w-full pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="container-editorial">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{dict.futureRoutes.backHome}</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl mb-14 lg:mb-20">
          <p className="text-xs uppercase tracking-[0.24em] text-neutral-500 font-sans font-semibold mb-3">
            Editorial Study
          </p>
          <h1 className="text-page-heading text-neutral-950 font-normal leading-tight">
            {dict.futureRoutes.luxuryTitle}
          </h1>
          <p className="text-body-editorial text-neutral-600 font-sans mt-4 max-w-xl">
            {dict.futureRoutes.luxurySubtitle}
          </p>
        </div>

        {/* Featured Maison Card */}
        <div className="border border-neutral-200 bg-neutral-950 text-white p-8 sm:p-12 lg:p-16 mb-12">
          <div className="max-w-2xl space-y-6">
            <span className="text-xs uppercase tracking-[0.24em] text-neutral-400 font-sans font-semibold">
              Featured Maison · Focus Case
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight">
              {dict.experience.company}
            </h2>
            <p className="text-body-editorial text-neutral-300 font-sans leading-relaxed">
              {dict.experience.summary}
            </p>
            <div className="pt-4 text-xs text-neutral-400 border-t border-neutral-800">
              {dict.experience.disclaimer}
            </div>
          </div>
        </div>

        {/* Staging / Preview Disclosure Notice */}
        <div className="p-6 border border-neutral-200 bg-neutral-50/60 flex items-start gap-3 max-w-2xl">
          <Compass className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
          <p className="text-xs text-neutral-600 leading-relaxed font-sans">
            {dict.futureRoutes.previewNotice}
          </p>
        </div>

      </div>
    </div>
  )
}

