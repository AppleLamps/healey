'use client'

import { motion } from 'framer-motion'
import { Network, DollarSign, Building2, Users, AlertTriangle } from 'lucide-react'

export default function ConnectionMap() {
  return (
    <section className="py-24 sm:py-28 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-transparent to-card/50" />

      <div className="max-w-7xl mx-auto page-gutter relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-money/10 border border-money/20 mb-4">
            <Network className="w-4 h-4 text-money" />
            <span className="text-sm font-medium text-money">FOLLOW THE MONEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">The Connection Map</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            How political power translates to private wealth through a network of connected entities
          </p>
        </motion.div>

        {/* Network Visualization */}
        <div className="relative">
          {/* SVG Connection Lines - Desktop */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{ zIndex: 0 }}>
            {/* Lines from center hub to branches */}
            <motion.path
              d="M 50% 180 Q 25% 280 16.67% 380"
              stroke="url(#gradient-danger)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ vectorEffect: 'non-scaling-stroke' }}
            />
            <motion.path
              d="M 50% 180 L 50% 380"
              stroke="url(#gradient-danger)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              style={{ vectorEffect: 'non-scaling-stroke' }}
            />
            <motion.path
              d="M 50% 180 Q 75% 280 83.33% 380"
              stroke="url(#gradient-money)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
              style={{ vectorEffect: 'non-scaling-stroke' }}
            />
            <defs>
              <linearGradient id="gradient-danger" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#dc2626" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#dc2626" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="gradient-money" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Central Hub - Healey */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-4 relative z-10"
          >
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-danger/20 to-danger/5 border-2 border-danger flex flex-col items-center justify-center text-center p-4 glow-danger-intense">
              <AlertTriangle className="w-8 h-8 text-danger mb-2" />
              <span className="text-lg font-bold text-white">Maura Healey</span>
              <span className="text-xs text-muted-foreground">Governor</span>
            </div>
          </motion.div>

          {/* Emergency Declaration - Connected node */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mb-8 relative z-10"
          >
            <div className="flex flex-col items-center">
              <div className="w-1 h-8 bg-gradient-to-b from-danger to-danger/30" />
              <div className="px-6 py-3 rounded-lg bg-danger/15 border border-danger/40 text-center">
                <span className="text-base font-bold text-danger">Emergency Declaration</span>
                <span className="block text-xs text-muted-foreground mt-1">Aug 2023 • Bypassed procurement</span>
              </div>
              <div className="w-1 h-8 bg-gradient-to-b from-danger/30 to-transparent" />
            </div>
          </motion.div>

          {/* Connection branches - Three columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {/* No-Bid Contracts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              {/* Connection dot */}
              <div className="hidden md:flex absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-money border-2 border-money glow-money" />

              <div className="p-6 sm:p-8 rounded-2xl bg-card border-t-4 border-t-money border-x border-b border-x-border border-b-border">
                <DollarSign className="w-10 h-10 text-money mb-4" />
                <h3 className="text-lg font-bold text-white mb-4">No-Bid Contracts</h3>

                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-money/5 border-l-2 border-l-money">
                    <div className="text-sm font-medium text-white">Spinelli Ravioli</div>
                    <div className="text-xs text-danger font-semibold">$10M contract</div>
                    <div className="text-xs text-money mt-1">→ $10k+ to Healey campaigns</div>
                  </div>
                  <div className="p-3 rounded-lg bg-money/5 border-l-2 border-l-money">
                    <div className="text-sm font-medium text-white">Mercedes Cab</div>
                    <div className="text-xs text-danger font-semibold">$6.8M+ contracts</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Conflict of Interest */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              {/* Connection dot */}
              <div className="hidden md:flex absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-danger border-2 border-danger glow-danger" />

              <div className="p-6 sm:p-8 rounded-2xl bg-card border-t-4 border-t-danger border-x border-b border-x-border border-b-border">
                <Users className="w-10 h-10 text-danger mb-4" />
                <h3 className="text-lg font-bold text-white mb-4">Conflict of Interest</h3>

                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-danger/5 border-l-2 border-l-danger/50">
                    <div className="text-sm font-medium text-white">Valley Opp. Council</div>
                    <div className="text-xs text-muted-foreground">Multi-million contract</div>
                  </div>
                  <div className="flex justify-center py-1">
                    <div className="w-0.5 h-4 bg-danger/50" />
                  </div>
                  <div className="p-3 rounded-lg bg-danger/10 border-l-2 border-l-danger">
                    <div className="text-sm font-medium text-danger">Key Food Marketplace</div>
                    <div className="text-xs text-muted-foreground">$945k subcontract</div>
                    <div className="text-xs text-money mt-1">Owner sits on VOC Board</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Lobbyist Pipeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="relative"
            >
              {/* Connection dot */}
              <div className="hidden md:flex absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-money border-2 border-money glow-money" />

              <div className="p-6 sm:p-8 rounded-2xl bg-card border-t-4 border-t-money border-x border-b border-x-border border-b-border">
                <Building2 className="w-10 h-10 text-money mb-4" />
                <h3 className="text-lg font-bold text-white mb-4">Lobbyist Pipeline</h3>

                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-money/5 border-l-2 border-l-money">
                    <div className="text-sm font-medium text-white">Thomas O'Brien</div>
                    <div className="text-xs text-muted-foreground">CEO, HYM Investment</div>
                    <div className="text-xs text-money mt-1">→ Advisory roles in admin</div>
                  </div>
                  <div className="p-3 rounded-lg bg-money/5 border-l-2 border-l-money">
                    <div className="text-sm font-medium text-white">Matthew Gorzkowicz</div>
                    <div className="text-xs text-muted-foreground">A&F Secretary</div>
                    <div className="text-xs text-money mt-1">← Former UMass lobbying VP</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-10 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-danger/10 via-card to-money/10 border-l-4 border-l-danger border-t border-r border-b border-t-border border-r-border border-b-border"
          >
            <p className="text-base text-muted-foreground italic">
              "Any advocacy by Gov. Healey for infrastructure and housing initiatives directly benefits connected donors, lobbyists, and political allies through the network of no-bid contracts and advisory appointments."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
