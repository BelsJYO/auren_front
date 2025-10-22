'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import VideoBackground from '@/components/VideoBackground'
import Link from 'next/link'

export default function DesignCanvasPage() {
  const [selectedTool, setSelectedTool] = useState('text')
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', content: 'I can help you customize this design. What changes would you like to make?' }
  ])
  const [chatInput, setChatInput] = useState('')

  return (
    <main className="relative min-h-screen">
      <VideoBackground />
      
      <div className="relative z-10 px-8 py-16 h-screen flex flex-col">
        {/* Header */}
        <div className="max-w-7xl mx-auto w-full mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between"
          >
            <div>
              <div className="text-white/60 text-sm mb-2">step 3</div>
              <h1 className="text-4xl font-normal text-white">Design Canvas</h1>
            </div>
            <div className="flex gap-3">
              <Link href="/catalog">
                <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors border border-white/20">
                  Back
                </button>
              </Link>
              <Link href="/quantity">
                <button className="px-6 py-3 bg-white/90 hover:bg-white text-black rounded-full transition-colors">
                  Continue →
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Main content */}
        <div className="flex-1 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8">
          {/* Left side - Chat */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black/40 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 flex flex-col"
          >
            <h2 className="text-2xl font-normal text-white mb-6">Chat</h2>
            
            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto mb-6 space-y-4">
              {chatMessages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-white/20 text-white'
                        : 'bg-white/10 text-white'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat input */}
            <div className="relative">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask for design changes..."
                className="w-full bg-white/10 border border-white/20 rounded-full pl-6 pr-14 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Right side - Design tools & preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-black/40 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 flex flex-col"
          >
            <h2 className="text-2xl font-normal text-white mb-6">Design tools</h2>

            {/* Tool buttons */}
            <div className="flex gap-3 mb-8">
              {[
                { id: 'text', label: 'Text', icon: 'T' },
                { id: 'color', label: 'Color', icon: '🎨' },
                { id: 'upload', label: 'Upload', icon: '📁' },
              ].map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => setSelectedTool(tool.id)}
                  className={`flex-1 py-3 rounded-full transition-all ${
                    selectedTool === tool.id
                      ? 'bg-white/90 text-black'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <span className="mr-2">{tool.icon}</span>
                  {tool.label}
                </button>
              ))}
            </div>

            {/* Canvas preview */}
            <div className="flex-1 bg-white/5 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <div className="w-64 h-80 bg-white/10 rounded-3xl flex items-center justify-center text-8xl mb-6 relative">
                  👕
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/60 backdrop-blur-sm px-6 py-3 rounded-xl">
                      <p className="text-white text-sm font-medium">AUREN</p>
                    </div>
                  </div>
                </div>
                <p className="text-white/60 text-sm">Preview</p>
              </div>

              {/* Color picker (shown when color tool selected) */}
              {selectedTool === 'color' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-xl border border-white/20 rounded-2xl p-4"
                >
                  <div className="flex gap-2">
                    {['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'].map((color) => (
                      <button
                        key={color}
                        className="w-10 h-10 rounded-full border-2 border-white/40 hover:scale-110 transition-transform"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

