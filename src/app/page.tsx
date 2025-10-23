'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import VideoBackground from '@/components/VideoBackground'
import Link from 'next/link'

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false)

  return (
    <main className="relative bg-white">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-transparent">
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
      
      {/* Section 1: Hero with Video Background */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <VideoBackground />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-6xl px-8"
        >
          <h1 className="text-6xl md:text-8xl font-light text-white mb-6 leading-tight">
            Make it here.
            <br />
            Share it everywhere.
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/80 text-xl md:text-2xl mb-12 font-light"
          >
            Auren turns your ideas into products,
            <br />
            ready to ship and sell.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-4 justify-center"
          >
            <Link href="/get-started">
              <button className="px-12 py-4 text-white text-base font-light bg-white/10 backdrop-blur-xl border border-white/20 rounded-full hover:bg-white/15 transition-all duration-300">
                Get Started
              </button>
            </Link>
            <button 
              onClick={() => setShowContactForm(true)}
              className="px-12 py-4 text-white text-base font-light bg-white/10 backdrop-blur-xl border border-white/20 rounded-full hover:bg-white/15 transition-all duration-300"
            >
              Get in Contact
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-white/60 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Section 2: We work directly with factories */}
      <section id="content" className="relative bg-auren-black py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-light text-white mb-8 leading-tight">
              We work directly with select factories to
              <br />
              give you the best quality at the best prices.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-2xl aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-9xl">💎</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Product Showcase - Auren */}
      <section className="relative bg-auren-black py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black mb-12">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-8xl">🧴</div>
              </div>
            </div>
            <h3 className="text-6xl font-light text-white mb-4">Auren</h3>
            <p className="text-white/60 text-lg">Premium Quality</p>
          </motion.div>
        </div>
      </section>

      {/* Section 4: How it Works */}
      <section className="relative bg-auren-cream py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left side - Steps */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-light text-auren-black mb-16">
                How it Works
              </h2>
              
              <div className="space-y-8">
                {[
                  { number: '01', title: 'Tell us', desc: 'What you want' },
                  { number: '02', title: 'We make', desc: 'Your product' },
                  { number: '03', title: 'You sell', desc: 'To your customers' },
                  { number: '04', title: 'Business', desc: 'Fulfillment' },
                ].map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-6 py-4 border-b border-auren-black/10"
                  >
                    <span className="text-auren-black/40 text-sm font-light">{step.number}</span>
                    <div>
                      <h3 className="text-2xl font-light text-auren-black mb-1">{step.title}</h3>
                      <p className="text-auren-black/60">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side - Form mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 shadow-2xl"
            >
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-auren-black/60 mb-2">Product Type</label>
                  <div className="h-12 bg-gray-100 rounded-xl"></div>
                </div>
                <div>
                  <label className="block text-sm text-auren-black/60 mb-2">Quantity</label>
                  <div className="h-12 bg-gray-100 rounded-xl"></div>
                </div>
                <div>
                  <label className="block text-sm text-auren-black/60 mb-2">Design</label>
                  <div className="h-32 bg-gray-100 rounded-xl"></div>
                </div>
                <button className="w-full bg-auren-black text-white py-4 rounded-full hover:bg-auren-black/90 transition-colors">
                  Get Quote
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Pricing Cards */}
      <section className="relative bg-gradient-to-br from-gray-100 to-white py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-light text-auren-black mb-6">
              Let's make your
              <br />
              dream products
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Catalog Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-3xl font-light text-auren-black mb-4">Catalog</h3>
              <p className="text-auren-black/60 mb-8">
                Choose from our pre-selected products
              </p>
              <div className="mb-8">
                <div className="text-5xl font-light text-auren-black mb-2">$500</div>
                <div className="text-auren-black/60">Starting from</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-auren-black/80">
                  <div className="w-5 h-5 bg-auren-tan rounded-full flex items-center justify-center text-white text-xs">✓</div>
                  <span>Fast turnaround</span>
                </li>
                <li className="flex items-center gap-3 text-auren-black/80">
                  <div className="w-5 h-5 bg-auren-tan rounded-full flex items-center justify-center text-white text-xs">✓</div>
                  <span>Proven quality</span>
                </li>
                <li className="flex items-center gap-3 text-auren-black/80">
                  <div className="w-5 h-5 bg-auren-tan rounded-full flex items-center justify-center text-white text-xs">✓</div>
                  <span>Lower minimums</span>
                </li>
              </ul>
              <Link href="/get-started" className="block">
                <button className="w-full bg-auren-black text-white py-4 rounded-full hover:bg-auren-black/90 transition-colors">
                  Get Started
                </button>
              </Link>
            </motion.div>

            {/* Custom Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-auren-tan rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-3xl font-light text-white mb-4">Custom</h3>
              <p className="text-white/80 mb-8">
                Create products from scratch
              </p>
              <div className="mb-8">
                <div className="text-5xl font-light text-white mb-2">$2,000</div>
                <div className="text-white/80">Starting from</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-white/90">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-auren-tan text-xs">✓</div>
                  <span>Full customization</span>
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-auren-tan text-xs">✓</div>
                  <span>Unique designs</span>
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-auren-tan text-xs">✓</div>
                  <span>Expert guidance</span>
                </li>
              </ul>
              <Link href="/get-started" className="block">
                <button className="w-full bg-white text-auren-tan py-4 rounded-full hover:bg-white/90 transition-colors">
                  Get Started
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA with Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <VideoBackground />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-8"
        >
          <h2 className="text-6xl md:text-8xl font-light text-white mb-12">
            Make With Auren
          </h2>
          <Link href="/get-started">
            <button className="px-16 py-5 text-white text-lg font-light bg-white/10 backdrop-blur-xl border border-white/20 rounded-full hover:bg-white/15 transition-all duration-300">
              Get Started
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-auren-black py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Logo */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full border-2 border-white" />
                <span className="text-white text-xl font-light">auren</span>
              </div>
            </div>

            {/* Links columns */}
            <div>
              <h4 className="text-white font-light mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">About</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Careers</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-light mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Catalog</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Custom</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-light mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Help Center</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Terms</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Privacy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-white/40 text-sm text-center">
              © 2025 Auren. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Form Popup */}
      <AnimatePresence>
        {showContactForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowContactForm(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-md w-full"
            >
              <h3 className="text-3xl font-light text-auren-black mb-6">Get in Contact</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Form submitted! Responses will be sent to team@auren.co'); setShowContactForm(false); }}>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full bg-gray-100 border border-gray-200 rounded-2xl px-4 py-3 text-auren-black placeholder:text-gray-400 focus:outline-none focus:border-auren-tan transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full bg-gray-100 border border-gray-200 rounded-2xl px-4 py-3 text-auren-black placeholder:text-gray-400 focus:outline-none focus:border-auren-tan transition-colors"
                />
                <textarea
                  placeholder="Comments"
                  rows={4}
                  className="w-full bg-gray-100 border border-gray-200 rounded-2xl px-4 py-3 text-auren-black placeholder:text-gray-400 focus:outline-none focus:border-auren-tan transition-colors resize-none"
                />
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-auren-black hover:bg-auren-black/90 text-white rounded-full py-3 transition-colors"
                  >
                    Send
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-auren-black rounded-full py-3 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
