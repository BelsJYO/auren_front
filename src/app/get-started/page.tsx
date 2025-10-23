'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export default function GetStarted() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isScrollLocked, setScrollLocked] = useState(true)
  const contentRef = useRef<HTMLElement>(null)

  // Effect to lock and unlock body scroll
  useEffect(() => {
    if (isScrollLocked) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isScrollLocked])

  // Effect to handle the 4-second unlock
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => {
      if (video.currentTime >= 4) {
        setScrollLocked(false)
        contentRef.current?.scrollIntoView({ behavior: 'smooth' })
        // Remove the listener once the condition is met
        video.removeEventListener('timeupdate', handleTimeUpdate)
      }
    }

    video.addEventListener('timeupdate', handleTimeUpdate)

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [])

  return (
    <main className="relative bg-white">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-black/20 backdrop-blur-sm">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-white" />
            <span className="text-white text-xl font-light">auren</span>
          </div>
          
          {/* Nav Links */}
          <div className="flex items-center gap-8">
            <button className="text-white/90 hover:text-white transition-colors text-sm">Info</button>
            <button className="text-white/90 hover:text-white transition-colors text-sm">Sign up</button>
            <button className="text-white/90 hover:text-white transition-colors text-sm">Login</button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Optimized Video Background */}
      <section className="relative h-screen overflow-hidden">
        <video
          ref={videoRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover z-10"
          playsInline
          muted
          autoPlay
          preload="metadata"
        >
          <source src="/auren_scroll.mp4" type="video/mp4" />
        </video>
        
        {/* This div provides the subtle overlay tint */}
        <div className="absolute inset-0 bg-black/20 z-20"></div>

        {/* Your navigation remains on top */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-black/20 backdrop-blur-sm">
          <div className="max-w-[1600px] mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border-2 border-white" />
              <span className="text-white text-xl font-light">auren</span>
            </div>
            
            {/* Nav Links */}
            <div className="flex items-center gap-8">
              <button className="text-white/90 hover:text-white transition-colors text-sm">Info</button>
              <button className="text-white/90 hover:text-white transition-colors text-sm">Sign up</button>
              <button className="text-white/90 hover:text-white transition-colors text-sm">Login</button>
            </div>
          </div>
        </nav>
      </section>

      {/* Regular Scrollable Content Section */}
      <section ref={contentRef} className="relative bg-auren-black py-32 px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-light text-white mb-8 leading-tight">
              Discover What's Possible
            </h2>
            <p className="text-white/60 text-xl max-w-3xl mx-auto">
              From concept to creation, see how Auren transforms ideas into premium products 
              that are ready to ship and sell to your customers.
            </p>
          </motion.div>

          {/* Product Grid Placeholder */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl aspect-square flex items-center justify-center"
              >
                <div className="text-6xl">🧴</div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-light text-white mb-8">
              Ready to create your own?
            </h3>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="px-12 py-4 text-white text-base font-light bg-white/10 backdrop-blur-xl border border-white/20 rounded-full hover:bg-white/15 transition-all duration-300">
                Start Creating
              </button>
              <button className="px-12 py-4 text-white text-base font-light bg-auren-tan rounded-full hover:bg-auren-tan/90 transition-all duration-300">
                View Catalog
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Content Sections */}
      <section className="relative bg-auren-cream py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-light text-auren-black mb-6">
                Quality You Can Trust
              </h2>
              <p className="text-auren-black/60 text-lg mb-8">
                Every product is crafted with precision and care, using premium materials 
                and working directly with select factories to ensure the highest quality standards.
              </p>
              <ul className="space-y-4">
                {[
                  'Premium materials sourced globally',
                  'Direct factory partnerships',
                  'Quality assurance at every step',
                  'Fast and reliable shipping'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-auren-black/80">
                    <div className="w-5 h-5 bg-auren-tan rounded-full flex items-center justify-center text-white text-xs">✓</div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 shadow-2xl"
            >
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-8xl">💎</div>
              </div>
              <h3 className="text-2xl font-light text-auren-black mb-2">Premium Quality</h3>
              <p className="text-auren-black/60">Crafted to perfection</p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
