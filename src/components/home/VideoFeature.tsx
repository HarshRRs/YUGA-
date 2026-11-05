'use client'

import React, { useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import type { Locale, Dictionary } from '@/lib/i18n'
import { luxuryEase } from '@/lib/motion/presets'

interface VideoFeatureProps {
  locale: Locale
  dict: Dictionary
}

export function VideoFeature({ locale, dict }: VideoFeatureProps) {
  const shouldReduceMotion = useReducedMotion()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <section className="py-20 lg:py-32 border-b border-neutral-200/80 bg-neutral-950 text-white">
      <div className="container-editorial">
        
        {/* Section Label */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: luxuryEase }}
          className="text-xs uppercase tracking-[0.24em] text-neutral-400 font-sans font-semibold mb-6 sm:mb-8"
        >
          {dict.video.label}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Editorial Description (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <motion.h2
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: luxuryEase }}
              className="text-section-heading text-white font-normal leading-tight"
            >
              {dict.video.heading}
            </motion.h2>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: luxuryEase }}
              className="text-body-editorial text-neutral-300 font-normal leading-relaxed max-w-xl"
            >
              {dict.video.description}
            </motion.p>

            {/* Video Controls Panel */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25, ease: luxuryEase }}
              className="pt-4 flex items-center gap-4"
            >
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? dict.video.pause : dict.video.play}
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-white text-black text-xs uppercase tracking-[0.18em] font-semibold hover:bg-neutral-200 transition-colors focus-visible:outline-white"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" />
                    <span>{dict.video.pause}</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>{dict.video.play}</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? dict.video.unmute : dict.video.mute}
                className="p-3.5 border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-400 transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </motion.div>
          </div>

          {/* Portrait Video Player (6 Cols) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1, ease: luxuryEase }}
              className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[9/16] bg-neutral-900 border border-neutral-800 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <video
                ref={videoRef}
                src="/assets/yuga-portrait.mp4"
                playsInline
                preload="metadata"
                loop
                muted={isMuted}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                aria-label={dict.video.videoAlt}
                className="w-full h-full object-cover object-center"
              />

              {/* Play / Pause Overlay Cue */}
              <div
                onClick={togglePlay}
                className="absolute inset-0 cursor-pointer flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    togglePlay()
                  }
                }}
                aria-label={isPlaying ? dict.video.pause : dict.video.play}
              >
                {!isPlaying && (
                  <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center shadow-lg text-black hover:scale-105 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                )}
              </div>

              {/* Minimal Bottom Info Bar */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-neutral-400 px-3 py-1.5 bg-black/60 backdrop-blur-xs pointer-events-none">
                <span>04 / Motion</span>
                <span>4K Portrait</span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  )
}

