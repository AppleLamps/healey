'use client'

import { motion } from 'framer-motion'
import { quotes } from '@/lib/data'
import { Quote, MessageSquare } from 'lucide-react'

export default function QuoteBank() {
  return (
    <section className="py-24 sm:py-28 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/10 border border-muted/20 mb-4">
            <MessageSquare className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">ADVERSARIAL QUOTES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">In Their Own Words</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Critical assessments from officials, watchdogs, and the Governor herself
          </p>
        </motion.div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-muted/50 transition-colors group"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-muted/20 group-hover:text-muted/30 transition-colors" />

              {/* Topic Tag */}
              <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-danger/10 text-danger border border-danger/20 mb-4">
                {quote.topic}
              </span>

              {/* Quote Text */}
              <blockquote className="text-white leading-relaxed mb-4 relative z-10">
                "{quote.text}"
              </blockquote>

              {/* Source */}
              <cite className="text-sm text-muted-foreground not-italic">
                — {quote.source}
              </cite>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
