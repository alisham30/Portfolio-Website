import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, ExternalLink, Sparkles, Construction, Trophy, Star } from 'lucide-react'
import { SectionHeader } from './About'

const projects = [
  {
    title: 'RepFlow',
    tagline: 'AI-powered fitness coaching PWA',
    description:
      'A real-time virtual personal trainer — webcam pose-estimation counts your reps, GPT-4o vision critiques your form, and a voice coach speaks cues like a human trainer.',
    highlights: [
      'Client-side pose detection at 30fps via TensorFlow.js MoveNet — no video leaves the device for the rule engine.',
      'Multi-frame GPT-4o vision analysis every 3s: form quality, specific issue, one-sentence cue, and rep-count verdict.',
      'OpenAI TTS voice coach with trainer-style event triggers (set-start hype, halfway encouragement, last-rep push).',
      'Smart rep counter with self-adjusting baseline, partial/bounce rejection, and per-exercise analyzers.',
    ],
    tech: ['React 19', 'Vite', 'Tailwind', 'Zustand', 'Framer Motion', 'TensorFlow.js', 'FastAPI', 'PostgreSQL', 'OpenAI GPT-4o', 'OpenAI TTS', 'Docker'],
    github: null,
    demo: null,
    status: 'building',
    accent: 'from-violet-500 via-primary-500 to-teal-400',
    flagship: true,
  },
  {
    title: 'Sahaay',
    tagline: 'Disaster Rescue & Relief Platform',
    description:
      'A full-stack disaster management platform deployed on Azure — 25+ REST APIs, face-recognition reunification, multi-hazard prediction, and SMS alerts in 13 languages.',
    highlights: [
      'FastAPI face-recognition service using InsightFace (ArcFace, 512-d) + OpenCV, supporting QR, biometric, and manual registration across 4 role-based user types.',
      'Missing-person search pipeline with SQL filtering, weighted scoring, and CLIP embeddings — 90%+ recall for cross-camp identification at scale.',
      'Multi-hazard prediction using Open-Meteo and USGS APIs, with a MapLibre dashboard, ML-based resource allocation, and Twilio SMS alerts in 13 languages.',
    ],
    tech: ['Next.js', 'Python', 'FastAPI', 'OpenCV', 'InsightFace', 'CLIP', 'Supabase', 'PostgreSQL', 'MapLibre', 'Twilio', 'Azure'],
    github: 'https://github.com/alisham30',
    demo: '#',
    status: 'live',
    accent: 'from-rose-400 via-primary-500 to-cyan-400',
    flagship: true,
  },
  {
    title: 'HERE Geospatial Map Update System',
    tagline: '1st Runner-Up · HERE Mumbai Student Hackathon',
    description:
      'A geospatial change-detection system that cross-references OSM data with live signals from official datasets, business sites, and delivery platforms to flag new, closed, and rebranded locations.',
    highlights: [
      'Location-matching pipeline using OneMap, GeoJSON, and rule-based XAI logic producing confidence-scored update proposals.',
      'OpenStreetMap dashboard with marker clustering, fly-to navigation, and detail panels supporting inspection of 10,000+ POIs.',
      'Real-time map-update visualization showing predicted changes with confidence scores.',
    ],
    tech: ['FastAPI', 'React', 'Leaflet', 'OpenStreetMap', 'Python', 'GeoJSON', 'data.gov.sg', 'OneMap'],
    github: 'https://github.com/alisham30',
    demo: null,
    status: 'award',
    accent: 'from-amber-400 via-orange-400 to-rose-500',
    flagship: false,
  },
  {
    title: 'Login Anomaly Detection',
    tagline: 'MLOps Security System on AWS',
    description:
      'A real-time login anomaly detection system using scikit-learn, deployed via Docker on AWS EC2 with a Jenkins CI/CD pipeline for automated model retraining and continuous deployment.',
    highlights: [
      'Real-time anomaly scoring served via FastAPI behind Docker.',
      'Jenkins CI/CD pipeline triggers retraining and rolling deploys on new data drops.',
      'Containerized and reproducible — full MLOps loop from data to deploy.',
    ],
    tech: ['Python', 'FastAPI', 'scikit-learn', 'Jenkins', 'Docker', 'AWS EC2', 'CI/CD'],
    github: 'https://github.com/alisham30',
    demo: null,
    status: 'live',
    accent: 'from-emerald-400 via-primary-500 to-violet-500',
    flagship: false,
  },
  {
    title: 'Who Lies Tonight',
    tagline: 'Multiplayer 3D Social Deduction Game',
    description:
      'A real-time multiplayer Mafia game set in a 3D environment with WebRTC voice chat, ElevenLabs AI narration, and Ready Player Me avatar customization.',
    highlights: [
      '3D scene built with Three.js + Spline, networked via Socket.io for real-time game state.',
      'Peer-to-peer WebRTC voice chat for in-game discussion phases.',
      'AI narrator using ElevenLabs voices to drive the game phases dramatically.',
    ],
    tech: ['React', 'Three.js', 'Spline', 'Socket.io', 'WebRTC', 'ElevenLabs', 'Ready Player Me'],
    github: 'https://github.com/alisham30',
    demo: null,
    status: 'live',
    accent: 'from-violet-400 via-primary-500 to-cyan-400',
    flagship: false,
  },
  {
    title: 'NIFTY Stock Analysis',
    tagline: 'PySpark Data Engineering Pipeline',
    description:
      'End-to-end data engineering pipeline analyzing NIFTY50 stock data — computes shock days (>2% drops) and bounce-back rates inside a Dockerized PySpark setup with Parquet outputs.',
    highlights: [
      'Dockerized PySpark cluster processes NIFTY50 historical data end-to-end.',
      'Computes per-ticker shock days and bounce-back statistics, persisted as Parquet/CSV.',
      'Interactive notebooks for visualizing volatility patterns across the index.',
    ],
    tech: ['PySpark', 'Docker', 'Jupyter', 'Parquet', 'Python'],
    github: 'https://github.com/alisham30/nifty-stock-analysis',
    demo: null,
    status: 'live',
    accent: 'from-primary-400 via-cyan-400 to-emerald-400',
    flagship: false,
  },
]

const statusMeta = {
  building: { label: 'In Development', icon: Construction, color: 'border-amber-300/30 bg-amber-300/10 text-amber-200' },
  live: { label: 'Shipped', icon: Sparkles, color: 'border-emerald-300/30 bg-emerald-300/10 text-emerald-200' },
  award: { label: '1st Runner-Up', icon: Trophy, color: 'border-amber-200/30 bg-amber-200/10 text-amber-200' },
}

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section id="projects" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-15 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(50% 60% at 90% 10%, rgba(79,124,255,0.10) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          num="03"
          tag="Selected Work"
          title="Featured"
          highlight="projects"
          desc="From production AI platforms to data engineering pipelines — things I've actually built and shipped."
          isInView={isInView}
        />

        <div className="space-y-7">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} isInView={isInView} />
          ))}
        </div>

        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="https://github.com/alisham30"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-white hover:bg-white/10 transition-colors font-semibold"
          >
            <Github className="w-5 h-5" />
            View All Repositories
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project, index, isInView }) => {
  const meta = statusMeta[project.status]
  const StatusIcon = meta.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="surface surface-hover relative overflow-hidden"
    >
      {/* Accent glow */}
      <div
        className={`absolute -top-32 -right-32 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none bg-gradient-to-br ${project.accent}`}
      />
      <div
        className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${project.accent} opacity-90 rounded-l-3xl`}
      />

      <div className="relative p-7 sm:p-9 grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              {project.title}
            </h3>
            <span
              className={`inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full border ${meta.color}`}
            >
              <StatusIcon className="w-3 h-3" />
              {meta.label}
            </span>
            {project.flagship && (
              <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-primary-300/40 bg-primary-500/15 text-primary-100">
                <Star className="w-3 h-3" />
                Flagship
              </span>
            )}
          </div>

          <p className="text-primary-300 font-medium">{project.tagline}</p>
          <p className="text-ink-200 leading-relaxed">{project.description}</p>

          <ul className="space-y-2 pt-1">
            {project.highlights.map((h, idx) => (
              <li key={idx} className="flex gap-3 text-ink-300 text-sm leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full glass text-primary-100"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
          {project.demo && project.demo !== '#' && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-500 to-violet-500 text-white font-semibold shadow-glow hover:shadow-glow-lg transition-shadow text-sm"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </motion.a>
          )}
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full glass text-white hover:bg-white/10 transition-colors text-sm font-semibold"
            >
              <Github className="w-4 h-4" /> Source
            </motion.a>
          )}
          {!project.github && !project.demo && (
            <span className="text-xs text-ink-400 italic">
              Repo coming soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default Projects
