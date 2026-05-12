import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Database, Cloud, Brain } from 'lucide-react'

const focuses = [
  {
    icon: Code2,
    title: 'Full-Stack Engineering',
    desc: 'Production apps with Next.js, React, FastAPI, and PostgreSQL — REST APIs, auth flows, dashboards.',
    accent: 'from-primary-500 to-primary-700',
  },
  {
    icon: Brain,
    title: 'AI & Computer Vision',
    desc: 'GPT-4o vision, TensorFlow.js pose estimation, ArcFace face recognition, CLIP embeddings.',
    accent: 'from-violet-500 to-primary-500',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    desc: 'PySpark + Docker pipelines, Snowflake, ETL, and analytics dashboards that turn data into decisions.',
    accent: 'from-teal-400 to-primary-500',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc: 'AWS EC2, Docker, Nginx, GitHub Actions CI/CD, Secrets Manager — production-tested deployments.',
    accent: 'from-primary-400 to-violet-500',
  },
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-15 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(50% 40% at 20% 30%, rgba(79,124,255,0.10) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          num="01"
          tag="About"
          title="A little"
          highlight="about me"
          desc="Engineer at heart — I love shipping software that real people use."
          isInView={isInView}
        />

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left: Bio */}
          <motion.div
            className="lg:col-span-7 space-y-5 text-ink-200 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p>
              I'm a third-year{' '}
              <span className="text-white font-semibold">B.Tech Computer Science (Data Science)</span>{' '}
              student at <span className="text-primary-300">DJ Sanghvi College of Engineering</span>{' '}
              with a <span className="text-white">CGPA of 9.17</span>. My focus is building software
              that actually goes to production — not just demos.
            </p>
            <p>
              Most recently I was an{' '}
              <span className="text-white font-semibold">AI &amp; Software Developer Intern at DigiKendr</span>{' '}
              (Oct 2025 – Jan 2026), where I built an end-to-end ad-generation platform
              using the Gemini API, FastAPI, and Next.js. The pipeline scrapes business
              data, generates ad creatives, and publishes them through Meta — all
              deployed on AWS EC2 behind Nginx with GitHub Actions CI/CD.
            </p>
            <p>
              On the side I ship projects with real depth:{' '}
              <span className="text-primary-300 font-medium">Sahaay</span>, a disaster
              rescue platform with face-recognition reunification;{' '}
              <span className="text-primary-300 font-medium">RepFlow</span>, an AI
              fitness PWA with live form coaching via webcam pose-estimation;{' '}
              <span className="text-primary-300 font-medium">HERE Geospatial</span>,
              a map-update system that won 1st Runner-Up at the Mumbai Student Hackathon.
            </p>
            <p className="text-ink-300">
              I care about clean engineering, thoughtful design, and shipping things
              people can actually click on.
            </p>
          </motion.div>

          {/* Right: Focus cards */}
          <motion.div
            className="lg:col-span-5 grid sm:grid-cols-2 gap-4"
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
            }}
          >
            {focuses.map((f) => (
              <motion.div
                key={f.title}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0 },
                }}
                className="surface surface-hover p-5 group"
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${f.accent} shadow-glow text-white`}
                >
                  <f.icon className="w-5 h-5" />
                </div>
                <h4 className="font-display text-white font-semibold mb-1.5">
                  {f.title}
                </h4>
                <p className="text-sm text-ink-300 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export const SectionHeader = ({ tag, title, highlight, desc, isInView, num, align = 'left' }) => (
  <motion.div
    className={`mb-14 ${align === 'center' ? 'text-center' : ''}`}
    initial={{ opacity: 0, y: 24 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.7 }}
  >
    <div className={`flex items-center gap-4 mb-6 ${align === 'center' ? 'justify-center' : ''}`}>
      {num && (
        <span className="font-fraunces italic text-primary-300 text-xl">
          {num}
        </span>
      )}
      <span className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-primary-400/60 to-transparent" />
      {tag && (
        <span className="text-[11px] uppercase tracking-[0.4em] text-ink-300">
          {tag}
        </span>
      )}
    </div>
    <h2 className="font-fraunces italic font-light text-5xl md:text-6xl lg:text-7xl text-white leading-[0.95]">
      {title}{' '}
      <span className="text-gradient">{highlight}</span>
    </h2>
    {desc && (
      <p className="mt-5 text-ink-300 text-lg max-w-2xl leading-relaxed font-light">
        {desc}
      </p>
    )}
  </motion.div>
)

export default About
