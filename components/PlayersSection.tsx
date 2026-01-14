'use client'

import { motion } from 'framer-motion'
import { players } from '@/lib/data'
import { colorClasses, type ColorKey } from '@/lib/colors'
import { AlertCircle, Briefcase, Building2, Shield } from 'lucide-react'

const iconMap = {
  healey: AlertCircle,
  gorzkowicz: Briefcase,
  obrien: Building2,
  dizoglio: Shield,
}

export default function PlayersSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">The Players</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Understanding the key figures and their roles in this financial and political network
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {players.map((player, index) => {
            const Icon = iconMap[player.id as keyof typeof iconMap] || AlertCircle

            return (
              <motion.div
                key={player.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-card border border-border hover:border-border/80 transition-all group"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  {/* Avatar */}
                  <div className={`w-16 h-16 rounded-xl ${colorClasses[player.color as ColorKey].bgLight} ${colorClasses[player.color as ColorKey].border} flex items-center justify-center flex-shrink-0`}>
                    <span className={`text-xl font-bold ${colorClasses[player.color as ColorKey].text}`}>{player.initials}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className={`w-4 h-4 ${colorClasses[player.color as ColorKey].text}`} />
                      <span className={`text-xs font-medium ${colorClasses[player.color as ColorKey].text} uppercase tracking-wide`}>
                        {player.role}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white truncate">{player.name}</h3>
                    <p className="text-sm text-muted-foreground">{player.title}</p>
                  </div>
                </div>

                {/* Points */}
                <ul className="space-y-2">
                  {player.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full ${colorClasses[player.color as ColorKey].bg} mt-2 flex-shrink-0`} />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Glow */}
                <div className={`absolute inset-0 rounded-2xl ${colorClasses[player.color as ColorKey].bgHover} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
