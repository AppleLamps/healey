'use client'

import { motion } from 'framer-motion'
import { statePoliceScandale } from '@/lib/data'
import { Shield, AlertTriangle, Clock, FileX, FileCheck, AlertOctagon } from 'lucide-react'

const timelineIcons = {
  warning: AlertTriangle,
  failure: FileX,
  action: FileCheck,
  contract: AlertOctagon,
}

const timelineColors = {
  warning: 'money',
  failure: 'danger',
  action: 'muted',
  contract: 'danger',
}

export default function StatePolice() {
  return (
    <section id="police" className="py-24 sm:py-28 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-danger/10 border border-danger/20 mb-4">
            <Shield className="w-4 h-4 text-danger" />
            <span className="text-sm font-medium text-danger">JUSTICE CRISIS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{statePoliceScandale.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl">{statePoliceScandale.subtitle}</p>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-6 sm:p-8 rounded-2xl bg-card border border-border"
        >
          <p className="text-muted-foreground leading-relaxed">{statePoliceScandale.overview}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Clock className="w-6 h-6 text-danger" />
              Scandal Timeline
            </h3>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

              <div className="space-y-6">
                {statePoliceScandale.timeline.map((item, index) => {
                  const Icon = timelineIcons[item.type]
                  const color = timelineColors[item.type]

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className={`w-8 h-8 rounded-full bg-${color}/10 border border-${color}/30 flex items-center justify-center flex-shrink-0 relative z-10`}>
                        <Icon className={`w-4 h-4 text-${color}`} />
                      </div>
                      <div className="flex-1 pb-6">
                        <div className={`text-sm font-medium text-${color} mb-1`}>{item.date}</div>
                        <div className="text-white text-sm">{item.event}</div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Key Issues */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <AlertOctagon className="w-6 h-6 text-danger" />
              Systemic Issues
            </h3>

            <div className="space-y-4">
              {statePoliceScandale.issues.map((issue, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-5 sm:p-6 rounded-xl bg-card border border-border hover:border-danger/30 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-danger mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{issue}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
