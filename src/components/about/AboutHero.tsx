'use client'

import React from 'react'
import { motion, useReducedMotion } from 'motion/react'
import type { Locale, Dictionary } from '@/lib/i18n'
import { luxuryEase } from '@/lib/motion/presets'

interface AboutHeroProps {
  locale: Locale
  dict: Dictionary
}

export function AboutHero({ locale, dict }: AboutHeroProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-neutral-200/80">
      <div className="container-editorial">
        
        {/* Eyebrow */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: luxuryEase }}
          className="text-xs uppercase tracking-[0.24em] text-neutral-500 font-sans font-semibold mb-6"
        >
          {dict.aboutPage.heroEyebrow}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Statement (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: luxuryEase }}
              className="text-page-heading text-neutral-950 font-normal leading-[1.08]"
            >
              {dict.aboutPage.heroTitle}
            </motion.h1>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25, ease: luxuryEase }}
              className="font-serif text-editorial italic text-neutral-700 leading-snug max-w-2xl font-light"
            >
              {dict.aboutPage.heroIntro}
            </motion.p>
          </div>

          {/* Portrait Column (4 Cols) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.2, ease: luxuryEase }}
              className="relative w-full max-w-[320px] aspect-[4/5] bg-neutral-100 overflow-hidden border border-neutral-200 shadow-md"
            >
              <video
                src="/assets/yuga-portrait.mp4"
                autoPlay
                loop
                muted
                playsInline
                aria-label={dict.hero.portraitAlt}
                className="w-full h-full object-cover object-center filter contrast-[1.02]"
              />
              <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-widest text-white/90 bg-black/60 px-2.5 py-1 backdrop-blur-xs">
                Yuga · Paris
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  )
}

