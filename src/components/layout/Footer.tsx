'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowUp } from 'lucide-react'
import type { Locale, Dictionary } from '@/lib/i18n'

interface FooterProps {
  locale: Locale
  dict: Dictionary
}

export function Footer({ locale, dict }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full bg-neutral-950 text-neutral-300 pt-16 pb-12 border-t border-neutral-900 mt-24">
      <div className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-14 border-b border-neutral-800">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href={`/${locale}`}
              className="font-serif text-3xl tracking-[0.18em] text-white uppercase inline-block"
            >
              {dict.nav.wordmark}
            </Link>
            <p className="font-serif text-lg italic text-neutral-400 max-w-sm">
              {dict.footer.tagline}
            </p>
            <p className="text-xs text-neutral-500 max-w-md leading-relaxed pt-2">
              {dict.footer.disclaimer}
            </p>
          </div>

          {/* Nav Col */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-neutral-400 block mb-3 font-semibold">
              Index
            </span>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/work`}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  {dict.nav.work}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/luxury-edit`}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  {dict.nav.luxury}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/journal`}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  {dict.nav.journal}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Action / Back to top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              type="button"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors p-2 -mr-2"
              aria-label={dict.footer.backToTop}
            >
              <span>{dict.footer.backToTop}</span>
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
            </button>
            <div className="text-xs text-neutral-500 font-sans mt-6 md:mt-0 text-left md:text-right">
              <p>Paris, France</p>
              <p className="mt-1">International Business & Luxury</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} YUGA. {dict.footer.copyright}</p>
          <p className="tracking-widest uppercase text-[11px] text-neutral-500">
            Designed & Engineered with Architectural Rigor
          </p>
        </div>
      </div>
    </footer>
  )
}

