'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle, Play, Pause, Crown, Volume2, VolumeX, Star, Shield } from 'lucide-react'

export default function FloatingVideoBubble() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const toggleExpand = () => setIsExpanded(!isExpanded)
  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsPlaying(!isPlaying)
  }
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMuted(!isMuted)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isClient && (
        <>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                className="mb-4"
              >
                <div className="relative bg-black/90 rounded-3xl overflow-hidden border border-yellow-500/30 shadow-[0_0_40px_rgba(234,179,8,0.2)] w-72 md:w-80">
                  {/* Header */}
                  <div className="absolute top-0 inset-x-0 p-4 flex justify-between items-center z-20 bg-gradient-to-b from-black/80 to-transparent">
                    <div className="flex items-center gap-2">
                      <div className="bg-yellow-500 rounded-full p-1.5 shadow-[0_0_10px_#eab308]">
                        <Crown className="w-3 h-3 text-black" />
                      </div>
                      <span className="text-white text-[10px] font-black uppercase tracking-widest">Premium Live</span>
                    </div>
                    <button onClick={() => setIsExpanded(false)} className="text-white/70 hover:text-white transition-colors">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Video Area */}
                  <div className="aspect-[9/16] relative bg-[#111]">
                    <video
                      autoPlay
                      loop
                      muted={isMuted}
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="/slot.mp4" type="video/mp4" />
                    </video>

                    {/* Controls Overlay */}
                    <div className="absolute bottom-4 inset-x-4 flex justify-between items-center z-20">
                      <button onClick={toggleMute} className="bg-black/50 backdrop-blur-md p-2 rounded-xl border border-white/10 text-white">
                        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                      </button>
                      <a href="#contact" className="flex-1 mx-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-black text-xs py-2.5 rounded-xl text-center uppercase tracking-tighter shadow-lg">
                        အခုပဲ ဆက်သွယ်ပါ
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Trigger Button (The Bubble) */}
          <motion.button
            onClick={toggleExpand}
            className="group relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-yellow-500/50 shadow-[0_0_20px_rgba(234,179,8,0.3)] bg-black"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity">
              <source src="/slot.mp4" type="video/mp4" />
            </video>

            {/* Glowing Border Effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-yellow-500"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {!isExpanded && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 rounded-full border-2 border-white flex items-center justify-center animate-bounce">
                <Star className="w-3 h-3 text-white fill-current" />
              </div>
            )}
          </motion.button>
        </>
      )}
    </div>
  )
}