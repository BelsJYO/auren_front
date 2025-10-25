'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function GetStarted() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isScrollLocked, setScrollLocked] = useState(false) // Default to not locked
  const contentRef = useRef<HTMLElement>(null)

  // On initial mount, check if the intro has been viewed in this session
  useEffect(() => {
    const hasViewedIntro = sessionStorage.getItem('hasViewedIntro')
    if (!hasViewedIntro) {
      setScrollLocked(true) // Lock scroll only if it's the first view
      sessionStorage.setItem('hasViewedIntro', 'true')
    }
  }, [])

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

  // Effect to handle the 4-second unlock if scroll is locked
  useEffect(() => {
    if (!isScrollLocked) return // Only run this if scroll is locked

    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => {
      if (video.currentTime >= 4) {
        setScrollLocked(false)
        contentRef.current?.scrollIntoView({ behavior: 'smooth' })
        video.removeEventListener('timeupdate', handleTimeUpdate)
      }
    }

    // A failsafe in case the video can't autoplay for some reason
    const failsafeTimeout = setTimeout(() => {
      if (isScrollLocked) {
        setScrollLocked(false)
        contentRef.current?.scrollIntoView({ behavior: 'smooth' })
        video.removeEventListener('timeupdate', handleTimeUpdate)
      }
    }, 5000) // Unlock after 5s regardless

    video.addEventListener('timeupdate', handleTimeUpdate)

    return () => {
      clearTimeout(failsafeTimeout)
      video.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [isScrollLocked])

  return (
    <main className="relative bg-white">
      <Navigation />

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
      </section>

      {/* Regular Scrollable Content Section */}
      <section ref={contentRef} className="relative bg-how-it-works-cream py-32 sm:py-48">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-x-12 gap-y-20 lg:grid-cols-2">
            
            {/* Left Column: Title and Description */}
            <motion.div 
              className="lg:pr-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9 }}
            >
              <div className="text-base font-semibold leading-7 text-gray-800">
                How it works
              </div>
              <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Streamlined Production
              </h2>
              <p className="mt-8 text-xl leading-8 text-gray-700">
                From your initial idea to the final product delivered to your customers, our platform simplifies every step of the manufacturing process.
              </p>
            </motion.div>

            {/* Right Column: Steps */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9 }}
            >
              <dl className="space-y-12 border-l-2 border-gray-900/20 pl-10">
                <div className="relative">
                  <dt className="text-xl font-semibold text-gray-900">
                    <div className="absolute -left-12 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white font-bold">01</div>
                    You design.
                  </dt>
                  <dd className="mt-3 text-lg leading-7 text-gray-600">
                    Use our powerful tools to create your product, or upload your existing designs.
                  </dd>
                </div>
                <div className="relative">
                  <dt className="text-xl font-semibold text-gray-900">
                    <div className="absolute -left-12 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white font-bold">02</div>
                    We source.
                  </dt>
                  <dd className="mt-3 text-lg leading-7 text-gray-600">
                    We connect you with the best manufacturers to bring your vision to life with quality materials.
                  </dd>
                </div>
                <div className="relative">
                  <dt className="text-xl font-semibold text-gray-900">
                    <div className="absolute -left-12 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white font-bold">03</div>
                    Products delivered to you.
                  </dt>
                  <dd className="mt-3 text-lg leading-7 text-gray-600">
                    We handle the logistics. Your final products are delivered directly to you or your customers.
                  </dd>
                </div>
              </dl>
            </motion.div>

          </div>
        </div>
      </section>

      {/* "Start Making" Section with Image */}
      <section className="relative h-screen bg-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 z-10 pointer-events-none">
          <Image
            src="/Gemini_Generated_Image_omrzreomrzreomrz.png"
            alt="Abstract 3D object"
            fill
            className="object-contain"
          />
        </div>
        
        {/* Clickable Overlay with a text-less button */}
        <div className="absolute inset-0 z-30 flex items-center justify-center cursor-pointer">
          <Link href="/catalog">
            <button className="rounded-full bg-white/10 px-8 py-4 text-lg font-semibold text-white shadow-lg ring-1 ring-white/20 backdrop-blur-sm transition hover:bg-white/20">
              Start Making
            </button>
          </Link>
        </div>
      </section>

      {/* Final Video Section ("Quality You Can Trust") */}
      <section className="relative h-[120vh] overflow-hidden">
        {/* Video Background */}
        <video 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover z-10"
          playsInline
          muted
          autoPlay
          loop
          preload="metadata"
        >
          <source src="/auren_3d_rotate_cube.mp4" type="video/mp4" />
        </video>

        {/* Overlay Content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center bg-black/30 px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Quality You Can Trust
            </h2>
            <p className="mt-6 text-xl leading-8 text-white/80">
              Every product is crafted with precision and care, using premium materials and working directly with select factories to ensure the highest quality standards.
            </p>
          </motion.div>

          {/* Glass Morphism Button */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <button className="rounded-full bg-white/10 px-8 py-4 text-lg font-semibold text-white shadow-lg ring-1 ring-white/20 backdrop-blur-sm transition hover:bg-white/20">
              Get in Contact
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
