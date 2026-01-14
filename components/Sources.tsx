'use client'

import { motion } from 'framer-motion'
import { sources } from '@/lib/data'
import { FileText, ExternalLink } from 'lucide-react'

export default function Sources() {
  return (
    <section id="sources" className="py-24 sm:py-28 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto page-gutter relative z-10">
        {/* Header - Simpler, no badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Sources & Citations</h2>
          <p className="text-muted-foreground max-w-2xl">
            All claims are based on publicly available sources including congressional disclosures, court records, news reports, and official audits.
          </p>
        </motion.div>

        {/* Sources List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
        >
          {sources.map((source, index) => (
            <motion.a
              key={source.id}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-4 p-5 sm:p-6 rounded-xl bg-card border border-border hover:border-muted/50 hover:bg-card-hover transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-muted/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-muted">[{source.id}]</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-white truncate group-hover:text-danger transition-colors">
                  {source.title}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Legal Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-6 sm:p-8 rounded-2xl bg-danger/5 border border-danger/20"
        >
          <h3 className="text-lg font-bold text-danger mb-2">Important Legal Notice</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This publication contains <strong className="text-white">opinion, commentary, and analysis</strong> on matters of public concern regarding public figures. All factual claims are based on publicly available sources including congressional disclosures, court records, and news reports. Where allegations are discussed, they represent claims made by third parties and do not constitute assertions of guilt or wrongdoing. This research is provided for informational purposes only.
          </p>
        </motion.div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Massachusetts Accountability Project • Investigation Period: January 2023 – January 2026
          </p>
          <p className="text-xs text-muted mt-2">
            Project ID: BLUE-WINTER-26
          </p>
        </div>
      </div>
    </section>
  )
}

