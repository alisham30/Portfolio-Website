import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Code, Terminal, Server, Database, Cloud, GitBranch, BarChart3, Wrench,
} from 'lucide-react'
import { SectionHeader } from './About'

const categories = [
  {
    icon: Code,
    title: 'Software Development',
    accent: 'from-primary-500 to-violet-500',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Tailwind', 'REST APIs'],
  },
  {
    icon: Server,
    title: 'Backend & Systems',
    accent: 'from-primary-400 to-cyan-400',
    skills: ['FastAPI', 'Node.js', 'Express.js', 'WebSockets', 'Flask'],
  },
  {
    icon: BarChart3,
    title: 'Data Engineering',
    accent: 'from-teal-400 to-primary-500',
    skills: ['SQL', 'PySpark', 'ETL Pipelines', 'Snowflake', 'Hadoop', 'Pandas', 'NumPy'],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    accent: 'from-violet-500 to-primary-500',
    skills: ['AWS EC2', 'AWS S3', 'Secrets Manager', 'Docker', 'Jenkins', 'GitHub Actions', 'Nginx', 'Linux'],
  },
  {
    icon: Database,
    title: 'Databases',
    accent: 'from-primary-500 to-teal-400',
    skills: ['PostgreSQL', 'Supabase', 'MySQL', 'MongoDB', 'IBM Db2', 'Cassandra'],
  },
  {
    icon: Terminal,
    title: 'AI / ML',
    accent: 'from-violet-400 to-rose-400',
    skills: ['OpenAI GPT-4o', 'Gemini API', 'TensorFlow.js', 'scikit-learn', 'CLIP', 'InsightFace', 'OpenCV'],
  },
  {
    icon: Wrench,
    title: 'Tools & Platforms',
    accent: 'from-primary-400 to-violet-400',
    skills: ['Git / GitHub', 'Selenium', 'Vercel', 'Netlify', 'Render', 'Streamlit', 'Figma'],
  },
  {
    icon: GitBranch,
    title: 'Visualization & BI',
    accent: 'from-cyan-400 to-primary-500',
    skills: ['Matplotlib', 'Seaborn', 'Recharts', 'Power BI', 'Tableau', 'Excel'],
  },
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="skills" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-15 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(50% 60% at 10% 50%, rgba(139,92,246,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          num="04"
          tag="Tech Stack"
          title="Tools I"
          highlight="build with"
          desc="The technologies I reach for, organized by what they do."
          isInView={isInView}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="surface surface-hover p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br ${c.accent} text-white shadow-glow`}
                >
                  <c.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-white font-semibold">{c.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {c.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-ink-200 hover:border-primary-400/40 hover:text-white transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
