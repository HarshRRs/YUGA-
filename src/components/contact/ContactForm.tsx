'use client'

import React, { useActionState, useState } from 'react'
import { submitContactMessage, type ContactActionState } from '@/app/actions/contact'
import type { Locale, Dictionary } from '@/lib/i18n'
import { CheckCircle2, AlertCircle, Send, Info } from 'lucide-react'

interface ContactFormProps {
  locale: Locale
  dict: Dictionary
}

const initialState: ContactActionState = {
  success: false,
  isConfigured: false,
}

export function ContactForm({ locale, dict }: ContactFormProps) {
  const [state, formAction, isPending] = useActionState(submitContactMessage, initialState)
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({})

  const labels = dict.contactPage.form

  const validateClient = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const subject = (form.elements.namedItem('subject') as HTMLInputElement).value
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value

    const errors: Record<string, string> = {}
    if (!name || name.trim().length < 2) {
      errors.name = labels.validation.nameRequired
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = labels.validation.emailInvalid
    }
    if (!subject || subject.trim().length < 3) {
      errors.subject = labels.validation.subjectRequired
    }
    if (!message || message.trim().length < 10) {
      errors.message = labels.validation.messageRequired
    }

    if (Object.keys(errors).length > 0) {
      e.preventDefault()
      setClientErrors(errors)
      return false
    }
    setClientErrors({})
    return true
  }

  return (
    <div className="bg-white p-8 sm:p-12 border border-neutral-200 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
      
      {state.success ? (
        <div className="space-y-6 py-6" role="status" aria-live="polite">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-neutral-900 shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h3 className="font-serif text-2xl text-neutral-950 font-normal">
                {labels.successTitle}
              </h3>
              <p className="text-sm text-neutral-600 font-sans leading-relaxed">
                {labels.successMessage}
              </p>
            </div>
          </div>

          {!state.isConfigured && (
            <div className="p-4 bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 flex items-start gap-3">
              <Info className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
              <span>{labels.unconfiguredNotice}</span>
            </div>
          )}
        </div>
      ) : (
        <form action={formAction} onSubmit={validateClient} noValidate className="space-y-6">
          
          {/* Honeypot Spam Protection Field - Hidden from humans */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website_trap">Do not fill this field</label>
            <input
              type="text"
              id="website_trap"
              name="website_trap"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Full Name */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-xs uppercase tracking-[0.16em] font-semibold text-neutral-800 font-sans"
            >
              {labels.nameLabel} <span className="text-neutral-400">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder={labels.namePlaceholder}
              className="w-full px-4 py-3.5 bg-neutral-50/50 border border-neutral-300 text-sm font-sans text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:border-black focus:outline-none transition-colors"
              aria-describedby={clientErrors.name || state.errors?.name ? 'name-error' : undefined}
            />
            {(clientErrors.name || state.errors?.name?.[0]) && (
              <p id="name-error" className="text-xs text-neutral-900 font-sans flex items-center gap-1.5 pt-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{clientErrors.name || state.errors?.name?.[0]}</span>
              </p>
            )}
          </div>

          {/* Email Address */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-xs uppercase tracking-[0.16em] font-semibold text-neutral-800 font-sans"
            >
              {labels.emailLabel} <span className="text-neutral-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder={labels.emailPlaceholder}
              className="w-full px-4 py-3.5 bg-neutral-50/50 border border-neutral-300 text-sm font-sans text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:border-black focus:outline-none transition-colors"
              aria-describedby={clientErrors.email || state.errors?.email ? 'email-error' : undefined}
            />
            {(clientErrors.email || state.errors?.email?.[0]) && (
              <p id="email-error" className="text-xs text-neutral-900 font-sans flex items-center gap-1.5 pt-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{clientErrors.email || state.errors?.email?.[0]}</span>
              </p>
            )}
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="block text-xs uppercase tracking-[0.16em] font-semibold text-neutral-800 font-sans"
            >
              {labels.subjectLabel} <span className="text-neutral-400">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder={labels.subjectPlaceholder}
              className="w-full px-4 py-3.5 bg-neutral-50/50 border border-neutral-300 text-sm font-sans text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:border-black focus:outline-none transition-colors"
              aria-describedby={clientErrors.subject || state.errors?.subject ? 'subject-error' : undefined}
            />
            {(clientErrors.subject || state.errors?.subject?.[0]) && (
              <p id="subject-error" className="text-xs text-neutral-900 font-sans flex items-center gap-1.5 pt-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{clientErrors.subject || state.errors?.subject?.[0]}</span>
              </p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-xs uppercase tracking-[0.16em] font-semibold text-neutral-800 font-sans"
            >
              {labels.messageLabel} <span className="text-neutral-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder={labels.messagePlaceholder}
              className="w-full px-4 py-3.5 bg-neutral-50/50 border border-neutral-300 text-sm font-sans text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:border-black focus:outline-none transition-colors resize-y"
              aria-describedby={clientErrors.message || state.errors?.message ? 'message-error' : undefined}
            />
            {(clientErrors.message || state.errors?.message?.[0]) && (
              <p id="message-error" className="text-xs text-neutral-900 font-sans flex items-center gap-1.5 pt-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{clientErrors.message || state.errors?.message?.[0]}</span>
              </p>
            )}
          </div>

          {/* General form error if any */}
          {state.message && !state.success && (
            <div className="p-4 bg-neutral-100 border border-neutral-300 text-xs text-neutral-900 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
              <span>{state.message}</span>
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isPending}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-neutral-950 text-white text-xs uppercase tracking-[0.18em] font-medium hover:bg-neutral-800 disabled:opacity-50 transition-colors focus-visible:outline-2 focus-visible:outline-neutral-900"
            >
              <span>{isPending ? labels.sendingButton : labels.submitButton}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>

        </form>
      )}

    </div>
  )
}

