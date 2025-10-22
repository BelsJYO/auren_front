'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import VideoBackground from '@/components/VideoBackground'
import Link from 'next/link'

export default function CustomPage() {
  const [input, setInput] = useState('')

  return (
    <main className="relative min-h-screen bg-auren-black">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-white" />
            <span className="text-white text-xl font-light">auren</span>
          </Link>
          
          <div className="flex items-center gap-8">
            <button className="text-white/90 hover:text-white transition-colors text-sm">Info</button>
            <button className="text-white/90 hover:text-white transition-colors text-sm">Sign up</button>
            <button className="text-white/90 hover:text-white transition-colors text-sm">Login</button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="pt-32 px-8">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-light text-white mb-2">CUSTOM PRODUCT</h1>
            <p className="text-white/60 text-sm">step2</p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 py-16">
        <div className="max-w-[1600px] mx-auto">
          {/* Step 2 Section with gradient background */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden mb-8"
            style={{
              background: 'linear-gradient(135deg, rgba(100,200,255,0.1) 0%, rgba(200,100,255,0.1) 100%)'
            }}
          >
            <div className="relative h-[500px] flex items-center justify-center">
              {/* Blurred background effect */}
              <div className="absolute inset-0" style={{
                background: 'radial-gradient(circle at 30% 50%, rgba(150,200,255,0.3), transparent 50%), radial-gradient(circle at 70% 50%, rgba(255,150,200,0.3), transparent 50%)',
                filter: 'blur(60px)'
              }} />
              
              {/* Content */}
              <div className="relative z-10 text-center px-8 max-w-3xl">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-5xl md:text-6xl font-light text-white mb-8"
                >
                  Make Anything Custom
                </motion.h2>

                {/* Chat Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="relative max-w-2xl mx-auto"
                >
                  <div className="bg-auren-black/60 backdrop-blur-xl border border-white/20 rounded-full p-2 pr-4 flex items-center gap-4">
                    <div className="pl-4 flex items-center gap-3 flex-1">
                      <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="I want to make a custom t-shirt..."
                        className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/40 text-base"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                        </svg>
                      </button>
                      <button className="w-10 h-10 rounded-full bg-white hover:bg-white/90 transition-colors flex items-center justify-center">
                        <svg className="w-5 h-5 text-auren-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="relative h-[400px]">
              <VideoBackground />
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-5xl md:text-6xl font-light text-white mb-6">
                    Make With Auren
                  </h3>
                  <button className="px-12 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-white/15 transition-all">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-auren-black border-t border-white/10 py-12 px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Logo & Copyright */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full border-2 border-white" />
                <span className="text-white text-xl font-light">auren</span>
              </div>
              <p className="text-white/40 text-xs">© 2025 Auren</p>
            </div>

            {/* Main */}
            <div>
              <h4 className="text-white font-light mb-4 text-sm">Main</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs">Products</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs">About</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs">Pricing</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs">Blog</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-light mb-4 text-sm">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs">Team</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs">Careers</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs">Contact</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs">Privacy</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-light mb-4 text-sm">Newsletter</h4>
              <p className="text-white/60 text-xs mb-4">Subscribe to get news and updates</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white text-xs placeholder:text-white/40 focus:outline-none focus:border-white/40"
                />
                <button className="px-6 py-2 bg-white text-auren-black rounded-full text-xs hover:bg-white/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

