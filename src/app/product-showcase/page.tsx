'use client'

import { motion } from 'framer-motion'

export default function ProductShowcase() {
  return (
    <motion.main
      className="relative min-h-screen text-white overflow-hidden"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Step Number */}
      <motion.div 
        className="absolute top-8 left-8 text-white text-3xl font-light"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        03
      </motion.div>

      {/* Main Content Container */}
      <motion.div 
        className="flex items-center justify-between min-h-screen px-16 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        
        {/* Left Section */}
        <motion.div 
          className="flex flex-col gap-8 max-w-md"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <h1 className="text-7xl font-light leading-tight mb-2">
              Here's what<br />you made
            </h1>
            <p className="text-lg text-white/70">with Auren</p>
          </div>
          
          <div className="flex flex-col gap-4 mt-6">
            <button className="w-64 h-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white text-xl font-medium transition-all hover:bg-white/20 hover:border-white/50 hover:shadow-lg">
              Create Variation
            </button>
            <button className="w-64 h-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white text-xl font-medium transition-all hover:bg-white/20 hover:border-white/50 hover:shadow-lg">
              Create New Product
            </button>
          </div>
        </motion.div>

        {/* Center Section - Product Card */}
        <motion.div 
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 2 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          whileHover={{ 
            scale: 1.05, 
            rotate: 0,
            transition: { duration: 0.15, ease: "easeIn" }
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
              <h2 className="text-4xl font-medium mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                Your Product
              </h2>
              <div className="space-y-1">
                <p className="text-xl font-medium text-white/95">Sizes: TBD</p>
                <p className="text-xl font-medium text-white/95">Quantity: TBD</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section - Checkout */}
        <motion.div 
          className="flex flex-col gap-5 max-w-md"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-lg text-white/70 mb-2">To checkout:</p>
          
          <button className="w-[360px] h-16 rounded-full bg-white/90 backdrop-blur-md border border-white/20 text-black font-semibold flex items-center justify-center gap-3 transition-all hover:bg-white hover:shadow-lg hover:border-white/40 text-2xl">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>
          
          <button className="w-[360px] h-16 rounded-full bg-white/90 backdrop-blur-md border border-white/20 text-black font-semibold flex items-center justify-center gap-3 transition-all hover:bg-white hover:shadow-lg hover:border-white/40 text-2xl">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Continue with Apple
          </button>
          
          <button className="w-[360px] h-16 rounded-full bg-white/90 backdrop-blur-md border border-white/20 text-black font-semibold flex items-center justify-center gap-3 transition-all hover:bg-white hover:shadow-lg hover:border-white/40 text-2xl">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Continue with Email
          </button>
        </motion.div>

      </motion.div>
    </motion.main>
  )
}

