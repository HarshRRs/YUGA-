'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import type { Locale, Dictionary } from '@/lib/i18n'
import { AnimatedHeading } from '@/components/animations/AnimatedHeading'
import { luxuryEase } from '@/lib/motion/presets'

interface HeroSectionProps {
  locale: Locale
  dict: Dictionary
}

export function HeroSection({ locale, dict }: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:py-24 border-b border-neutral-200/80">
      <div className="container-editorial w-full">
        {/* Asymmetric Luxury Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
          
          {/* Left Column: Text & Editorial Hierarchy (7 Cols Desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            
            {/* Kicker badge */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: luxuryEase }}
              className="inline-flex items-center gap-2 mb-4 sm:mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-neutral-900" aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.22em] text-neutral-600 font-sans font-semibold">
                {dict.hero.kicker}
              </span>
            </motion.div>

            {/* Main Wordmark Heading */}
            <div className="mb-4 sm:mb-6 overflow-hidden">
              <AnimatedHeading
                text={dict.hero.title}
                as="h1"
                className="text-hero-heading text-neutral-950 font-normal uppercase tracking-[0.14em]"
                splitMode="letters"
                delay={0.05}
                duration={0.7}
              />
            </div>

            {/* Supporting Editorial Statement */}
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.25, ease: luxuryEase }}
              className="font-serif text-editorial italic text-neutral-800 mb-6 sm:mb-8 font-light max-w-xl"
            >
              {dict.hero.subtitle}
            </motion.p>

            {/* Introduction paragraph */}
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: luxuryEase }}
              className="text-body-editorial text-neutral-600 font-sans max-w-xl mb-8 sm:mb-10 font-normal"
            >
              {dict.hero.introduction}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.55, ease: luxuryEase }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pt-2"
            >
              <Link
                href={`/${locale}/work`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-neutral-950 text-white text-xs uppercase tracking-[0.18em] font-medium hover:bg-neutral-800 transition-colors focus-visible:outline-2 focus-visible:outline-neutral-900 group"
              >
                <span>{dict.hero.exploreWork}</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </Link>

              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-neutral-300 text-neutral-900 text-xs uppercase tracking-[0.18em] font-medium hover:border-neutral-900 transition-colors focus-visible:outline-2 focus-visible:outline-neutral-900 group"
              >
                <span>{dict.hero.getInTouch}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>

            {/* Affiliation / Status Meta */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="mt-10 sm:mt-12 pt-6 border-t border-neutral-200/60 flex items-center gap-3 text-xs text-neutral-500 font-sans"
            >
              <span className="uppercase tracking-widest font-semibold text-neutral-900">
                Current:
              </span>
              <span>{dict.hero.badge}</span>
            </motion.div>
          </div>

          {/* Right Column: Hero Portrait Media (5 Cols Desktop) */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.15, ease: luxuryEase }}
              className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-none aspect-[4/5] bg-neutral-100 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-neutral-200/60"
            >
              {/* Authentic Video Portrait */}
              <video
                src="/assets/yuga-portrait.mp4"
                autoPlay
                loop
                muted
                playsInline
                aria-label={dict.hero.portraitAlt}
                className="w-full h-full object-cover object-center filter contrast-[1.02]"
              />

              {/* Minimalist Editorial Tag overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-white/90 bg-neutral-950/60 backdrop-blur-xs px-3.5 py-2">
                <span>01 / Portrait</span>
                <span>Paris</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

