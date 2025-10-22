'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import VideoBackground from '@/components/VideoBackground'
import Link from 'next/link'

export default function QuantityPage() {
  const [quantity, setQuantity] = useState(35)
  const [sizes, setSizes] = useState({ S: 0, M: 0, L: 0, XL: 0 })
  const [comments, setComments] = useState('')

  const pricePerUnit = quantity >= 100 ? 12 : quantity >= 50 ? 15 : 18
  const totalPrice = quantity * pricePerUnit

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
              <div className="text-white/60 text-sm mb-2">step 4</div>
              <h1 className="text-5xl font-normal text-white">Make With Auren</h1>
            </div>
            <div className="flex gap-3">
              <Link href="/design-canvas">
                <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors border border-white/20">
                  Back
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Main content */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Left - Product preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black/40 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 flex flex-col items-center justify-center"
          >
            <div className="w-full aspect-square bg-white/10 rounded-3xl flex items-center justify-center text-9xl mb-6 relative">
              👕
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/60 backdrop-blur-sm px-8 py-4 rounded-xl">
                  <p className="text-white text-lg font-medium">AUREN</p>
                </div>
              </div>
            </div>
            <h3 className="text-white text-2xl font-normal mb-2">Your Design</h3>
            <p className="text-white/60 text-sm">Custom T-Shirt</p>
          </motion.div>

          {/* Middle - Quantity selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-black/40 backdrop-blur-2xl border border-white/20 rounded-3xl p-10"
          >
            <h2 className="text-2xl font-normal text-white mb-6">Quantity & Pricing</h2>
            
            {/* Price display */}
            <div className="bg-white/10 rounded-2xl p-6 mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white/60 text-sm">Quantity</span>
                <span className="text-white text-3xl font-medium">{quantity}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-white/60 text-sm">Price per unit</span>
                <span className="text-white text-xl">${pricePerUnit}</span>
              </div>
              <div className="border-t border-white/20 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-white text-lg">Total</span>
                  <span className="text-white text-3xl font-medium">${totalPrice}</span>
                </div>
              </div>
            </div>

            {/* Quantity slider */}
            <div className="mb-8">
              <label className="text-white text-sm mb-3 block">Minimum order: 35 units</label>
              <input
                type="range"
                min="35"
                max="500"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.4) ${((quantity - 35) / 465) * 100}%, rgba(255,255,255,0.1) ${((quantity - 35) / 465) * 100}%, rgba(255,255,255,0.1) 100%)`
                }}
              />
              <div className="flex justify-between text-white/40 text-xs mt-2">
                <span>35</span>
                <span>500+</span>
              </div>
            </div>

            {/* Size breakdown */}
            <div className="mb-8">
              <h3 className="text-white text-sm mb-4">Size Breakdown</h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.keys(sizes).map((size) => (
                  <div key={size}>
                    <label className="text-white/60 text-xs mb-2 block">{size}</label>
                    <input
                      type="number"
                      min="0"
                      value={sizes[size as keyof typeof sizes]}
                      onChange={(e) => setSizes({ ...sizes, [size]: Number(e.target.value) })}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>
                ))}
              </div>
            </div>

            <Link href="/summary">
              <button className="w-full bg-white/90 hover:bg-white text-black rounded-full py-4 transition-colors">
                Continue to Summary →
              </button>
            </Link>
          </motion.div>

          {/* Right - Chatbox */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-black/40 backdrop-blur-2xl border border-white/20 rounded-3xl p-10"
          >
            <h2 className="text-2xl font-normal text-white mb-6">Additional Details</h2>
            
            <div className="mb-6">
              <label className="text-white/60 text-sm mb-3 block">
                Any special requests or comments?
              </label>
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                rows={8}
                placeholder="e.g., I need rush shipping, specific fabric preferences, custom sizing..."
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors resize-none"
              />
            </div>

            <div className="bg-white/5 rounded-2xl p-6">
              <h4 className="text-white text-sm font-medium mb-3">💡 Pricing Tiers</h4>
              <div className="space-y-2 text-white/70 text-sm">
                <div className="flex justify-between">
                  <span>35-49 units</span>
                  <span>$18/unit</span>
                </div>
                <div className="flex justify-between">
                  <span>50-99 units</span>
                  <span>$15/unit</span>
                </div>
                <div className="flex justify-between">
                  <span>100+ units</span>
                  <span>$12/unit</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

