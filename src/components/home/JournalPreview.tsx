'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import type { Locale, Dictionary } from '@/lib/i18n'
import { luxuryEase } from '@/lib/motion/presets'

interface JournalPreviewProps {
  locale: Locale
  dict: Dictionary
  showJournalSection?: boolean
}

export function JournalPreview({
  locale,
  dict,
  showJournalSection = true,
}: JournalPreviewProps) {
  const shouldReduceMotion = useReducedMotion()

  if (!showJournalSection) {
    return null
  }

  const articles = dict.journal.articles || []

  return (
    <section id="journal" className="py-20 lg:py-32 border-b border-neutral-200/80">
      <div className="container-editorial">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: luxuryEase }}
              className="text-xs uppercase tracking-[0.24em] text-neutral-500 font-sans font-semibold mb-4"
            >
              {dict.journal.label}
            </motion.p>
            <motion.h2
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: luxuryEase }}
              className="text-section-heading text-neutral-950 font-normal leading-tight"
            >
              {dict.journal.heading}
            </motion.h2>
          </div>
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-body-editorial text-neutral-600 max-w-md font-sans"
          >
            {dict.journal.description}
          </motion.p>
        </div>

        {/* Editorial Articles List */}
        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {articles.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: luxuryEase,
              }}
              className="group py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-neutral-50/60 transition-colors px-2 sm:px-4"
            >
              {/* Category & Index */}
              <div className="md:col-span-3 flex items-center justify-between md:flex-col md:items-start gap-2">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-500 font-sans">
                  {article.category}
                </span>
                <span className="text-xs text-neutral-400 font-serif italic">
                  Issue 0{index + 1} · {article.date}
                </span>
              </div>

              {/* Title & Excerpt */}
              <div className="md:col-span-7 space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl text-neutral-950 font-normal group-hover:text-neutral-700 transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-neutral-600 font-sans leading-relaxed max-w-xl">
                  {article.excerpt}
                </p>
              </div>

              {/* Link Arrow */}
              <div className="md:col-span-2 flex justify-start md:justify-end items-center">
                <Link
                  href={`/${locale}/journal`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-neutral-900 group-hover:opacity-70 transition-opacity"
                  aria-label={`${dict.journal.readArticle}: ${article.title}`}
                >
                  <span className="hidden sm:inline">{dict.journal.readArticle}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}

