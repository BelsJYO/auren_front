'use client'

import { motion } from 'framer-motion'
import VideoBackground from '@/components/VideoBackground'
import Link from 'next/link'

export default function ThankYouPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-8">
      <VideoBackground />
      
      <div className="relative z-10 w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Success checkmark */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="w-24 h-24 bg-green-500/20 backdrop-blur-xl border-4 border-green-400 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <svg className="w-12 h-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-6xl md:text-7xl font-normal text-white mb-6"
          >
            Thank You For Your Order
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white/70 text-xl mb-12"
          >
            Your order has been confirmed and is being processed.
            <br />
            You'll receive an email at the address you provided.
          </motion.p>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-black/40 backdrop-blur-2xl border border-white/20 rounded-3xl p-6">
              <div className="text-4xl mb-3">📧</div>
              <h3 className="text-white font-medium mb-2">Order Confirmation</h3>
              <p className="text-white/60 text-sm">
                Check your email for order details
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-2xl border border-white/20 rounded-3xl p-6">
              <div className="text-4xl mb-3">⏱️</div>
              <h3 className="text-white font-medium mb-2">3-4 Weeks</h3>
              <p className="text-white/60 text-sm">
                Estimated production & delivery
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-2xl border border-white/20 rounded-3xl p-6">
              <div className="text-4xl mb-3">📦</div>
              <h3 className="text-white font-medium mb-2">Tracking Updates</h3>
              <p className="text-white/60 text-sm">
                We'll keep you posted on progress
              </p>
            </div>
          </motion.div>

          {/* What's next */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="bg-black/40 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 mb-12"
          >
            <h2 className="text-2xl font-normal text-white mb-6">What Happens Next?</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white text-sm">
                  1
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Design Review</h4>
                  <p className="text-white/60 text-sm">
                    Our team will review and prepare your design for production
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white text-sm">
                  2
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Production</h4>
                  <p className="text-white/60 text-sm">
                    Your products will be manufactured with care
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white text-sm">
                  3
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Quality Check</h4>
                  <p className="text-white/60 text-sm">
                    Each item is inspected before shipping
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white text-sm">
                  4
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Delivery</h4>
                  <p className="text-white/60 text-sm">
                    Packaged and shipped directly to you
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-normal text-white mb-6">Make With Auren</h2>
            <p className="text-white/70 mb-8">Ready to create more products?</p>
            
            <div className="flex gap-4 justify-center">
              <Link href="/">
                <button className="px-10 py-4 bg-white/90 hover:bg-white text-black rounded-full transition-colors">
                  Create Another Product
                </button>
              </Link>
              <Link href="/">
                <button className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors border border-white/20">
                  Back to Home
                </button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}

