import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github } from 'lucide-react'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Education', href: '#education' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'achievements', 'education', 'contact']
      const y = window.scrollY + 120
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= y) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.button
            onClick={() => scrollTo('#home')}
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-3"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-violet-500 text-white font-display font-bold text-sm shadow-glow">
              AM
            </span>
            <span className="hidden sm:flex flex-col leading-tight text-left">
              <span className="font-display font-semibold text-white">Alisha Mathias</span>
              <span className="text-[11px] text-ink-300 uppercase tracking-[0.2em]">
                Software &amp; AI Developer
              </span>
            </span>
          </motion.button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.href)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-ink-300 hover:text-white'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-gradient-to-r from-primary-400 to-violet-400 rounded-full"
                    />
                  )}
                </button>
              )
            })}
            <a
              href="https://github.com/alisham30"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white hover:bg-white/10 transition-colors text-sm font-medium"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="p-2 rounded-xl glass text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden glass-strong border-b border-white/10"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.href)}
                  className="block w-full text-left px-4 py-2.5 rounded-xl text-ink-200 hover:text-white hover:bg-white/10 font-medium"
                >
                  {item.name}
                </button>
              ))}
              <a
                href="https://github.com/alisham30"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full px-4 py-2.5 rounded-xl glass text-white hover:bg-white/10 transition-colors text-sm font-medium"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
