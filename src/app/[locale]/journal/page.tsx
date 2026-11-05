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
    title: dict.nav.journal,
    description: dict.futureRoutes.journalSubtitle,
    path: '/journal',
  })
}

export default async function JournalPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isValidLocale(locale)) {
    notFound()
  }

  const dict = getDictionary(locale)
  const articles = dict.journal.articles || []

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
            05 — Editorial
          </p>
          <h1 className="text-page-heading text-neutral-950 font-normal leading-tight">
            {dict.futureRoutes.journalTitle}
          </h1>
          <p className="text-body-editorial text-neutral-600 font-sans mt-4 max-w-xl">
            {dict.futureRoutes.journalSubtitle}
          </p>
        </div>

        {/* Articles List */}
        <div className="divide-y divide-neutral-200 border-y border-neutral-200 mb-16">
          {articles.map((article, index) => (
            <article
              key={article.slug}
              className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
            >
              <div className="md:col-span-3 space-y-1">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-500 font-sans block">
                  {article.category}
                </span>
                <span className="text-xs text-neutral-400 font-serif italic block">
                  Issue 0{index + 1} · {article.date}
                </span>
              </div>

              <div className="md:col-span-9 space-y-3">
                <h2 className="font-serif text-3xl text-neutral-950 font-normal leading-snug">
                  {article.title}
                </h2>
                <p className="text-body-editorial text-neutral-600 font-sans leading-relaxed max-w-2xl">
                  {article.excerpt}
                </p>
                <div className="pt-2">
                  <span className="text-[11px] uppercase tracking-widest px-2.5 py-1 bg-neutral-100 text-neutral-600 font-mono inline-block">
                    {dict.journal.emptyNotice}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CMS Integration Notice */}
        <div className="p-6 border border-neutral-200 bg-neutral-50/60 flex items-start gap-3 max-w-2xl">
          <Clock className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
          <p className="text-xs text-neutral-600 leading-relaxed font-sans">
            {dict.futureRoutes.previewNotice}
          </p>
        </div>

      </div>
    </div>
  )
}

