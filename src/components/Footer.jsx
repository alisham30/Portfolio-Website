import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/alisham30', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/alisha-mathias-85a44427b', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:alishamathias05@gmail.com', label: 'Email' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/10 overflow-hidden">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 100%, rgba(79,124,255,0.10) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="font-display text-2xl font-bold text-gradient mb-3">
              Alisha Mathias
            </h3>
            <p className="text-ink-300 leading-relaxed text-sm">
              Software &amp; AI Developer · B.Tech CSE (Data Science) at DJ Sanghvi.
              Building production systems with FastAPI, Next.js, and AWS.
            </p>
            <div className="flex gap-2 mt-5">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -2 }}
                  className="p-3 rounded-full glass text-ink-200 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Navigate
            </h4>
            <ul className="space-y-1.5">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-ink-300 hover:text-primary-300 text-sm transition-colors"
                  >
                    {l.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Get in Touch
            </h4>
            <p className="text-ink-300 text-sm">Mumbai, India</p>
            <a
              href="mailto:alishamathias05@gmail.com"
              className="block text-ink-300 hover:text-primary-300 text-sm transition-colors"
            >
              alishamathias05@gmail.com
            </a>
            <a
              href="tel:+919821158848"
              className="block text-ink-300 hover:text-primary-300 text-sm transition-colors"
            >
              +91 98211 58848
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-ink-400 text-xs">
            © {currentYear} Alisha Mathias · All rights reserved.
          </p>
          <p className="text-ink-400 text-xs inline-flex items-center gap-1.5">
            Designed &amp; built with <Heart className="w-3 h-3 text-rose-400 fill-rose-400" /> using React + Tailwind.
          </p>
        </div>
      </div>

      <motion.button
        onClick={() => scrollTo('#home')}
        className="fixed bottom-6 right-6 p-3.5 rounded-full bg-gradient-to-br from-primary-500 to-violet-500 text-white shadow-glow hover:shadow-glow-lg z-40"
        whileHover={{ y: -2, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  )
}

export default Footer
