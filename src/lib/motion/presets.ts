import type { Variants, Transition } from 'motion/react'

export const luxuryEase = [0.22, 1, 0.36, 1] as const // refined cubic bezier for luxury feeling

export const transitions = {
  slow: { duration: 0.7, ease: luxuryEase },
  medium: { duration: 0.5, ease: luxuryEase },
  fast: { duration: 0.3, ease: luxuryEase },
  micro: { duration: 0.2, ease: 'easeOut' },
}

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitions.slow,
  },
}

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.slow,
  },
}

export const smallSlideVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.medium,
  },
}

export const imageRevealVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: luxuryEase },
  },
}

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
}

export const hoverLiftVariants = {
  initial: { y: 0 },
  hover: {
    y: -3,
    transition: transitions.micro,
  },
}

