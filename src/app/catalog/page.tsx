'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function CatalogPage() {
  return (
    <main
      className="relative min-h-screen text-white overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute top-1 right-2 text-grey font-semibold tracking-widest uppercase">
        Make it with auren
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 items-start">
          {/* Left side content */}
          <div className="text-left">
            <div className="fixed top-15 left-14 z-20">
              <div className="text-white text-3xl font-light mb-2">01</div>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-1 bg-white rounded-full"></div>
                <div className="w-24 h-1 bg-white/30 rounded-full"></div>
              </div>
              <h1 className="mt-4 text-6xl font-bold tracking-tight text-white leading-tight">
                Ready to make your
                <br />
                custom products?
              </h1>
            </div>
          </div>

          {/* Right side Buttons */}
          <motion.div
            className="mt-12 lg:mt-0 flex items-center justify-center gap-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Catalog Button - Black */}
            <Link href="/order-quantity">
              <motion.div
                className="relative w-[400px] h-[560px] bg-black backdrop-blur-xl border-2 border-white/30 cursor-pointer shadow-2xl overflow-hidden group"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 255, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <div className="flex justify-end items-center p-6 text-white/80 group-hover:text-white transition-colors">
                  <span className="text-sm font-medium">Start Making</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2"
                  >
                    <path
                      d="M7 17L17 7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 7H17V17"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="flex flex-col items-center justify-center px-8 mt-2">
                  <div className="inline-block mb-4">
                    <Image
                      src="/Subtract.png"
                      alt="Catalog"
                      width={64}
                      height={64}
                      className="opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-2 text-center">
                    Make it fast
                  </h2>
                  <p className="text-white/50 text-center">
                    Ready-to-set and customizable
                    <br />
                    apparel & more.
                  </p>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center text-white/90">
                      <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Quick Turnarounds
                    </li>
                    <li className="flex items-center text-white/90">
                     <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Premium quality
                    </li>
                  </ul>
                </div>
              </motion.div>
            </Link>

            {/* Make it Custom Button - Beige */}
            <Link href="/chat-box">
              <motion.div
                className="relative w-[400px] h-[560px] bg-[#E8DCC4] backdrop-blur-xl border-2 border-[#D4C5A9] cursor-pointer shadow-2xl overflow-hidden group"
                whileHover={{ scale: 1.05, borderColor: 'rgba(212, 197, 169, 1)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex justify-end items-center p-6 text-[#6B5D4F]/80 group-hover:text-[#6B5D4F] transition-colors">
                  <span className="text-sm font-medium">Start Making</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2"
                  >
                    <path
                      d="M7 17L17 7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 7H17V17"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="flex flex-col items-center justify-center px-8 mt-2">
                  <div className="inline-block mb-4">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 20h24v24H20z" stroke="#6B5D4F" strokeWidth="2" fill="none" opacity="0.7" className="group-hover:opacity-100 transition-opacity"/>
                      <circle cx="32" cy="32" r="8" stroke="#6B5D4F" strokeWidth="2" fill="none" opacity="0.7" className="group-hover:opacity-100 transition-opacity"/>
                    </svg>
                  </div>
                  <h2 className="text-4xl font-bold text-[#6B5D4F] mb-2 text-center">
                    Make it Custom
                  </h2>
                  <p className="text-[#6B5D4F]/70 text-center">
                  <br/>
                  <br/>
                    Products designed from the ground up.
                  </p>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center text-[#6B5D4F]/90">
                      <svg className="w-5 h-5 mr-2 text-[#8B7355]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Total Creative Freedom
                    </li>
                    <li className="flex items-center text-[#6B5D4F]/90">
                     <svg className="w-5 h-5 mr-2 text-[#8B7355]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Transparent Pricing
                    </li>
                  </ul>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
      