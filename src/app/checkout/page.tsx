'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import VideoBackground from '@/components/VideoBackground'
import Link from 'next/link'

export default function CheckoutPage() {
  const [email, setEmail] = useState('')
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This will be connected to Stripe Checkout later
    window.location.href = '/thank-you'
  }

  return (
    <main className="relative min-h-screen">
      <VideoBackground />
      
      <div className="relative z-10 px-8 py-16">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <div className="text-white/60 text-sm mb-2">step 6</div>
              <h1 className="text-5xl font-normal text-white">Checkout</h1>
            </div>
            <Link href="/summary">
              <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors border border-white/20">
                Back
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Left & Middle - Checkout form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-black/40 backdrop-blur-2xl border border-white/20 rounded-3xl p-8"
              >
                <h2 className="text-2xl font-normal text-white mb-6">Contact Information</h2>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
                />
              </motion.div>

              {/* Shipping Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-black/40 backdrop-blur-2xl border border-white/20 rounded-3xl p-8"
              >
                <h2 className="text-2xl font-normal text-white mb-6">Shipping Address</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    value={shippingInfo.fullName}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, fullName: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Street address"
                    required
                    value={shippingInfo.address}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="City"
                      required
                      value={shippingInfo.city}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                      className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="State"
                      required
                      value={shippingInfo.state}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                      className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="ZIP code"
                      required
                      value={shippingInfo.zip}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })}
                      className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
                    />
                    <select
                      value={shippingInfo.country}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, country: e.target.value })}
                      className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/40 transition-colors"
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>
                </div>
              </motion.div>

              {/* Payment Method */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-black/40 backdrop-blur-2xl border border-white/20 rounded-3xl p-8"
              >
                <h2 className="text-2xl font-normal text-white mb-6">Payment Method</h2>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <p className="text-white/70 text-sm mb-4">
                      You'll be redirected to a secure payment page powered by Stripe.
                    </p>
                    <div className="flex gap-3">
                      <div className="flex-1 bg-white/10 rounded-xl p-3 flex items-center justify-center">
                        <span className="text-white text-xs">💳 Card</span>
                      </div>
                      <div className="flex-1 bg-white/10 rounded-xl p-3 flex items-center justify-center">
                        <span className="text-white text-xs">🍎 Pay</span>
                      </div>
                      <div className="flex-1 bg-white/10 rounded-xl p-3 flex items-center justify-center">
                        <span className="text-white text-xs">G Pay</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Submit button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                type="submit"
                className="w-full bg-white/90 hover:bg-white text-black rounded-full py-5 text-lg transition-colors"
              >
                Place Order →
              </motion.button>
            </form>
          </div>

          {/* Right - Order summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black/40 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 h-fit sticky top-8"
          >
            <h2 className="text-2xl font-normal text-white mb-8">Order Summary</h2>
            
            {/* Product preview */}
            <div className="bg-white/5 rounded-2xl p-6 mb-6">
              <div className="flex gap-4 mb-4">
                <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center text-3xl">
                  👕
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium mb-1">Custom T-Shirt</h3>
                  <p className="text-white/60 text-sm">Quantity: 35</p>
                </div>
              </div>
            </div>

            {/* Price breakdown */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-white/70">
                <span>Subtotal</span>
                <span>$630.00</span>
              </div>
              <div className="flex justify-between text-white/70">
                <span>Shipping</span>
                <span>$45.00</span>
              </div>
              <div className="flex justify-between text-white/70">
                <span>Tax</span>
                <span>$54.00</span>
              </div>
              <div className="border-t border-white/20 pt-3 flex justify-between text-white text-xl font-medium">
                <span>Total</span>
                <span>$729.00</span>
              </div>
            </div>

            {/* Security badge */}
            <div className="bg-white/5 rounded-2xl p-4 flex items-center gap-3">
              <span className="text-2xl">🔒</span>
              <div>
                <p className="text-white text-sm font-medium">Secure Checkout</p>
                <p className="text-white/60 text-xs">Your payment info is encrypted</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

