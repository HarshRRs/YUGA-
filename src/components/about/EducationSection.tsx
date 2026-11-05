'use client'

import React from 'react'
import { motion, useReducedMotion } from 'motion/react'
import type { Locale, Dictionary } from '@/lib/i18n'
import { luxuryEase } from '@/lib/motion/presets'

interface EducationSectionProps {
  locale: Locale
  dict: Dictionary
}

export function EducationSection({ locale, dict }: EducationSectionProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-16 lg:py-24 border-b border-neutral-200/80">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-[0.24em] text-neutral-500 font-sans font-semibold block mb-2">
              03 — Academic Foundation
            </span>
            <h2 className="font-serif text-3xl text-neutral-950 font-normal">
              {dict.aboutPage.educationTitle}
            </h2>
          </div>

          <div className="lg:col-span-8">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: luxuryEase }}
              className="border-l-2 border-neutral-900 pl-6 sm:pl-8 py-2 space-y-4"
            >
              <div>
                <span className="text-xs uppercase tracking-widest text-neutral-500 font-sans font-semibold">
                  {dict.aboutPage.educationStatus}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-neutral-950 font-normal mt-1">
                  {dict.aboutPage.educationDegree}
                </h3>
              </div>

              <p className="text-body-editorial text-neutral-700 font-sans leading-relaxed max-w-2xl">
                {dict.aboutPage.educationDetails}
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

