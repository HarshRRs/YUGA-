import React from 'react'
import type { Locale, Dictionary } from '@/lib/i18n'
import { MapPin, Target, Briefcase } from 'lucide-react'

interface ContactDetailsProps {
  locale: Locale
  dict: Dictionary
}

export function ContactDetails({ locale, dict }: ContactDetailsProps) {
  const details = dict.contactPage.details

  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-serif text-2xl text-neutral-950 font-normal mb-2">
          Direct Inquiries
        </h3>
        <p className="text-body-editorial text-neutral-600 font-sans leading-relaxed">
          {dict.contactPage.availability}
        </p>
      </div>

      <div className="space-y-6 pt-4 border-t border-neutral-200">
        
        {/* Location */}
        <div className="flex items-start gap-4">
          <MapPin className="w-5 h-5 text-neutral-900 shrink-0 mt-0.5" />
          <div>
            <span className="text-[11px] uppercase tracking-widest text-neutral-500 font-sans font-semibold block">
              {details.locationLabel}
            </span>
            <p className="text-sm sm:text-base text-neutral-800 font-sans font-medium mt-0.5">
              {details.locationValue}
            </p>
          </div>
        </div>

        {/* Primary Focus */}
        <div className="flex items-start gap-4">
          <Target className="w-5 h-5 text-neutral-900 shrink-0 mt-0.5" />
          <div>
            <span className="text-[11px] uppercase tracking-widest text-neutral-500 font-sans font-semibold block">
              {details.focusLabel}
            </span>
            <p className="text-sm sm:text-base text-neutral-800 font-sans font-medium mt-0.5">
              {details.focusValue}
            </p>
          </div>
        </div>

        {/* Affiliation */}
        <div className="flex items-start gap-4">
          <Briefcase className="w-5 h-5 text-neutral-900 shrink-0 mt-0.5" />
          <div>
            <span className="text-[11px] uppercase tracking-widest text-neutral-500 font-sans font-semibold block">
              {details.affiliationLabel}
            </span>
            <p className="text-sm sm:text-base text-neutral-800 font-sans font-medium mt-0.5">
              {details.affiliationValue}
            </p>
          </div>
        </div>

      </div>

      <div className="p-6 bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 leading-relaxed font-sans">
        {dict.experience.disclaimer}
      </div>
    </div>
  )
}

