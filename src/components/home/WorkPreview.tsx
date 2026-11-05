'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import type { Locale, Dictionary } from '@/lib/i18n'
import { luxuryEase } from '@/lib/motion/presets'

interface WorkPreviewProps {
  locale: Locale
  dict: Dictionary
  // Section is hidden when no confirmed real projects exist, as mandated by Section 9
  showWorkSection?: boolean
}

export function WorkPreview({
  locale,
  dict,
  showWorkSection = true,
}: WorkPreviewProps) {
  const shouldReduceMotion = useReducedMotion()

  if (!showWorkSection) {
    return null
  }

  const items = dict.work.items || []

  return (
    <section id="work" className="py-20 lg:py-32 border-b border-neutral-200/80">
      <div className="container-editorial">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: luxuryEase }}
              className="text-xs uppercase tracking-[0.24em] text-neutral-500 font-sans font-semibold mb-4"
            >
              {dict.work.label}
            </motion.p>
            <motion.h2
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: luxuryEase }}
              className="text-section-heading text-neutral-950 font-normal leading-tight"
            >
              {dict.work.heading}
            </motion.h2>
          </div>
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-body-editorial text-neutral-600 max-w-md font-sans"
          >
            {dict.work.description}
          </motion.p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
                ease: luxuryEase,
              }}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className="group flex flex-col justify-between bg-white p-8 border border-neutral-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-neutral-100 mb-6">
                  <span className="text-[11px] uppercase tracking-widest font-semibold text-neutral-500 font-sans">
                    {item.category}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 border border-neutral-200 text-neutral-600 font-mono">
                    {item.status}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-neutral-950 font-normal mb-3 group-hover:text-neutral-700 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed font-sans mb-8">
                  {item.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <Link
                  href={`/${locale}/work`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-neutral-900 group-hover:underline underline-offset-4"
                >
                  <span>{dict.work.viewProject}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <span className="text-xs text-neutral-400 font-serif italic">
                  0{index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

