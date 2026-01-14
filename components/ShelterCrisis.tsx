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

      <div className="max-w-7xl mx-auto page-gutter relative z-10">
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

        {/* Overview - Left border accent instead of full card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-6 sm:p-8 rounded-xl bg-card/50 border-l-4 border-l-danger border-t border-r border-b border-t-border border-r-border border-b-border"
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
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-danger via-money to-muted hidden sm:block" />

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

        {/* No-Bid Contracts Table - Different treatment */}
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
            <div className="min-w-[700px]">
              {/* Header */}
              <div className="grid grid-cols-[1.5fr_1fr_1.5fr_1fr] gap-4 sm:gap-6 p-4 sm:p-5 bg-money/5 border border-money/20 rounded-t-xl text-sm font-medium text-money uppercase tracking-wide">
                <div>Vendor</div>
                <div className="text-right">Amount</div>
                <div>Issue</div>
                <div>Connection</div>
              </div>

              {/* Rows */}
              {shelterCrisis.contracts.map((contract, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[1.5fr_1fr_1.5fr_1fr] gap-4 sm:gap-6 p-4 sm:p-5 border-x border-b border-border last:rounded-b-xl hover:bg-card/80 transition-colors items-start"
                >
                  <div className="font-bold text-white">{contract.vendor}</div>
                  <div className="text-danger font-bold text-right tabular-nums">{contract.amount}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{contract.issue}</div>
                  <div className="text-sm text-money font-medium">{contract.connection}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* HomeBASE Shell Game - Simplified comparison */}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* FY2022 - Baseline */}
            <div className="p-6 sm:p-8 rounded-xl bg-card border border-border h-full flex flex-col justify-center">
              <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">FY 2022 (Baseline)</div>
              <div className="text-4xl font-bold text-white mb-2 tabular-nums">{shelterCrisis.homebase.data[0].spending}</div>
              <div className="text-base text-muted font-medium flex items-center gap-2">
                <Users className="w-4 h-4" />
                {shelterCrisis.homebase.data[0].caseload} families
              </div>
            </div>

            {/* FY2025 - With increase inline */}
            <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-danger/10 to-transparent border border-danger/30 glow-danger h-full flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3">
                <span className="px-2 py-1 text-xs font-bold rounded bg-danger text-white">
                  {shelterCrisis.homebase.increase}
                </span>
              </div>
              <div className="text-sm text-danger font-bold mb-2 uppercase tracking-wide">FY 2025 (Projected)</div>
              <div className="text-4xl font-bold text-danger mb-2 tabular-nums">{shelterCrisis.homebase.data[1].spending}</div>
              <div className="text-base text-danger/80 font-medium flex items-center gap-2">
                <Users className="w-4 h-4" />
                {shelterCrisis.homebase.data[1].caseload} families
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cost Summary - Varied card treatments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
        >
          <div className="p-6 sm:p-8 rounded-xl bg-card border-l-4 border-l-danger border-t border-r border-b border-t-border border-r-border border-b-border h-full flex flex-col justify-between">
            <div>
              <Users className="w-8 h-8 text-danger mb-4" />
              <div className="text-sm text-muted-foreground mb-2">Per Family Cost</div>
            </div>
            <div className="text-xl font-bold text-white tabular-nums">{shelterCrisis.costs.perFamily}</div>
          </div>
          <div className="p-6 sm:p-8 rounded-xl bg-card border-l-4 border-l-money border-t border-r border-b border-t-border border-r-border border-b-border h-full flex flex-col justify-between">
            <div>
              <Building className="w-8 h-8 text-money mb-4" />
              <div className="text-sm text-muted-foreground mb-2">Communities Affected</div>
            </div>
            <div className="text-xl font-bold text-white tabular-nums">{shelterCrisis.costs.communities}</div>
          </div>
          <div className="p-6 sm:p-8 rounded-xl bg-card border-l-4 border-l-danger border-t border-r border-b border-t-border border-r-border border-b-border h-full flex flex-col justify-between">
            <div>
              <AlertTriangle className="w-8 h-8 text-danger mb-4" />
              <div className="text-sm text-muted-foreground mb-2">National Guard (FY24)</div>
            </div>
            <div className="text-xl font-bold text-white tabular-nums">{shelterCrisis.costs.nationalGuard.fy2024}</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
