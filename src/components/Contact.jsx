import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react'
import { SectionHeader } from './About'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'alishamathias05@gmail.com',
    href: 'mailto:alishamathias05@gmail.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 98211 58848',
    href: 'tel:+919821158848',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Mumbai, India',
    href: '#',
  },
]

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`)
    const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`)
    window.location.href = `mailto:alishamathias05@gmail.com?subject=${subject}&body=${body}`
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitStatus(null), 4000)
    }, 700)
  }

  return (
    <section id="contact" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-15 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(50% 60% at 50% 90%, rgba(79,124,255,0.14) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          num="07"
          tag="Get in Touch"
          title="Let's"
          highlight="connect"
          desc="Have a project, an opportunity, or just want to chat? My inbox is open."
          isInView={isInView}
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-ink-200 text-lg leading-relaxed">
              I'm currently open to{' '}
              <span className="text-primary-300 font-medium">Summer 2026 internships</span>{' '}
              and{' '}
              <span className="text-primary-300 font-medium">SDE / AI roles</span>. The
              fastest way to reach me is email or LinkedIn.
            </p>

            <div className="space-y-3">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="flex items-center gap-4 p-4 rounded-2xl glass hover:bg-white/10 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary-500 to-violet-500 text-white shadow-glow">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-ink-300">
                      {info.title}
                    </p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/alisha-mathias-85a44427b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0a66c2] hover:bg-[#0a66c2]/90 text-white font-semibold transition-colors text-sm"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/alisham30"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-white hover:bg-white/10 transition-colors text-sm font-semibold"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </motion.div>

          {/* Right */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="surface p-6 sm:p-8 space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-xs uppercase tracking-wider text-ink-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-primary-400/50 outline-none transition-all text-white placeholder-ink-400 text-sm"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs uppercase tracking-wider text-ink-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-primary-400/50 outline-none transition-all text-white placeholder-ink-400 text-sm"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-wider text-ink-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-primary-400/50 outline-none transition-all text-white placeholder-ink-400 text-sm resize-none"
                placeholder="What would you like to talk about?"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-violet-500 text-white font-semibold shadow-glow hover:shadow-glow-lg transition-shadow disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Message
                </>
              )}
            </motion.button>

            {submitStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-emerald-300 text-sm text-center"
              >
                ✓ Your mail client should be opening — I'll get back to you soon.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
