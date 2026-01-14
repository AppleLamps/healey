'use client'

import { motion } from 'framer-motion'
import { transparencyWar } from '@/lib/data'
import { Eye, EyeOff, FileText, Scale, AlertTriangle, ShieldX } from 'lucide-react'

const conflictIcons = [Scale, FileText, ShieldX, EyeOff]

export default function TransparencyWar() {
  return (
    <section id="transparency" className="py-24 sm:py-28 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-money/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-money/10 border border-money/20 mb-4">
            <EyeOff className="w-4 h-4 text-money" />
            <span className="text-sm font-medium text-money">TRANSPARENCY FAILURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{transparencyWar.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl">{transparencyWar.subtitle}</p>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-6 sm:p-8 rounded-2xl bg-card border border-border"
        >
          <p className="text-muted-foreground leading-relaxed">{transparencyWar.overview}</p>
        </motion.div>

        {/* Conflicts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {transparencyWar.conflicts.map((conflict, index) => {
            const Icon = conflictIcons[index]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-money/30 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-money/10 border border-money/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-money" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{conflict.title}</h3>
                    <p className="text-sm text-muted-foreground">{conflict.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* NDA Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-10 lg:p-12 rounded-2xl bg-gradient-to-r from-money/10 to-danger/10 border border-money/30"
        >
          <div className="text-center mb-8">
            <AlertTriangle className="w-12 h-12 text-money mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white">The NDA Cover-Up</h3>
            <p className="text-muted-foreground">Hidden settlements paid with taxpayer money</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-money mb-2">{transparencyWar.ndaStats.amount}</div>
              <div className="text-sm text-muted-foreground">Total Settlement Payouts</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-danger mb-2">{transparencyWar.ndaStats.cases}</div>
              <div className="text-sm text-muted-foreground">Cases with NDAs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">{transparencyWar.ndaStats.period}</div>
              <div className="text-sm text-muted-foreground">Time Period</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
