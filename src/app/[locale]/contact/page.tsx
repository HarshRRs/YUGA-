import React from 'react'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getDictionary, isValidLocale, type Locale } from '@/lib/i18n'
import { constructMetadata } from '@/lib/metadata'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactDetails } from '@/components/contact/ContactDetails'

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
    title: dict.nav.contact,
    description: dict.contactPage.subtitle,
    path: '/contact',
  })
}

export default async function ContactPage({
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
    <div className="w-full pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="container-editorial">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-xs uppercase tracking-[0.24em] text-neutral-500 font-sans font-semibold mb-4">
            Direct Communication
          </p>
          <h1 className="text-page-heading text-neutral-950 font-normal leading-tight">
            {dict.contactPage.title}
          </h1>
          <p className="text-body-editorial text-neutral-600 font-sans mt-4 max-w-xl">
            {dict.contactPage.subtitle}
          </p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <ContactForm locale={locale} dict={dict} />
          </div>
          <div className="lg:col-span-5 lg:pl-4">
            <ContactDetails locale={locale} dict={dict} />
          </div>
        </div>

      </div>
    </div>
  )
}

