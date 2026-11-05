'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'motion/react'
import type { Locale, Dictionary } from '@/lib/i18n'
import { LanguageSwitcher } from './LanguageSwitcher'
import { MobileNavigation } from './MobileNavigation'

interface HeaderProps {
  locale: Locale
  dict: Dictionary
}

export function Header({ locale, dict }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/work`, label: dict.nav.work },
    { href: `/${locale}/luxury-edit`, label: dict.nav.luxury },
    { href: `/${locale}/journal`, label: dict.nav.journal },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-white/90 backdrop-blur-md border-b border-neutral-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
          : 'py-6 bg-white/80 backdrop-blur-xs border-b border-transparent'
      }`}
    >
      <div className="container-editorial flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href={`/${locale}`}
          aria-label={`${dict.nav.wordmark} - Home`}
          className="group inline-flex items-center"
        >
          <span className="font-serif text-wordmark text-neutral-900 tracking-[0.16em] group-hover:opacity-70 transition-opacity">
            {dict.nav.wordmark}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center space-x-8 xl:space-x-10 text-sm tracking-wider font-sans uppercase"
          aria-label="Primary Navigation"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 text-xs tracking-[0.12em] uppercase transition-colors hover:text-black ${
                  isActive
                    ? 'text-black font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-black'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Desktop Controls (Language Switcher) */}
        <div className="hidden lg:flex items-center space-x-4 pl-4 border-l border-neutral-200">
          <LanguageSwitcher currentLocale={locale} />
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center space-x-3 lg:hidden">
          <LanguageSwitcher currentLocale={locale} className="mr-1" />
          <MobileNavigation
            locale={locale}
            items={navItems}
            labels={{
              menuOpen: dict.nav.menuOpen,
              menuClose: dict.nav.menuClose,
              wordmark: dict.nav.wordmark,
            }}
          />
        </div>
      </div>
    </header>
  )
}

