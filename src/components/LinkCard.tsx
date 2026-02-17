'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Gamepad2, Trophy, Zap, Star, Crown } from 'lucide-react'

interface LinkCardProps {
  title: string
  description: string
  url: string
  icon: 'gamepad' | 'trophy' | 'zap' | 'star' | 'crown' | 'external'
  color: 'purple' | 'pink' | 'blue' | 'gold' | 'green'
  delay?: number
}

const iconMap = {
  gamepad: Gamepad2,
  trophy: Trophy,
  zap: Zap,
  star: Star,
  crown: Crown,
  external: ExternalLink,
}

const colorClasses = {
  purple: 'from-purple-600/20 to-pink-600/20 border-purple-500/30 hover:border-purple-400/60 hover:shadow-purple-500/25',
  pink: 'from-pink-600/20 to-rose-600/20 border-pink-500/30 hover:border-pink-400/60 hover:shadow-pink-500/25',
  blue: 'from-blue-600/20 to-cyan-600/20 border-blue-500/30 hover:border-blue-400/60 hover:shadow-blue-500/25',
  gold: 'from-yellow-600/20 to-orange-600/20 border-yellow-500/30 hover:border-yellow-400/60 hover:shadow-yellow-500/25',
  green: 'from-green-600/20 to-emerald-600/20 border-green-500/30 hover:border-green-400/60 hover:shadow-green-500/25',
}

export default function LinkCard({ title, description, url, icon, color, delay = 0 }: LinkCardProps) {
  const IconComponent = iconMap[icon]
  
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`link-card ${colorClasses[color]} block group`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center space-x-4">
        <motion.div
          className={`p-3 rounded-lg bg-gradient-to-br ${
            color === 'purple' ? 'from-purple-500 to-pink-500' :
            color === 'pink' ? 'from-pink-500 to-rose-500' :
            color === 'blue' ? 'from-blue-500 to-cyan-500' :
            color === 'gold' ? 'from-yellow-500 to-orange-500' :
            'from-green-500 to-emerald-500'
          }`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <IconComponent className="w-6 h-6 text-white" />
        </motion.div>
        
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-1 group-hover:text-gaming-gold transition-colors">
            {title}
          </h3>
          <p className="text-gray-300 text-sm">
            {description}
          </p>
        </div>
        
        <motion.div
          className="opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <ExternalLink className="w-5 h-5 text-gaming-gold" />
        </motion.div>
      </div>
    </motion.a>
  )
}
