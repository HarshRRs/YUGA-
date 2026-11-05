'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import type { Locale, Dictionary } from '@/lib/i18n'
import { luxuryEase } from '@/lib/motion/presets'

interface ExperiencePreviewProps {
  locale: Locale
  dict: Dictionary
}

export function ExperiencePreview({ locale, dict }: ExperiencePreviewProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-20 lg:py-32 border-b border-neutral-200/80 bg-neutral-50/50">
      <div className="container-editorial">
        
        {/* Section Label */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: luxuryEase }}
          className="text-xs uppercase tracking-[0.24em] text-neutral-500 font-sans font-semibold mb-6 sm:mb-8"
        >
          {dict.experience.label}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Maison Branding & Context (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: luxuryEase }}
            >
              <span className="inline-block px-3 py-1 bg-neutral-900 text-white text-[11px] uppercase tracking-widest font-semibold mb-4">
                {dict.experience.role}
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-neutral-950 font-normal leading-[1.05] tracking-tight">
                {dict.experience.company}
              </h2>
              <p className="font-sans text-sm uppercase tracking-[0.16em] text-neutral-600 mt-2 font-medium">
                {dict.experience.designation}
              </p>
            </motion.div>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: luxuryEase }}
              className="text-body-editorial text-neutral-700 leading-relaxed font-normal"
            >
              {dict.experience.summary}
            </motion.p>

            {/* Disclaimer */}
            <p className="text-xs text-neutral-600 leading-relaxed pt-2 border-t border-neutral-200/80">
              {dict.experience.disclaimer}
            </p>
          </div>

          {/* Right Column: Key Learnings & Link (7 Cols) */}
          <div className="lg:col-span-7 space-y-8 lg:pl-6">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: luxuryEase }}
              className="bg-white p-8 sm:p-10 border border-neutral-200 shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
            >
              <h3 className="font-serif text-2xl text-neutral-950 mb-6 font-normal">
                Areas of Professional Immersion
              </h3>

              <ul className="space-y-4">
                {dict.experience.learningAreas.map((area, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0" />
                    <span className="text-sm sm:text-base text-neutral-700 font-sans leading-relaxed">
                      {area}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-neutral-100">
                <Link
                  href={`/${locale}/about`}
                  className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-neutral-950 hover:opacity-75 transition-opacity"
                >
                  <span className="border-b border-neutral-900 pb-0.5">
                    {dict.experience.viewMore}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  )
}

