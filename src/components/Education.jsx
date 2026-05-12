import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'
import { SectionHeader } from './About'

const educationData = [
  {
    institution: "Dwarkadas J. Sanghvi College of Engineering",
    degree: 'B.Tech in Computer Science Engineering (Data Science)',
    affiliation: "SVKM's · University of Mumbai",
    duration: 'Aug 2023 – Present',
    location: 'Mumbai, India',
    gpa: 'CGPA · 9.17 / 10',
    status: 'current',
    accent: 'from-primary-400 to-cyan-400',
    notes: [
      'Specializing in Data Science, AI/ML, and full-stack systems.',
      'Active across hackathons and student technical communities.',
    ],
  },
  {
    institution: 'Maharashtra State Board',
    degree: 'Higher Secondary Certificate (HSC) — Science',
    affiliation: 'XI–XII',
    duration: '2021 – 2023',
    location: 'Mumbai, India',
    gpa: '82.33 %',
    status: 'completed',
    accent: 'from-violet-400 to-primary-500',
    notes: [
      'Strong foundation in mathematics, physics, and computer science.',
    ],
  },
]

const stats = [
  { v: '9.17', l: 'Current CGPA' },
  { v: '82.33%', l: 'HSC Score' },
  { v: '3+', l: 'Years of CS' },
  { v: '2', l: 'Institutions' },
]

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="education" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-15 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(50% 50% at 15% 70%, rgba(79,124,255,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          num="06"
          tag="Education"
          title="My"
          highlight="academic journey"
          desc="The classrooms that built my foundation."
          isInView={isInView}
        />

        <div className="space-y-5">
          {educationData.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="surface surface-hover p-6 sm:p-7 group"
            >
              <div className="flex flex-col sm:flex-row gap-5">
                <div
                  className={`shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${edu.accent} flex items-center justify-center text-white shadow-glow`}
                >
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="text-xl font-display font-bold text-white">
                        {edu.institution}
                      </h3>
                      <p className="text-primary-300 text-sm font-medium mt-0.5">
                        {edu.degree}
                      </p>
                      <p className="text-ink-400 text-xs mt-0.5">
                        {edu.affiliation}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5">
                      <span
                        className={`text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                          edu.status === 'current'
                            ? 'border-emerald-300/30 bg-emerald-300/10 text-emerald-200'
                            : 'border-white/10 bg-white/5 text-ink-300'
                        }`}
                      >
                        {edu.status === 'current' ? 'In Progress' : 'Completed'}
                      </span>
                      <span className="text-xs text-ink-300 inline-flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" /> {edu.duration}
                      </span>
                      <span className="text-xs text-ink-300 inline-flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" /> {edu.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mt-3">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/15 border border-primary-400/30 text-primary-100 text-sm font-medium">
                      {edu.gpa}
                    </span>
                  </div>

                  <ul className="mt-3 space-y-1.5">
                    {edu.notes.map((n, idx) => (
                      <li key={idx} className="text-ink-300 text-sm flex gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((s) => (
            <div key={s.l} className="surface p-5 text-center">
              <div className="text-3xl font-display font-bold text-gradient">{s.v}</div>
              <div className="text-xs text-ink-300 mt-1 uppercase tracking-wider">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education
