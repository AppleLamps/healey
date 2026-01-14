'use client'

import { motion } from 'framer-motion'
import { stewardBailout } from '@/lib/data'
import { colorClasses, type ColorKey } from '@/lib/colors'
import { Building2, AlertTriangle, Clock, DollarSign, FileX, FileCheck, XCircle } from 'lucide-react'

const timelineIcons = {
  warning: AlertTriangle,
  failure: FileX,
  action: FileCheck,
  contract: DollarSign,
}

const timelineColors: Record<string, ColorKey> = {
  warning: 'money',
  failure: 'danger',
  action: 'muted',
  contract: 'danger',
}

export default function StewardBailout() {
  return (
    <section id="steward" className="py-24 sm:py-28 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-danger/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto page-gutter relative z-10">
        {/* Header - Simpler, no badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{stewardBailout.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl">{stewardBailout.subtitle}</p>
        </motion.div>

        {/* Overview - Left border accent */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-6 sm:p-8 rounded-xl bg-card/50 border-l-4 border-l-danger border-t border-r border-b border-t-border border-r-border border-b-border"
        >
          <p className="text-muted-foreground leading-relaxed">{stewardBailout.overview}</p>
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
              Failure Timeline
            </h3>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

              <div className="space-y-6">
                {stewardBailout.timeline.map((item, index) => {
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
                      <div className={`w-8 h-8 rounded-full ${colorClasses[color].bgLight} ${colorClasses[color].border} flex items-center justify-center flex-shrink-0 relative z-10`}>
                        <Icon className={`w-4 h-4 ${colorClasses[color].text}`} />
                      </div>
                      <div className="flex-1 pb-6">
                        <div className={`text-sm font-medium ${colorClasses[color].text} mb-1`}>{item.date}</div>
                        <div className="text-white text-sm">{item.event}</div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Cost Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-money" />
              Taxpayer Cost Breakdown
            </h3>

            <div className="space-y-4">
              {stewardBailout.costs.map((cost, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 sm:p-6 rounded-xl bg-card border border-border hover:border-danger/30 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium text-white">{cost.item}</div>
                      <div className="text-sm text-muted-foreground">{cost.note}</div>
                    </div>
                    <div className="text-2xl font-bold text-danger">{cost.amount}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Hospital Closures */}
            <div className="mt-8 p-6 sm:p-8 rounded-xl bg-danger/10 border border-danger/30">
              <h4 className="flex items-center gap-2 text-lg font-bold text-danger mb-4">
                <XCircle className="w-5 h-5" />
                Hospitals Lost
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Despite the massive taxpayer expenditure, these hospitals closed in August 2024, creating "medical deserts" in underserved communities:
              </p>
              <div className="space-y-3">
                {stewardBailout.closures.map((hospital, index) => (
                  <div key={index} className="flex items-center gap-3 text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-danger flex-shrink-0" />
                    {hospital}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

