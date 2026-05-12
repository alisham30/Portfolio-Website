import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { SectionHeader } from './About'

const experiences = [
  {
    company: 'DigiKendr',
    role: 'AI & Software Developer Intern',
    location: 'Mulund, Mumbai',
    period: 'Oct 2025 – Jan 2026',
    bullets: [
      'Built an AI ad-generation system using Gemini API, FastAPI, and Next.js that auto-generates creatives from scraped business data.',
      "Automated end-to-end data extraction and ad publishing with Selenium, integrating directly with Meta's Ads platform.",
      'Deployed on AWS EC2 with Docker, S3, and Secrets Manager; configured Nginx, systemctl, and DNS via Cloudflare/GoDaddy with GitHub Actions CI/CD.',
    ],
    tech: ['Gemini API', 'FastAPI', 'Next.js', 'Selenium', 'AWS EC2', 'Docker', 'Nginx', 'GitHub Actions'],
  },
]

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="experience" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-15 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(50% 60% at 80% 50%, rgba(139,92,246,0.10) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          num="02"
          tag="Experience"
          title="Where I've"
          highlight="shipped code"
          desc="Production work that runs in the real world."
          isInView={isInView}
        />

        <div className="relative pl-8 sm:pl-12">
          {/* Timeline */}
          <div className="absolute left-3 sm:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary-500 via-violet-500/40 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="relative pb-12 last:pb-0"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="absolute -left-[26px] sm:-left-[34px] top-1 w-7 h-7 rounded-full bg-ink-950 border-2 border-primary-400 flex items-center justify-center shadow-glow">
                <Briefcase className="w-3 h-3 text-primary-300" />
              </div>

              <div className="surface surface-hover p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <p className="text-primary-300 text-xs uppercase tracking-[0.25em] mb-2">
                      Internship
                    </p>
                    <h3 className="text-2xl font-display font-bold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-ink-200 mt-1">
                      <span className="text-gradient-blue font-semibold">{exp.company}</span>
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1 text-sm text-ink-300">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary-400" /> {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-primary-400" /> {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-5">
                  {exp.bullets.map((b, idx) => (
                    <li key={idx} className="flex gap-3 text-ink-200 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full glass text-primary-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
