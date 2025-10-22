'use client'

import { motion } from 'framer-motion'
import VideoBackground from '@/components/VideoBackground'
import Link from 'next/link'

export default function ChoosePage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-8">
      <VideoBackground />
      
      <div className="relative z-10 w-full max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-normal text-white text-center mb-16"
        >
          Ready to start
          <br />
          your brand?
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Make it fast - Catalog */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/catalog">
              <div className="group h-full bg-black/40 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 hover:bg-black/50 transition-all duration-500 cursor-pointer">
                <div className="flex items-start justify-between mb-8">
                  <div className="text-5xl">⚡</div>
                  <div className="text-white/60 text-sm">Option 1</div>
                </div>
                
                <h2 className="text-4xl font-normal text-white mb-4">Make it fast</h2>
                <p className="text-white/70 text-lg mb-8">
                  Our signature ready-made products, customized with your designs.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-white/80">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs">✓</div>
                    <span className="text-sm">Quick turnaround</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs">✓</div>
                    <span className="text-sm">Proven products</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs">✓</div>
                    <span className="text-sm">Lower minimums</span>
                  </div>
                </div>

                <button className="w-full bg-white/10 hover:bg-white/20 text-white rounded-full py-4 transition-colors group-hover:bg-white/20">
                  Browse Catalog →
                </button>
              </div>
            </Link>
          </motion.div>

          {/* Make it custom */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/custom-chat">
              <div className="group h-full bg-black/40 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 hover:bg-black/50 transition-all duration-500 cursor-pointer">
                <div className="flex items-start justify-between mb-8">
                  <div className="text-5xl">✏️</div>
                  <div className="text-white/60 text-sm">Option 2</div>
                </div>
                
                <h2 className="text-4xl font-normal text-white mb-4">Make it custom</h2>
                <p className="text-white/70 text-lg mb-8">
                  Products designed from the ground up.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-white/80">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs">✓</div>
                    <span className="text-sm">Total creative freedom</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs">✓</div>
                    <span className="text-sm">Unique products</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs">✓</div>
                    <span className="text-sm">Transparent pricing</span>
                  </div>
                </div>

                <button className="w-full bg-white/10 hover:bg-white/20 text-white rounded-full py-4 transition-colors group-hover:bg-white/20">
                  Start Custom →
                </button>
              </div>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/">
            <button className="text-white/60 hover:text-white transition-colors text-sm">
              ← Back
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}

