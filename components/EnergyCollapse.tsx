'use client'

import { motion } from 'framer-motion'
import { energyCollapse } from '@/lib/data'
import { Wind, XCircle, DollarSign, AlertTriangle } from 'lucide-react'

export default function EnergyCollapse() {
  return (
    <section id="energy" className="py-20 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-money/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-money/10 border border-money/20 mb-4">
            <Wind className="w-4 h-4 text-money" />
            <span className="text-sm font-medium text-money">POLICY FAILURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{energyCollapse.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl">{energyCollapse.subtitle}</p>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-6 rounded-2xl bg-card border border-border"
        >
          <p className="text-muted-foreground leading-relaxed">{energyCollapse.overview}</p>
        </motion.div>

        {/* Failed Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <XCircle className="w-6 h-6 text-danger" />
            Contract Failures & Penalties
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {energyCollapse.failures.map((failure, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-danger/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <Wind className="w-8 h-8 text-muted" />
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    failure.status === 'Terminated'
                      ? 'bg-danger/10 text-danger border border-danger/30'
                      : 'bg-money/10 text-money border border-money/30'
                  }`}>
                    {failure.status}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{failure.project}</h4>
                {failure.capacity !== 'N/A' && (
                  <div className="text-sm text-muted-foreground mb-2">Capacity: {failure.capacity}</div>
                )}
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-danger" />
                  <span className="text-xl font-bold text-danger">{failure.penalty}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Issues List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-money" />
            Critical Issues
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {energyCollapse.issues.map((issue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <span className="w-2 h-2 rounded-full bg-money mt-2 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">{issue}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
