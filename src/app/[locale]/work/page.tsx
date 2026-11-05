import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, Clock } from 'lucide-react'
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
    title: dict.nav.work,
    description: dict.futureRoutes.workSubtitle,
    path: '/work',
  })
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isValidLocale(locale)) {
    notFound()
  }

  const dict = getDictionary(locale)
  const items = dict.work.items || []

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
            03 — Portfolio
          </p>
          <h1 className="text-page-heading text-neutral-950 font-normal leading-tight">
            {dict.futureRoutes.workTitle}
          </h1>
          <p className="text-body-editorial text-neutral-600 font-sans mt-4 max-w-xl">
            {dict.futureRoutes.workSubtitle}
          </p>
        </div>

        {/* Phase 1 Curated Frameworks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="bg-white p-8 border border-neutral-200 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-6">
                  <span className="text-[11px] uppercase tracking-widest font-semibold text-neutral-500 font-sans">
                    {item.category}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 border border-neutral-200 text-neutral-600 font-mono">
                    {item.status}
                  </span>
                </div>

                <h2 className="font-serif text-2xl text-neutral-950 font-normal mb-3 leading-snug">
                  {item.title}
                </h2>

                <p className="text-sm text-neutral-600 leading-relaxed font-sans">
                  {item.summary}
                </p>
              </div>

              <div className="pt-8 border-t border-neutral-100 mt-8 flex items-center justify-between text-xs text-neutral-400">
                <span className="font-serif italic">Framework 0{index + 1}</span>
                <span className="font-mono text-[11px]">Academic Reference</span>
              </div>
            </div>
          ))}
        </div>

        {/* Staging / Preview Disclosure Notice */}
        <div className="mt-16 p-6 border border-neutral-200 bg-neutral-50/60 flex items-start gap-3 max-w-2xl">
          <Clock className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
          <p className="text-xs text-neutral-600 leading-relaxed font-sans">
            {dict.futureRoutes.previewNotice}
          </p>
        </div>

      </div>
    </div>
  )
}

