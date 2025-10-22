'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import VideoBackground from '@/components/VideoBackground'
import Link from 'next/link'

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState('T-Shirts')

  const categories = ['Accessories', 'Hats', 'Sweaters & Hoodies', 'T-Shirts']

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
            <h1 className="text-4xl md:text-5xl font-light text-white mb-2">CATALOG</h1>
            <p className="text-white/60 text-sm">step 2</p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 py-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Left Sidebar - Make it fast */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-3 bg-auren-black rounded-3xl p-8"
            >
              <h2 className="text-3xl font-light text-white mb-4">Make it fast</h2>
              <p className="text-white/60 text-sm mb-8">
                Our signature ready-made products, customized with your designs.
              </p>
              <button className="w-full bg-white text-auren-black rounded-full py-3 text-sm hover:bg-white/90 transition-colors mb-4">
                Back
              </button>
            </motion.div>

            {/* Right Side - Product Catalog */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-9 bg-auren-cream rounded-3xl p-8"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-light text-auren-black">Product Catalog</h2>
                <button className="px-8 py-3 bg-auren-black text-white rounded-full text-sm hover:bg-auren-black/90 transition-colors">
                  Next
                </button>
              </div>

              {/* Category Filters */}
              <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                      selectedCategory === category
                        ? 'bg-auren-black text-white'
                        : 'bg-white text-auren-black hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`bg-white rounded-3xl p-6 cursor-pointer transition-all hover:shadow-xl ${
                      item === 4 ? 'ring-2 ring-auren-black' : ''
                    }`}
                  >
                    <div className="aspect-square bg-gray-100 rounded-2xl mb-4 flex items-center justify-center">
                      {item === 4 && (
                        <div className="absolute top-4 right-4 w-6 h-6 bg-auren-black rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                      <div className="text-6xl">👕</div>
                    </div>
                    <h3 className="text-auren-black font-light text-sm">Classic Tee</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative rounded-3xl overflow-hidden mt-8"
          >
            <div className="relative h-[400px]">
              <VideoBackground />
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-5xl md:text-6xl font-light text-white mb-6">
                    Make with Auren
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
