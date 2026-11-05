'use client'

import React from 'react'
import { motion, useReducedMotion } from 'motion/react'
import type { Locale, Dictionary } from '@/lib/i18n'
import { luxuryEase } from '@/lib/motion/presets'

interface ExperienceTimelineProps {
  locale: Locale
  dict: Dictionary
}

export function ExperienceTimeline({ locale, dict }: ExperienceTimelineProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-16 lg:py-24 border-b border-neutral-200/80 bg-neutral-50/40">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-[0.24em] text-neutral-500 font-sans font-semibold block mb-2">
              04 — Experience
            </span>
            <h2 className="font-serif text-3xl text-neutral-950 font-normal">
              {dict.aboutPage.experienceTitle}
            </h2>
          </div>

          <div className="lg:col-span-8">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: luxuryEase }}
              className="bg-white p-8 sm:p-10 border border-neutral-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-4 border-b border-neutral-100 gap-2">
                <div>
                  <h3 className="font-serif text-2xl text-neutral-950">
                    {dict.aboutPage.experienceCompany}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-neutral-500 font-sans font-semibold mt-1">
                    {dict.aboutPage.experienceRole}
                  </p>
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  {dict.aboutPage.experiencePeriod}
                </span>
              </div>

              <p className="text-sm sm:text-base text-neutral-700 font-sans leading-relaxed mt-6">
                {dict.aboutPage.experienceDetails}
              </p>

              <div className="mt-6 pt-4 border-t border-neutral-100 text-xs text-neutral-500 leading-relaxed">
                {dict.experience.disclaimer}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

