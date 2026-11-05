'use client'

import React from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { luxuryEase } from '@/lib/motion/presets'

interface RevealProps {
  children: React.ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  delay?: number
  duration?: number
  distance?: number
}

export function Reveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 20,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  const getOffset = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 }
      case 'down':
        return { y: -distance, x: 0 }
      case 'left':
        return { x: distance, y: 0 }
      case 'right':
        return { x: -distance, y: 0 }
      case 'none':
      default:
        return { x: 0, y: 0 }
    }
  }

  const offset = getOffset()

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: luxuryEase,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

