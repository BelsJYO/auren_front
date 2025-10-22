'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import VideoBackground from '@/components/VideoBackground'
import Link from 'next/link'

export default function SummaryPage() {
  const [showVariation, setShowVariation] = useState(false)

  return (
    <main className="relative min-h-screen">
      <VideoBackground />
      
      <div className="relative z-10 px-8 py-16">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <div className="text-white/60 text-sm mb-2">step 5</div>
              <h1 className="text-5xl font-normal text-white">Here's what you made</h1>
            </div>
            <Link href="/quantity">
              <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors border border-white/20">
                Back
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Main content */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Left - Product preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black/40 backdrop-blur-2xl border border-white/20 rounded-3xl p-10"
          >
            <div className="w-full aspect-square bg-white/10 rounded-3xl flex items-center justify-center text-9xl mb-8 relative">
              👕
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/60 backdrop-blur-sm px-8 py-4 rounded-xl">
                  <p className="text-white text-lg font-medium">AUREN</p>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setShowVariation(!showVariation)}
              className="w-full bg-white/10 hover:bg-white/20 text-white rounded-full py-3 mb-4 transition-colors border border-white/20"
            >
              {showVariation ? 'Hide' : 'Create'} Variation
            </button>

            {showVariation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-3"
              >
                <Link href="/design-canvas">
                  <button className="w-full bg-white/5 hover:bg-white/10 text-white rounded-full py-3 transition-colors border border-white/20 text-sm">
                    ← Back to Design
                  </button>
                </Link>
                <p className="text-white/60 text-xs text-center">
                  Edit colors, text, or add new elements
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Middle - Order details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-black/40 backdrop-blur-2xl border border-white/20 rounded-3xl p-10"
          >
            <h2 className="text-2xl font-normal text-white mb-8">Order Details</h2>
            
            {/* Product info */}
            <div className="space-y-6 mb-8">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-white/60 text-sm">Product</span>
                  <span className="text-white text-right">Custom T-Shirt</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-white/60 text-sm">Quantity</span>
                  <span className="text-white">35 units</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-white/60 text-sm">Sizes</span>
                  <div className="text-white text-right text-sm">
                    <div>S: 8</div>
                    <div>M: 12</div>
                    <div>L: 10</div>
                    <div>XL: 5</div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-white/60 text-sm">Fabric</span>
                  <span className="text-white">100% Cotton</span>
                </div>
              </div>

              <div className="border-t border-white/20 pt-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white text-sm">Subtotal</span>
                  <span className="text-white">$630.00</span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white text-sm">Shipping</span>
                  <span className="text-white/60 text-sm">TBD</span>
                </div>
                <div className="flex justify-between items-center text-xl">
                  <span className="text-white font-medium">Total</span>
                  <span className="text-white font-medium">$630.00</span>
                </div>
              </div>
            </div>

            <Link href="/checkout">
              <button className="w-full bg-white/90 hover:bg-white text-black rounded-full py-4 transition-colors mb-3">
                Proceed to Checkout →
              </button>
            </Link>
            
            <button className="w-full bg-white/10 hover:bg-white/20 text-white rounded-full py-3 transition-colors border border-white/20 text-sm">
              Save for Later
            </button>
          </motion.div>

          {/* Right - Additional info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-black/40 backdrop-blur-2xl border border-white/20 rounded-3xl p-8">
              <h3 className="text-white text-lg font-medium mb-4">📦 Estimated Timeline</h3>
              <div className="space-y-3 text-white/70 text-sm">
                <div className="flex justify-between">
                  <span>Production</span>
                  <span>14-21 days</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>5-7 days</span>
                </div>
                <div className="border-t border-white/10 pt-3 flex justify-between font-medium text-white">
                  <span>Total</span>
                  <span>3-4 weeks</span>
                </div>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-2xl border border-white/20 rounded-3xl p-8">
              <h3 className="text-white text-lg font-medium mb-4">✨ What's Included</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-white">✓</span>
                  <span>Digital mockups & proofs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">✓</span>
                  <span>Free design revisions (2x)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">✓</span>
                  <span>Quality inspection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">✓</span>
                  <span>Tracking & support</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/40 backdrop-blur-2xl border border-white/20 rounded-3xl p-8">
              <h3 className="text-white text-lg font-medium mb-3">💬 Need Help?</h3>
              <p className="text-white/70 text-sm mb-4">
                Have questions about your order?
              </p>
              <button className="w-full bg-white/10 hover:bg-white/20 text-white rounded-full py-3 transition-colors border border-white/20 text-sm">
                Contact Support
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

