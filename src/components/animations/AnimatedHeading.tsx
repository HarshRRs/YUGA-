'use client'

import React from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { luxuryEase } from '@/lib/motion/presets'

interface AnimatedHeadingProps {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  className?: string
  splitMode?: 'letters' | 'words' | 'none'
  delay?: number
  duration?: number
}

export function AnimatedHeading({
  text,
  as: Tag = 'h1',
  className = '',
  splitMode = 'letters',
  delay = 0,
  duration = 0.7,
}: AnimatedHeadingProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion || splitMode === 'none') {
    return <Tag className={className}>{text}</Tag>
  }

  if (splitMode === 'words') {
    const words = text.split(' ')
    return (
      <Tag className={className} aria-label={text}>
        <span className="sr-only">{text}</span>
        <motion.span
          aria-hidden="true"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
                delayChildren: delay,
              },
            },
          }}
          className="inline-block"
        >
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              variants={{
                hidden: { opacity: 0, y: '30%' },
                visible: {
                  opacity: 1,
                  y: '0%',
                  transition: { duration, ease: luxuryEase },
                },
              }}
              className="inline-block mr-[0.25em] last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </motion.span>
      </Tag>
    )
  }

  // Letters split mode (SplitText effect)
  const letters = Array.from(text)

  return (
    <Tag className={className} aria-label={text}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden="true"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.04,
              delayChildren: delay,
            },
          },
        }}
        className="inline-block"
      >
        {letters.map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            variants={{
              hidden: { opacity: 0, y: '40%' },
              visible: {
                opacity: 1,
                y: '0%',
                transition: { duration, ease: luxuryEase },
              },
            }}
            className="inline-block whitespace-pre"
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  )
}

