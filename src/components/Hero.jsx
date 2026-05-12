import React from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, Github, Linkedin, ArrowDown, Sparkles, MapPin, Trophy } from 'lucide-react'

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Alisha_Mathias_Resume.pdf'
    link.download = 'Alisha_Mathias_Resume.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-28 overflow-hidden"
    >
      {/* Aurora */}
      <div className="aurora" />
      <div className="absolute inset-0 dot-bg opacity-25 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(70% 50% at 50% 0%, rgba(79,124,255,0.18) 0%, transparent 60%), linear-gradient(180deg, transparent 70%, rgba(5,7,15,1) 100%)',
        }}
      />

      {/* Big background marquee text */}
      <div className="absolute inset-x-0 top-[42%] -translate-y-1/2 pointer-events-none select-none opacity-[0.05] mix-blend-screen">
        <div className="marquee-track font-fraunces italic font-light text-[14vw] leading-none text-white whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, n) => (
            <span key={n} className="inline-flex items-center gap-12">
              <span>Software</span>
              <span>✦</span>
              <span>AI</span>
              <span>✦</span>
              <span>Engineer</span>
              <span>✦</span>
              <span>Designer</span>
              <span>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Top meta row */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute top-24 left-0 right-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-ink-300">
          <span className="hidden sm:inline">Portfolio / 2026</span>
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Open for Summer 2026
          </span>
        </div>
      </motion.div>

      {/* Main */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* LEFT — Massive name */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 relative"
          >
            <div className="text-[11px] uppercase tracking-[0.4em] text-primary-300 mb-5">
              <span className="text-ink-500">— </span> Software &amp; AI Developer
            </div>

            {/* Name */}
            <div className="font-fraunces leading-[0.88]">
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2, duration: 0.9, ease: [0.7, 0, 0.2, 1] }}
                >
                  <h1 className="text-[18vw] sm:text-[14vw] lg:text-[10.5vw] font-light italic text-white">
                    Alisha
                  </h1>
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.45, duration: 0.9, ease: [0.7, 0, 0.2, 1] }}
                  className="flex items-baseline gap-4 sm:gap-6"
                >
                  <h1 className="text-[18vw] sm:text-[14vw] lg:text-[10.5vw] font-light italic text-gradient">
                    Mathias.
                  </h1>
                  <span className="hidden sm:inline-block font-fraunces not-italic text-xl lg:text-2xl text-ink-300 translate-y-[-1.5em]">
                    <span className="text-primary-300">★</span> est. 2005
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-ink-300 text-lg leading-relaxed max-w-2xl mt-8 sm:mt-10"
            >
              Third-year B.Tech CSE (Data Science) at{' '}
              <span className="text-white">DJ Sanghvi, Mumbai</span>. I design and ship
              full-stack AI products — from a disaster-rescue platform with face
              recognition, to a real-time AI fitness coach that watches your form
              through a webcam.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.6 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              <button
                onClick={handleDownloadResume}
                className="group relative shine overflow-hidden inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-violet-500 text-white font-semibold shadow-glow hover:shadow-glow-lg transition-all"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-white hover:bg-white/10 transition-colors font-semibold"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </button>
              <div className="flex items-center gap-2 pl-1">
                <a
                  href="https://github.com/alisham30"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3 rounded-full glass text-ink-200 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/alisha-mathias-85a44427b"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-full glass text-ink-200 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Badge row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-wrap gap-3 mt-7"
            >
              <Badge icon={Trophy} text="1st Runner-Up · HERE Geospatial Hackathon" tint="amber" />
              <Badge icon={Sparkles} text="CGPA 9.17" tint="blue" />
            </motion.div>
          </motion.div>

          {/* RIGHT — Photo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="lg:col-span-4 flex justify-center lg:justify-end"
          >
            <div className="relative animate-float-soft">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary-500/30 via-violet-500/25 to-teal-400/15 blur-3xl" />

              {/* Vertical 'NOW' label */}
              <div className="absolute -left-12 top-6 hidden lg:flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-ink-300 [writing-mode:vertical-rl] rotate-180">
                <span className="font-fraunces italic text-base normal-case tracking-normal text-primary-300">
                  Building
                </span>
                <span>RepFlow — AI Fitness Coach</span>
              </div>

              <div className="relative w-72 sm:w-80 lg:w-[22rem] aspect-[4/5] rounded-[2rem] overflow-hidden ring-glow">
                <img
                  src="/final.jpg"
                  alt="Alisha Mathias"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />

                {/* Corner crops */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-white/40" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-white/40" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-white/40" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-white/40" />

                {/* Caption */}
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-ink-300 mb-1">
                        Portrait No. 01
                      </div>
                      <div className="font-fraunces italic text-2xl text-white leading-none">
                        Alisha
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-[0.3em] text-ink-300 mb-1">
                        Based in
                      </div>
                      <div className="text-white text-sm inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-primary-300" /> Mumbai
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating chip */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 glass-strong rounded-2xl px-4 py-3 flex items-center gap-3 shadow-glow"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-ink-300">
                    Status
                  </div>
                  <div className="text-sm text-white font-medium">
                    Open to opportunities
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom strip */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-6 left-0 right-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={() => scrollTo('#about')}
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-ink-300 hover:text-white transition-colors"
            data-cursor="hover"
          >
            <ArrowDown className="w-4 h-4 animate-bounce" />
            Scroll
          </button>
          <div className="hidden sm:flex items-center gap-6 text-[11px] uppercase tracking-[0.3em] text-ink-300">
            <span>★ 9.17 / 10</span>
            <span>★ 4+ Projects</span>
            <span>★ 25+ APIs Shipped</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

const tintMap = {
  blue: 'from-primary-500/20 to-primary-400/10 border-primary-400/30 text-primary-200',
  amber: 'from-amber-500/20 to-orange-400/10 border-amber-400/30 text-amber-200',
}

const Badge = ({ icon: Icon, text, tint = 'blue' }) => (
  <span
    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border bg-gradient-to-r ${tintMap[tint]}`}
  >
    <Icon className="w-3.5 h-3.5" />
    {text}
  </span>
)

export default Hero
