'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import VideoBackground from '@/components/VideoBackground'
import Link from 'next/link'

export default function CustomChatPage() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'What kind of product would you like to create?' }
  ])
  const [input, setInput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const handleSend = () => {
    if (!input.trim()) return
    
    setMessages([...messages, { role: 'user', content: input }])
    setInput('')
    setIsGenerating(true)
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Great idea! I can help you create that. Could you tell me more about the style, colors, or any specific design elements you have in mind?' 
      }])
      setIsGenerating(false)
    }, 1500)
  }

  return (
    <main className="relative min-h-screen">
      <VideoBackground />
      
      <div className="relative z-10 px-8 py-16 h-screen flex flex-col">
        {/* Header */}
        <div className="max-w-4xl mx-auto w-full mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between"
          >
            <div>
              <h1 className="text-5xl font-normal text-white mb-2">Make with Auren</h1>
              <p className="text-white/60">Describe your product idea</p>
            </div>
            <Link href="/choose">
              <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors border border-white/20">
                Back
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Chat messages */}
        <div className="flex-1 max-w-4xl mx-auto w-full mb-6 overflow-y-auto">
          <div className="space-y-6">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] p-6 rounded-3xl ${
                    message.role === 'user'
                      ? 'bg-white/20 backdrop-blur-2xl border border-white/30 text-white'
                      : 'bg-black/40 backdrop-blur-2xl border border-white/20 text-white'
                  }`}
                >
                  {message.content}
                </div>
              </motion.div>
            ))}
            {isGenerating && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-black/40 backdrop-blur-2xl border border-white/20 p-6 rounded-3xl">
                  <div className="flex gap-2">
                    <motion.div
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                      className="w-2 h-2 bg-white/60 rounded-full"
                    />
                    <motion.div
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                      className="w-2 h-2 bg-white/60 rounded-full"
                    />
                    <motion.div
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                      className="w-2 h-2 bg-white/60 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Example prompts */}
        <div className="max-w-4xl mx-auto w-full mb-4">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {[
              'I want a t-shirt like...',
              'A tote bag inspired by...',
              'Custom hoodie with...',
            ].map((example, index) => (
              <button
                key={index}
                onClick={() => setInput(example)}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white/80 rounded-full text-sm whitespace-nowrap transition-colors border border-white/20"
              >
                {example}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Describe your product idea..."
              className="w-full bg-black/40 backdrop-blur-2xl border border-white/20 rounded-full pl-6 pr-16 py-5 text-white text-lg placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isGenerating}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </motion.div>

          {/* Action buttons */}
          {messages.length > 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center gap-4 mt-6"
            >
              <Link href="/quantity">
                <button className="px-8 py-3 bg-white/90 hover:bg-white text-black rounded-full transition-colors">
                  Generate Design →
                </button>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  )
}

