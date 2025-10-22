'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 relative">
            <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
          </div>
          <span className="text-white text-xl font-normal">auren</span>
        </Link>

        {/* Right Nav */}
        <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 px-6 py-3">
          <Link href="/info" className="text-white/80 hover:text-white transition-colors px-4 text-sm">
            Info
          </Link>
          <Link href="/signup" className="text-white/80 hover:text-white transition-colors px-4 text-sm">
            Sign up
          </Link>
          <Link href="/login" className="text-white hover:text-white transition-colors px-4 text-sm">
            Login
          </Link>
        </div>
      </div>
    </nav>
  )
}

