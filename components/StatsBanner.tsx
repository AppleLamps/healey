'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { keyStats } from '@/lib/data'
import { colorClasses, type ColorKey } from '@/lib/colors'
import { TrendingUp } from 'lucide-react'

function AnimatedNumber({
  value,
  prefix = '',
  suffix = '',
  inView
}: {
  value: number
  prefix?: string
  suffix?: string
  inView: boolean
}) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!inView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(current)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value, inView])

  const formattedValue = Number.isInteger(value)
    ? Math.round(displayValue)
    : displayValue.toFixed(1)

  return (
    <span>
      {prefix}{formattedValue}{suffix}
    </span>
  )
}

export default function StatsBanner() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  // First stat is the hero stat (largest fiscal impact)
  const heroStat = keyStats[0]
  const supportingStats = keyStats.slice(1)

  return (
    <section id="stats" ref={ref} className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Dramatic background for visual apex */}
      <div className="absolute inset-0 bg-gradient-to-b from-danger/5 via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-danger/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto page-gutter relative z-10">
        {/* Hero Stat - The Headline Finding */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="relative p-8 sm:p-12 lg:p-16 rounded-3xl hero-stat-card glow-danger-intense overflow-hidden">
            {/* Accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-danger via-danger-light to-danger" />

            {/* Background pulse */}
            <div className="absolute inset-0 bg-danger/5 animate-pulse-glow" />

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-danger/20 border border-danger/40 mb-6">
                <TrendingUp className="w-5 h-5 text-danger" />
                <span className="text-sm font-bold text-danger uppercase tracking-wide">Critical Finding</span>
              </div>

              <div className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 text-gradient-danger`}>
                <AnimatedNumber
                  value={heroStat.value}
                  prefix={heroStat.prefix}
                  suffix={heroStat.suffix}
                  inView={inView}
                />
              </div>

              <div className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {heroStat.label}
              </div>

              <div className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {heroStat.description}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">The Numbers Don't Lie</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            A forensic analysis reveals systemic fiscal mismanagement and governance by emergency.
          </p>
        </motion.div>

        {/* Supporting Stats - Varied treatment */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {supportingStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : index === 2 ? 20 : 0, y: index === 1 ? 20 : 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative p-6 sm:p-8 rounded-xl bg-card border-l-4 ${colorClasses[stat.color as ColorKey].border} border-t border-r border-b border-t-border border-r-border border-b-border overflow-hidden group hover:bg-card-hover transition-all duration-300`}
            >
              <div className="relative z-10">
                <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 ${colorClasses[stat.color as ColorKey].text}`}>
                  <AnimatedNumber
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    inView={inView}
                  />
                </div>
                <div className="text-base font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
