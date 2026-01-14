'use client'

import { motion } from 'framer-motion'
import { ChevronDown, AlertTriangle, FileWarning, Scale } from 'lucide-react'
import { siteConfig } from '@/lib/data'
import { colorClasses, type ColorKey } from '@/lib/colors'

export default function Hero() {
  return (
    <section id="overview" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-danger/10 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-danger/5 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-danger/10 border border-danger/20 mb-8"
        >
          <AlertTriangle className="w-4 h-4 text-danger" />
          <span className="text-sm font-medium text-danger">OPPOSITION RESEARCH DOSSIER</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="text-gradient-danger">{siteConfig.subject}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light mb-4 italic"
        >
          {siteConfig.tagline}
        </motion.p>

        {/* Period */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm text-muted mb-12"
        >
          Investigation Period: {siteConfig.period}
        </motion.p>

        {/* Key Issues Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {[
            { icon: FileWarning, label: '$1.8B Shelter Crisis', color: 'danger' as ColorKey },
            { icon: Scale, label: '$700M Hospital Bailout', color: 'danger' as ColorKey },
            { icon: AlertTriangle, label: 'Transparency Blocked', color: 'money' as ColorKey },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${colorClasses[item.color].bgLight} ${colorClasses[item.color].border}`}
            >
              <item.icon className={`w-4 h-4 ${colorClasses[item.color].text}`} />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-white transition-colors group"
        >
          <span className="text-sm font-medium">Explore the Evidence</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.a>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
