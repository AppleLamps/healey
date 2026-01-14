'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { keyStats } from '@/lib/data'
import { colorClasses, type ColorKey } from '@/lib/colors'

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

  return (
    <section id="stats" ref={ref} className="py-24 sm:py-28 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">The Numbers Don't Lie</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A forensic analysis of the Healey administration reveals systemic fiscal mismanagement
            and a pattern of governance by emergency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {keyStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-6 sm:p-8 rounded-2xl bg-card border border-border overflow-hidden group hover:${colorClasses[stat.color as ColorKey].borderHover} transition-all duration-300`}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 ${colorClasses[stat.color as ColorKey].bgHover} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Top Accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${colorClasses[stat.color as ColorKey].bg}`} />

              <div className="relative z-10">
                <div className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 ${colorClasses[stat.color as ColorKey].text}`}>
                  <AnimatedNumber
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    inView={inView}
                  />
                </div>
                <div className="text-lg font-semibold text-white mb-1">
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
