'use client'

import { motion } from 'framer-motion'
import { shelterCrisis } from '@/lib/data'
import { colorClasses, type ColorKey } from '@/lib/colors'
import { AlertTriangle, Clock, FileX, FileCheck, DollarSign, TrendingUp, Users, Building } from 'lucide-react'

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

export default function ShelterCrisis() {
  return (
    <section id="shelter" className="py-24 sm:py-28 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-danger/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-danger/10 border border-danger/20 mb-4">
            <AlertTriangle className="w-4 h-4 text-danger" />
            <span className="text-sm font-medium text-danger">FISCAL CRISIS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{shelterCrisis.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl">{shelterCrisis.subtitle}</p>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-6 sm:p-8 rounded-2xl bg-card border border-border"
        >
          <p className="text-muted-foreground leading-relaxed">{shelterCrisis.overview}</p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Clock className="w-6 h-6 text-danger" />
            Timeline of Negligence
          </h3>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

            <div className="space-y-6">
              {shelterCrisis.timeline.map((item, index) => {
                const Icon = timelineIcons[item.type]
                const color = timelineColors[item.type]

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 sm:gap-6"
                  >
                    <div className={`w-8 h-8 rounded-full ${colorClasses[color].bgLight} ${colorClasses[color].border} flex items-center justify-center flex-shrink-0 relative z-10`}>
                      <Icon className={`w-4 h-4 ${colorClasses[color].text}`} />
                    </div>
                    <div className="flex-1 pb-6">
                      <div className={`text-sm font-medium ${colorClasses[color].text} mb-1`}>{item.date}</div>
                      <div className="text-white">{item.event}</div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* No-Bid Contracts Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <DollarSign className="w-6 h-6 text-money" />
            Questionable No-Bid Contracts
          </h3>

          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              {/* Header */}
              <div className="grid grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-5 bg-card border border-border rounded-t-xl text-sm font-medium text-muted-foreground">
                <div>Vendor</div>
                <div>Amount</div>
                <div>Issue</div>
                <div>Connection</div>
              </div>

              {/* Rows */}
              {shelterCrisis.contracts.map((contract, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-5 border-x border-b border-border last:rounded-b-xl hover:bg-card-hover transition-colors"
                >
                  <div className="font-medium text-white">{contract.vendor}</div>
                  <div className="text-danger font-bold">{contract.amount}</div>
                  <div className="text-sm text-muted-foreground">{contract.issue}</div>
                  <div className="text-sm text-money">{contract.connection}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* HomeBASE Shell Game */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-money" />
            {shelterCrisis.homebase.title}
          </h3>
          <p className="text-muted-foreground mb-8">{shelterCrisis.homebase.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {/* FY2022 */}
            <div className="p-6 sm:p-8 rounded-xl bg-card border border-border">
              <div className="text-sm text-muted-foreground mb-1">FY 2022 (Baseline)</div>
              <div className="text-2xl font-bold text-white">{shelterCrisis.homebase.data[0].spending}</div>
              <div className="text-sm text-muted">{shelterCrisis.homebase.data[0].caseload} families</div>
            </div>

            {/* Arrow */}
            <div className="hidden sm:flex items-center justify-center">
              <div className="text-5xl font-bold text-money">{shelterCrisis.homebase.increase}</div>
            </div>

            {/* FY2025 */}
            <div className="p-6 sm:p-8 rounded-xl bg-danger/10 border border-danger/30">
              <div className="text-sm text-danger mb-1">FY 2025 (Projected)</div>
              <div className="text-2xl font-bold text-danger">{shelterCrisis.homebase.data[1].spending}</div>
              <div className="text-sm text-muted-foreground">{shelterCrisis.homebase.data[1].caseload} families</div>
            </div>
          </div>
        </motion.div>

        {/* Cost Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
        >
          <div className="p-6 sm:p-8 rounded-xl bg-card border border-border">
            <Users className="w-8 h-8 text-danger mb-4" />
            <div className="text-sm text-muted-foreground mb-2">Per Family Cost</div>
            <div className="text-xl font-bold text-white">{shelterCrisis.costs.perFamily}</div>
          </div>
          <div className="p-6 sm:p-8 rounded-xl bg-card border border-border">
            <Building className="w-8 h-8 text-money mb-4" />
            <div className="text-sm text-muted-foreground mb-2">Communities Affected</div>
            <div className="text-xl font-bold text-white">{shelterCrisis.costs.communities}</div>
          </div>
          <div className="p-6 sm:p-8 rounded-xl bg-card border border-border">
            <AlertTriangle className="w-8 h-8 text-danger mb-4" />
            <div className="text-sm text-muted-foreground mb-2">National Guard (FY24)</div>
            <div className="text-xl font-bold text-white">{shelterCrisis.costs.nationalGuard.fy2024}</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
