'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import type { Locale, Dictionary } from '@/lib/i18n'
import { luxuryEase } from '@/lib/motion/presets'

interface IntroductionSectionProps {
  locale: Locale
  dict: Dictionary
}

export function IntroductionSection({ locale, dict }: IntroductionSectionProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-20 lg:py-32 border-b border-neutral-200/80">
      <div className="container-editorial">
        
        {/* Section Label */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: luxuryEase }}
          className="text-xs uppercase tracking-[0.24em] text-neutral-500 font-sans font-semibold mb-6 sm:mb-8"
        >
          {dict.introduction.label}
        </motion.p>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Main Statement Heading (7 Cols) */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: luxuryEase }}
              className="text-section-heading text-neutral-950 font-normal leading-tight"
            >
              {dict.introduction.heading}
            </motion.h2>
          </div>

          {/* Descriptive Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: luxuryEase }}
              className="text-body-editorial text-neutral-800 font-normal leading-relaxed"
            >
              {dict.introduction.paragraph1}
            </motion.p>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25, ease: luxuryEase }}
              className="text-body-editorial text-neutral-600 font-normal leading-relaxed"
            >
              {dict.introduction.paragraph2}
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35, ease: luxuryEase }}
              className="pt-2"
            >
              <Link
                href={`/${locale}/about`}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-neutral-950 hover:opacity-70 transition-opacity border-b border-neutral-900 pb-1"
              >
                <span>{dict.introduction.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>

        </div>

        {/* Large Prominent Quotation Band */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: luxuryEase }}
          className="mt-16 lg:mt-24 pt-12 border-t border-neutral-200/60 max-w-4xl"
        >
          <blockquote className="font-serif text-editorial italic text-neutral-900 leading-snug">
            {dict.introduction.quote}
          </blockquote>
        </motion.div>

      </div>
    </section>
  )
}

