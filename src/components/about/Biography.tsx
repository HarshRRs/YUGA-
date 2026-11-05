import React from 'react'
import type { Locale, Dictionary } from '@/lib/i18n'

interface BiographyProps {
  locale: Locale
  dict: Dictionary
}

export function Biography({ locale, dict }: BiographyProps) {
  return (
    <section className="py-16 lg:py-24 border-b border-neutral-200/80">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Label / Sub-index (4 Cols) */}
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-[0.24em] text-neutral-500 font-sans font-semibold block mb-2">
              02 — Background
            </span>
            <h2 className="font-serif text-3xl text-neutral-950 font-normal">
              {dict.aboutPage.backgroundTitle}
            </h2>
          </div>

          {/* Biography Content (8 Cols) */}
          <div className="lg:col-span-8 space-y-6 max-w-2xl">
            <p className="text-body-editorial text-neutral-800 font-normal leading-relaxed">
              {dict.aboutPage.backgroundBody1}
            </p>
            <p className="text-body-editorial text-neutral-600 font-normal leading-relaxed">
              {dict.aboutPage.backgroundBody2}
            </p>

            {/* Career Direction Subsection */}
            <div className="pt-8 border-t border-neutral-100 space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-sans font-semibold block">
                06 — {dict.aboutPage.careerTitle}
              </span>
              <p className="text-body-editorial text-neutral-700 font-normal leading-relaxed">
                {dict.aboutPage.careerBody}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

