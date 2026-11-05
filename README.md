# YUGA — Phase 1: Premium Website Foundation

An exceptionally sophisticated personal portfolio website inspired by the presentation quality, refinement and editorial storytelling of world-class luxury fashion houses.

Built for **Yuga**, an International Business Management student currently undertaking an internship at Christian Louboutin.

---

## Architecture & Technology Stack

- **Framework**: Next.js 15 (App Router, React Server Components by default)
- **Language**: TypeScript (Strict mode, zero `any`, full type-safety)
- **Styling**: Tailwind CSS v4 & custom fluid typography clamp system
- **Motion**: `motion` (Motion 12) with custom cubic bezier luxury easing (`luxuryEase`)
- **Typography**: Google Fonts loaded via `next/font/google`:
  - **Cormorant Garamond** (Serif): Wordmark, hero heading, section titles, editorial statements
  - **Manrope** (Sans): Navigation, body copy, controls, form inputs, metadata
- **Internationalization**: Bilingual architecture (`/en` and `/fr`), dictionary-based, preserving route equivalence across language switching
- **SEO & Accessibility**: Fully compliant semantic HTML5, WCAG 2.2 AA compliant, Open Graph / Twitter metadata, dynamic `sitemap.xml` and `robots.txt`
- **Future Integration Ready**: Structured data models in `src/lib/content/` prepared for seamless integration with Payload CMS, PostgreSQL, Rive, and Google Model Viewer in upcoming phases.

---

## Directory Structure

```text
src/
  app/
    fonts.ts                      # Cormorant Garamond & Manrope font configurations
    layout.tsx                    # Root layout wrapper
    page.tsx                      # Root locale redirect (/ -> /en)
    robots.ts                     # Search engine crawler policies
    sitemap.ts                    # Dynamic bilingual sitemap generator
    actions/
      contact.ts                  # Server action with Zod validation & truthful staging check
    [locale]/
      layout.tsx                  # Locale-specific HTML lang, header, footer, skip link
      page.tsx                    # Editorial Homepage
      not-found.tsx               # Luxury 404 page
      about/
        page.tsx                  # Comprehensive 7-section About page
      work/
        page.tsx                  # Selected Work & Academic Frameworks route
      luxury-edit/
        page.tsx                  # Luxury Edit & Maison Study route
      journal/
        page.tsx                  # Journal & Editorial Essays route
      contact/
        page.tsx                  # Professional Contact page

  components/
    animations/
      AnimatedHeading.tsx         # Accessible SplitText heading reveal
      Reveal.tsx                  # Once-only viewport scroll reveal wrapper
      StaggerContainer.tsx        # Staggered entrance controller
    layout/
      Header.tsx                  # Sticky luxury header with scroll elevation
      Footer.tsx                  # Editorial dark-mode footer with back-to-top
      MobileNavigation.tsx        # Accessible Radix Dialog sheet navigation
      LanguageSwitcher.tsx        # Route-preserving bilingual toggle (EN / FR)
    home/
      HeroSection.tsx             # Asymmetric editorial split hero with portrait video
      IntroductionSection.tsx     # Academic overview & prominent quote band
      ExperiencePreview.tsx       # Christian Louboutin internship immersion & disclaimer
      WorkPreview.tsx             # Academic framework cards with hover lift
      VideoFeature.tsx            # Authentic 9:16 portrait video player with controls
      JournalPreview.tsx          # Editorial publication preview
      ContactCTA.tsx              # Final luxury contact invitation
    about/
      AboutHero.tsx               # Biography statement with portrait frame
      Biography.tsx               # Background & career direction
      EducationSection.tsx        # International Business Management foundation
      ExperienceTimeline.tsx      # Factual internship responsibilities & learnings
      SkillsSection.tsx           # Business & technical capabilities + CV request module
    contact/
      ContactForm.tsx             # Validated form with honeypot & transparent staging notice
      ContactDetails.tsx          # Direct communication, location & focus details

  dictionaries/
    en.json                       # English comprehensive translations
    fr.json                       # French comprehensive translations

  lib/
    i18n/                         # Locale resolution & type definitions
    metadata/                     # Standardized OpenGraph and SEO generators
    motion/                       # Motion presets and cubic bezier luxury easing
    content/                      # Typed interfaces ready for Payload CMS
    utils.ts                      # Tailwind merge utility (cn)

  styles/
    globals.css                   # Fluid clamp typography, resets, accessibility
```

---

## Running the Project

```bash
# Start development server
pnpm run dev

# Build production bundle
pnpm run build

# Start production server
pnpm run start
```

