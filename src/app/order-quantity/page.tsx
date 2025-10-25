'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export default function OrderQuantity() {
  const [quantity, setQuantity] = useState(45)
  const unitPrice = 9
  const totalCost = quantity * unitPrice

  return (
    <main
      className="relative min-h-screen text-white overflow-hidden"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Step Number and Progress */}
      <motion.div 
        className="absolute top-8 left-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-white text-3xl font-light mb-2">03</div>
        <div className="w-24 h-1 bg-white/30 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-white rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "30%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Main Content Container */}
      <motion.div 
        className="flex items-center justify-between min-h-screen px-16 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        
        {/* Left Section - Product Display Card */}
        <motion.div 
          className="flex-shrink-0 ml-48"
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 2 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ 
            scale: 1.05, 
            rotate: 0,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
        >
          <motion.div 
            className="relative w-[320px] h-[480px] rounded-[48px] bg-white/5 backdrop-blur-xl border-2 border-white/30 cursor-pointer shadow-2xl overflow-hidden"
            style={{ transform: 'rotate(2deg)' }}
            whileHover={{ 
              borderColor: 'rgba(255, 255, 255, 0.6)',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5), 0 0 0 2px rgba(255, 255, 255, 0.3)',
              transition: { duration: 0.3 }
            }}
          >
            {/* Product Image Container */}
            <div className="relative m-4 h-[280px] rounded-[36px] bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden flex items-center justify-center">
              {/* Empty state - no image */}
              <motion.div 
                className="text-gray-500 text-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Product Preview
              </motion.div>
              
              {/* Edit Button */}
              <button className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-3 py-1.5 text-white text-lg font-medium hover:bg-white/20 hover:border-white/50 hover:shadow-lg transition-all duration-300">
                Edit
              </button>
              
              {/* Remove Item Link */}
              <button className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-3 py-1.5 text-white text-sm font-medium hover:bg-white/20 hover:border-white/50 hover:shadow-lg transition-all duration-300">
                Remove Item From Cart
              </button>
            </div>

            {/* Product Details */}
            <div className="px-5 pt-3 pb-5 bg-white/5 backdrop-blur-md border-t border-white/20">
              <h2 className="text-4xl font-medium mb-3 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                Your Product
              </h2>
              <div className="space-y-2">
                <p className="text-xl font-medium text-white/95">Sizes: TBD</p>
                <p className="text-xl font-medium text-white/95">Quantity: TBD</p>
                <p className="text-lg font-medium text-white/90">Material: Premium Cotton</p>
                <p className="text-lg font-medium text-white/90">Color: Custom</p>
                <p className="text-lg font-medium text-white/90">Design: Embroidered</p>
              </div>
              
              {/* Additional Product Info */}
              <div className="mt-4 pt-3 border-t border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-white/70">Estimated Delivery:</span>
                  <span className="text-sm text-white/90">7-10 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/70">Production Time:</span>
                  <span className="text-sm text-white/90">3-5 days</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Center Section - Order Configuration Card */}
        <motion.div 
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative w-[400px] h-[500px] rounded-[32px] bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl p-8">
            
            {/* Title */}
            <h2 className="text-2xl font-medium text-white text-center mb-8">
              Select Order Quantity
            </h2>

            {/* Quantity Display */}
            <div className="text-center mb-6">
              <div className="text-6xl font-light text-white mb-4">{quantity}</div>
              
              {/* Slider */}
              <div className="relative">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer slider"
                />
                <style jsx>{`
                  .slider::-webkit-slider-thumb {
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: white;
                    cursor: pointer;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
                  }
                  .slider::-moz-range-thumb {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: white;
                    cursor: pointer;
                    border: none;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
                  }
                `}</style>
              </div>
            </div>

            {/* Cost Information */}
            <div className="text-center mb-8">
              <p className="text-white/80 mb-2">
                For {quantity} units, it will cost ${unitPrice}/unit
              </p>
              <p className="text-2xl font-semibold text-white">
                Your total cost is ${totalCost}
              </p>
            </div>

            {/* Sizing + Additional Comments */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Sizing + Additional Comments</h3>
              
              <button className="text-sm text-white/60 underline hover:text-white/80 transition-colors">
                View Size Chart
              </button>
              
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4">
                <p className="text-white/80 text-sm">
                  For sizes I want 20 small, 10 medium, and 15 large. I want the design to be embroidered.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Next Button */}
        <motion.div 
          className="flex-shrink-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link href="/product-showcase">
            <motion.button 
              className="w-32 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-lg font-semibold transition-all hover:bg-white/20 hover:border-white/40 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>

      </motion.div>
    </main>
  )
}
