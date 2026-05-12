import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Trophy, Award, BadgeCheck, Medal, MapPin } from 'lucide-react'
import { SectionHeader } from './About'

const featured = {
  title: '1st Runner-Up',
  subtitle: 'HERE Mumbai Geospatial Student Hackathon 2026',
  description:
    'Built a stale-map detection & update pipeline cross-referencing OSM data with live signals from official datasets, business sites, and delivery platforms. Recognized among the top teams nationally.',
  date: '2026',
  image: '/here-win.jpg',
  accent: 'from-amber-400 via-orange-400 to-rose-500',
}

const items = [
  {
    icon: BadgeCheck,
    title: 'IBM Data Engineering — Professional Certificate',
    subtitle: 'Coursera · IBM',
    description:
      'Full professional certificate — ETL pipelines, relational and NoSQL databases, big data, data warehouses, and orchestration.',
    date: '2025',
    certificate: 'https://www.coursera.org/account/accomplishments/professional-cert/',
    accent: 'from-primary-400 to-cyan-400',
  },
  {
    icon: Award,
    title: 'AWS Academy — Cloud Architecting',
    subtitle: 'Amazon Web Services',
    description:
      'Hands-on training in cloud infrastructure design using EC2, S3, IAM, and VPC — deployment, access control, and high-availability architectures.',
    date: '2025',
    certificate: 'https://www.credly.com/users/alisha-mathias',
    accent: 'from-primary-500 to-violet-500',
  },
  {
    icon: Award,
    title: 'AWS Academy — Cloud Foundations',
    subtitle: 'Amazon Web Services',
    description:
      'Foundational AWS training covering global infrastructure, core services, pricing, and the AWS Well-Architected Framework.',
    date: '2025',
    certificate: 'https://www.credly.com/users/alisha-mathias',
    accent: 'from-cyan-400 to-primary-500',
  },
  {
    icon: Medal,
    title: 'Winner — CodeCraft UI/UX Hackathon',
    subtitle: 'Frontend hackathon · 500+ participants',
    description:
      'Won the CodeCraft UI/UX Frontend Hackathon for design and front-end execution.',
    date: '2025',
    certificate: null,
    accent: 'from-yellow-400 to-orange-500',
    image: '/win.jpg',
  },
  {
    icon: Award,
    title: 'AWS Solutions Architecture — Virtual Experience',
    subtitle: 'Forage · AWS',
    description:
      'Designed scalable hosting architectures and cloud solutions through AWS-authored simulations.',
    date: 'Sep 2025',
    certificate:
      'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_ZXp32rCsAvyKinw6C_1757245564745_completion_certificate.pdf',
    accent: 'from-primary-500 to-cyan-500',
  },
  {
    icon: Award,
    title: 'Data Visualization — Tata Virtual Experience',
    subtitle: 'Forage · Tata',
    description:
      'Empowering business with effective insights — framing scenarios, choosing visuals, and communicating findings.',
    date: 'Aug 2025',
    certificate:
      'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_ZXp32rCsAvyKinw6C_1756661395483_completion_certificate.pdf',
    accent: 'from-emerald-400 to-teal-500',
  },
]

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="achievements" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-15 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(50% 50% at 80% 20%, rgba(245,158,11,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          num="05"
          tag="Achievements"
          title="Awards &"
          highlight="recognition"
          desc="Wins, certifications, and milestones along the way."
          isInView={isInView}
        />

        {/* Featured: HERE Geospatial Win */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="surface surface-hover relative overflow-hidden mb-7"
        >
          <div className={`absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none bg-gradient-to-br ${featured.accent}`} />
          <div className="relative grid lg:grid-cols-12 gap-0">
            {/* Image */}
            <div className="lg:col-span-5 relative overflow-hidden lg:rounded-l-3xl">
              <div className="aspect-[4/5] lg:aspect-auto lg:h-full relative">
                <img
                  src={featured.image}
                  alt="HERE Geospatial Hackathon Win"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent lg:bg-gradient-to-r" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-strong">
                  <Trophy className="w-3.5 h-3.5 text-amber-300" />
                  <span className="text-xs text-amber-100 font-medium">
                    Hackathon Win
                  </span>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs uppercase tracking-wider border border-amber-300/40 bg-amber-300/10 text-amber-200`}>
                  Featured Award
                </span>
                <span className="text-xs text-ink-300 inline-flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Mumbai · 2026
                </span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
                {featured.title}
              </h3>
              <p className="text-primary-300 font-medium mt-2 text-lg">
                {featured.subtitle}
              </p>
              <p className="text-ink-200 leading-relaxed mt-4">
                {featured.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Grid of remaining items */}
        <div className="grid md:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="surface surface-hover p-6 group"
            >
              <div className="flex gap-4">
                <div
                  className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center text-white shadow-glow`}
                >
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="font-display text-lg font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                    <span className="shrink-0 text-[11px] px-2.5 py-0.5 rounded-full border border-white/10 bg-white/5 text-ink-200">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-primary-300 text-sm font-medium mb-2">
                    {item.subtitle}
                  </p>
                  <p className="text-ink-300 text-sm leading-relaxed mb-3">
                    {item.description}
                  </p>
                  {item.certificate && (
                    <a
                      href={item.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-primary-300 hover:text-primary-100 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      View Certificate
                    </a>
                  )}
                </div>
                {item.image && (
                  <div className="hidden sm:block shrink-0 w-20 h-20 rounded-xl overflow-hidden border border-white/10">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
