'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import type { Locale, Dictionary } from '@/lib/i18n'
import { luxuryEase } from '@/lib/motion/presets'

interface ContactCTAProps {
  locale: Locale
  dict: Dictionary
}

export function ContactCTA({ locale, dict }: ContactCTAProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-24 lg:py-36">
      <div className="container-editorial">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: luxuryEase }}
            className="text-section-heading text-neutral-950 font-normal leading-tight"
          >
            {dict.contactCta.heading}
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15, ease: luxuryEase }}
            className="text-body-editorial text-neutral-600 font-sans max-w-xl mx-auto"
          >
            {dict.contactCta.subheading}
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.25, ease: luxuryEase }}
            className="pt-4"
          >
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-950 text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-neutral-800 transition-colors focus-visible:outline-2 focus-visible:outline-neutral-900 group"
            >
              <span>{dict.contactCta.button}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

