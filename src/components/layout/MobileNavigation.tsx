'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as Dialog from '@radix-ui/react-dialog'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { LanguageSwitcher } from './LanguageSwitcher'

interface NavItem {
  href: string
  label: string
}

interface MobileNavigationProps {
  locale: Locale
  items: NavItem[]
  labels: {
    menuOpen: string
    menuClose: string
    wordmark: string
  }
}

export function MobileNavigation({
  locale,
  items,
  labels,
}: MobileNavigationProps) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const handleClose = () => setOpen(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label={labels.menuOpen}
          className="lg:hidden p-2 text-neutral-900 hover:text-neutral-600 transition-colors focus-visible:outline-2 focus-visible:outline-neutral-900"
        >
          <Menu className="w-6 h-6" />
        </button>
      </Dialog.Trigger>

      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              />
            </Dialog.Overlay>

            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6 sm:p-8 flex flex-col justify-between shadow-2xl border-l border-neutral-200"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-neutral-200">
                    <span className="font-serif text-2xl tracking-[0.15em] font-medium uppercase">
                      {labels.wordmark}
                    </span>
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        aria-label={labels.menuClose}
                        className="p-2 text-neutral-900 hover:text-neutral-500 transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </Dialog.Close>
                  </div>

                  <nav className="mt-8 flex flex-col space-y-5" aria-label="Mobile Navigation">
                    {items.map((item) => {
                      const isActive = pathname === item.href
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={handleClose}
                          className={`font-serif text-2xl tracking-wide transition-colors py-1 ${
                            isActive
                              ? 'font-medium text-black underline underline-offset-8 decoration-1'
                              : 'text-neutral-600 hover:text-black'
                          }`}
                        >
                          {item.label}
                        </Link>
                      )
                    })}
                  </nav>
                </div>

                <div className="pt-6 border-t border-neutral-200 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-neutral-500 font-sans">
                    Language
                  </span>
                  <LanguageSwitcher
                    currentLocale={locale}
                    onSelect={handleClose}
                  />
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}

