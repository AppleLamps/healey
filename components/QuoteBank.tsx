'use client'

import { motion } from 'framer-motion'
import { quotes } from '@/lib/data'
import { Quote } from 'lucide-react'

export default function QuoteBank() {
  return (
    <section className="py-24 sm:py-28 lg:py-32 relative">
      <div className="max-w-7xl mx-auto page-gutter">
        {/* Header - Simpler, no badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">In Their Own Words</h2>
          <p className="text-muted-foreground max-w-2xl">
            Critical assessments from officials, watchdogs, and the Governor herself
          </p>
        </motion.div>

        {/* Quotes Grid - Varied sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {quotes.map((quote, index) => {
            // First quote gets featured treatment
            const isFeatured = index === 0
            // Alternate card styles for variety
            const cardStyle = index % 3

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`relative group ${isFeatured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className={`h-full p-6 sm:p-8 rounded-xl transition-colors ${
                  cardStyle === 0
                    ? 'bg-card border-l-4 border-l-danger border-t border-r border-b border-t-border border-r-border border-b-border hover:bg-card-hover'
                    : cardStyle === 1
                    ? 'bg-card/50 border border-border hover:border-muted/50'
                    : 'bg-gradient-to-br from-card to-card/50 border border-border hover:border-money/30'
                }`}>
                  {/* Quote Icon - Varied positioning */}
                  <Quote className={`w-6 h-6 mb-4 ${
                    cardStyle === 0 ? 'text-danger/40' : cardStyle === 1 ? 'text-muted/30' : 'text-money/30'
                  }`} />

                  {/* Topic Tag */}
                  <span className={`inline-block px-2 py-1 text-xs font-medium rounded mb-4 ${
                    cardStyle === 0
                      ? 'bg-danger/10 text-danger border border-danger/20'
                      : cardStyle === 1
                      ? 'bg-muted/10 text-muted-foreground border border-muted/20'
                      : 'bg-money/10 text-money border border-money/20'
                  }`}>
                    {quote.topic}
                  </span>

                  {/* Quote Text */}
                  <blockquote className="text-white leading-relaxed mb-4">
                    "{quote.text}"
                  </blockquote>

                  {/* Source */}
                  <cite className="text-sm text-muted-foreground not-italic">
                    — {quote.source}
                  </cite>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
