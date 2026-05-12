import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FIRST = 'Alisha'
const LAST = 'Mathias'

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2200 // total visible
    const tickEvery = 28
    const max = 100
    let elapsed = 0
    const tick = setInterval(() => {
      elapsed += tickEvery
      const p = Math.min(1, elapsed / 1800)
      const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
      setCount(Math.round(eased * max))
      if (p >= 1) clearInterval(tick)
    }, tickEvery)

    const exit = setTimeout(() => setIsVisible(false), duration)

    // Body scroll lock while loading
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      clearInterval(tick)
      clearTimeout(exit)
      document.body.style.overflow = prev
    }
  }, [])

  const lettersFromLeft = (text, baseDelay) =>
    text.split('').map((c, i) => (
      <motion.span
        key={`${text}-${i}`}
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={{
          delay: baseDelay + i * 0.05,
          duration: 0.7,
          ease: [0.7, 0, 0.2, 1],
        }}
        className="inline-block"
      >
        {c}
      </motion.span>
    ))

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950 overflow-hidden"
        >
          {/* Aurora wash */}
          <div className="aurora opacity-50" />
          <div className="absolute inset-0 dot-bg opacity-20 pointer-events-none" />

          {/* Top bar: index + status */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="absolute top-6 left-6 right-6 flex items-center justify-between text-xs text-ink-300 tracking-[0.3em] uppercase"
          >
            <span>Portfolio · MMXXVI</span>
            <span className="hidden sm:inline">Mumbai · India</span>
          </motion.div>

          {/* Bottom bar: counter + bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-6"
          >
            <span className="font-fraunces italic text-5xl sm:text-6xl text-white leading-none tabular-nums">
              {String(count).padStart(2, '0')}
              <span className="text-ink-400 text-2xl ml-1">/100</span>
            </span>
            <div className="flex-1 max-w-md">
              <div className="h-px w-full bg-white/10 origin-left">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: count / 100 }}
                  transition={{ ease: 'easeOut', duration: 0.12 }}
                  className="h-px bg-gradient-to-r from-primary-400 via-violet-400 to-teal-300 origin-left"
                />
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-ink-400">
                Loading experience…
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <div className="relative text-center px-6">
            <div className="overflow-hidden">
              <h1 className="font-fraunces italic font-light text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] leading-[0.9] text-white">
                {lettersFromLeft(FIRST, 0.25)}
              </h1>
            </div>
            <div className="overflow-hidden mt-1">
              <h1 className="font-fraunces italic font-light text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] leading-[0.9] text-gradient">
                {lettersFromLeft(LAST, 0.55)}
              </h1>
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.9, ease: [0.7, 0, 0.2, 1] }}
              className="h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent mt-6 origin-left"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="mt-4 text-sm sm:text-base tracking-[0.4em] uppercase text-ink-200"
            >
              Software &amp; AI Developer
            </motion.p>
          </div>

          {/* Edge accent */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-primary-400/40 to-transparent origin-top"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
            className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-violet-400/40 to-transparent origin-top"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
