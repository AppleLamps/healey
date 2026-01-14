'use client'

import { motion } from 'framer-motion'
import { connections } from '@/lib/data'
import { Network, ArrowRight, DollarSign, Building2, Users, AlertTriangle } from 'lucide-react'

export default function ConnectionMap() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-transparent to-card/50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        {/* Visual Connection Flow */}
        <div className="relative">
          {/* Central Hub - Healey */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <div className="w-48 h-48 rounded-full bg-danger/10 border-2 border-danger flex flex-col items-center justify-center text-center p-4 glow-danger">
              <AlertTriangle className="w-8 h-8 text-danger mb-2" />
              <span className="text-lg font-bold text-white">Maura Healey</span>
              <span className="text-xs text-muted-foreground">Governor</span>
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-8 bg-danger" />
              <ArrowRight className="w-6 h-6 text-danger rotate-90" />
              <span className="text-xs text-danger mt-2">Declared Aug 2023</span>
            </div>
          </motion.div>

          {/* Emergency Declaration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <div className="px-8 py-4 rounded-xl bg-danger/10 border border-danger/30 text-center">
              <span className="text-lg font-bold text-danger">Emergency Declaration</span>
              <span className="block text-xs text-muted-foreground">Bypassed procurement laws</span>
            </div>
          </motion.div>

          {/* Branches */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* No-Bid Contracts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-card border border-money/30"
            >
              <DollarSign className="w-10 h-10 text-money mb-4" />
              <h3 className="text-lg font-bold text-white mb-4">No-Bid Contracts</h3>

              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-card-hover border border-border">
                  <div className="text-sm font-medium text-white">Spinelli Ravioli</div>
                  <div className="text-xs text-danger">$10M contract</div>
                  <div className="text-xs text-money mt-1">→ $10k+ to Healey campaigns</div>
                </div>
                <div className="p-3 rounded-lg bg-card-hover border border-border">
                  <div className="text-sm font-medium text-white">Mercedes Cab</div>
                  <div className="text-xs text-danger">$6.8M+ contracts</div>
                </div>
              </div>
            </motion.div>

            {/* Conflict of Interest */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl bg-card border border-danger/30"
            >
              <Users className="w-10 h-10 text-danger mb-4" />
              <h3 className="text-lg font-bold text-white mb-4">Conflict of Interest</h3>

              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-card-hover border border-border">
                  <div className="text-sm font-medium text-white">Valley Opp. Council</div>
                  <div className="text-xs text-muted-foreground">Multi-million contract</div>
                </div>
                <div className="flex items-center justify-center py-2">
                  <ArrowRight className="w-4 h-4 text-danger rotate-90" />
                </div>
                <div className="p-3 rounded-lg bg-danger/10 border border-danger/30">
                  <div className="text-sm font-medium text-danger">Key Food Marketplace</div>
                  <div className="text-xs text-muted-foreground">$945k subcontract</div>
                  <div className="text-xs text-money mt-1">Owner sits on VOC Board</div>
                </div>
              </div>
            </motion.div>

            {/* Lobbyist Pipeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-card border border-money/30"
            >
              <Building2 className="w-10 h-10 text-money mb-4" />
              <h3 className="text-lg font-bold text-white mb-4">Lobbyist Pipeline</h3>

              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-card-hover border border-border">
                  <div className="text-sm font-medium text-white">Thomas O'Brien</div>
                  <div className="text-xs text-muted-foreground">CEO, HYM Investment</div>
                  <div className="text-xs text-money mt-1">→ Advisory roles in admin</div>
                </div>
                <div className="p-3 rounded-lg bg-card-hover border border-border">
                  <div className="text-sm font-medium text-white">Matthew Gorzkowicz</div>
                  <div className="text-xs text-muted-foreground">A&F Secretary</div>
                  <div className="text-xs text-money mt-1">← Former UMass lobbying VP</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-gradient-to-r from-danger/10 via-card to-money/10 border border-border text-center"
          >
            <p className="text-lg text-muted-foreground italic">
              "Any advocacy by Gov. Healey for infrastructure and housing initiatives directly benefits connected donors, lobbyists, and political allies through the network of no-bid contracts and advisory appointments."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
