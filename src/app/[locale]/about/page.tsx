import React from 'react'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getDictionary, isValidLocale, type Locale } from '@/lib/i18n'
import { constructMetadata } from '@/lib/metadata'
import { AboutHero } from '@/components/about/AboutHero'
import { Biography } from '@/components/about/Biography'
import { EducationSection } from '@/components/about/EducationSection'
import { ExperienceTimeline } from '@/components/about/ExperienceTimeline'
import { SkillsSection } from '@/components/about/SkillsSection'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isValidLocale(locale)) return {}
  const dict = getDictionary(locale)
  return constructMetadata({
    locale,
    title: dict.nav.about,
    description: dict.aboutPage.heroIntro,
    path: '/about',
  })
}

export default async function AboutPage({
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
      <AboutHero locale={locale} dict={dict} />
      <Biography locale={locale} dict={dict} />
      <EducationSection locale={locale} dict={dict} />
      <ExperienceTimeline locale={locale} dict={dict} />
      <SkillsSection locale={locale} dict={dict} />
    </div>
  )
}

