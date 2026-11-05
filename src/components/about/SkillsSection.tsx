'use client'

import React, { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { FileText, Lock, Check } from 'lucide-react'
import type { Locale, Dictionary } from '@/lib/i18n'
import { luxuryEase } from '@/lib/motion/presets'

interface SkillsSectionProps {
  locale: Locale
  dict: Dictionary
}

export function SkillsSection({ locale, dict }: SkillsSectionProps) {
  const shouldReduceMotion = useReducedMotion()
  const [requested, setRequested] = useState(false)

  const categories = dict.aboutPage.skillsCategories

  return (
    <section className="py-16 lg:py-24">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-[0.24em] text-neutral-500 font-sans font-semibold block mb-2">
              05 — Capabilities
            </span>
            <h2 className="font-serif text-3xl text-neutral-950 font-normal">
              {dict.aboutPage.skillsTitle}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-12">
            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Object.entries(categories).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: luxuryEase,
                  }}
                  className="p-6 border border-neutral-200 bg-white"
                >
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block mb-2">
                    Area 0{index + 1}
                  </span>
                  <p className="font-sans text-sm sm:text-base text-neutral-800 leading-relaxed font-medium">
                    {value}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* 07 — CV Component */}
            <div className="pt-10 border-t border-neutral-200">
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-sans font-semibold block mb-2">
                07 — {dict.aboutPage.cvTitle}
              </span>
              <div className="p-8 border border-neutral-300 bg-neutral-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <h4 className="font-serif text-xl text-neutral-950 mb-1">
                    Official Résumé & Dossier
                  </h4>
                  <p className="text-sm text-neutral-600 font-sans max-w-md">
                    {dict.aboutPage.cvDescription}
                  </p>
                </div>

                {/* Controlled CV Button */}
                <div>
                  {requested ? (
                    <div className="inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-200 text-neutral-800 text-xs uppercase tracking-widest font-semibold">
                      <Check className="w-4 h-4" />
                      <span>Request Logged</span>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setRequested(true)}
                      className="inline-flex items-center gap-3 px-6 py-3.5 bg-neutral-950 text-white text-xs uppercase tracking-widest font-medium hover:bg-neutral-800 transition-colors focus-visible:outline-2 focus-visible:outline-neutral-900"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      <span>{dict.aboutPage.cvButton}</span>
                    </button>
                  )}
                </div>
              </div>
              <p className="text-xs text-neutral-500 mt-2 font-sans italic">
                {dict.aboutPage.cvNotice}
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

