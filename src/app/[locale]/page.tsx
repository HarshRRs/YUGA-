import React from 'react'
import { notFound } from 'next/navigation'
import { getDictionary, isValidLocale, type Locale } from '@/lib/i18n'
import { HeroSection } from '@/components/home/HeroSection'
import { IntroductionSection } from '@/components/home/IntroductionSection'
import { ExperiencePreview } from '@/components/home/ExperiencePreview'
import { WorkPreview } from '@/components/home/WorkPreview'
import { VideoFeature } from '@/components/home/VideoFeature'
import { JournalPreview } from '@/components/home/JournalPreview'
import { ContactCTA } from '@/components/home/ContactCTA'

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isValidLocale(locale)) {
    notFound()
  }

  const dict = getDictionary(locale)

  return (
    <div className="w-full">
      <HeroSection locale={locale} dict={dict} />
      <IntroductionSection locale={locale} dict={dict} />
      <ExperiencePreview locale={locale} dict={dict} />
      <WorkPreview locale={locale} dict={dict} />
      <VideoFeature locale={locale} dict={dict} />
      <JournalPreview locale={locale} dict={dict} />
      <ContactCTA locale={locale} dict={dict} />
    </div>
  )
}

