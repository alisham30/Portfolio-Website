import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Download, ArrowDown } from 'lucide-react'
import BlurText from './BlurText'
import MetaBalls from './MetaBalls'
import VariableProximity from './VariableProximity'

const Hero = () => {
  const [particles, setParticles] = useState([])
  const containerRef = useRef(null)

  useEffect(() => {
    // Create floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 2,
    }))
    setParticles(newParticles)
  }, [])

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Alisha_s_Resume.pdf'
    link.download = 'Alisha_Mathias_Resume.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleAnimationComplete = () => {
    console.log('Hero animation completed!');
  };

  return (
        <section 
          id="home" 
          ref={containerRef}
          className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        >
      {/* MetaBalls Background */}
      <MetaBalls
        color="#8b5cf6"
        cursorBallColor="#ec4899"
        cursorBallSize={3}
        ballCount={15}
        speed={0.5}
        enableMouseInteraction={true}
      />
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle absolute"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 dark:from-purple-500/20 dark:via-pink-500/20 dark:to-cyan-500/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-20">
        {/* Left Side - Photo */}
        <motion.div 
          className="flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <motion.div 
              className="w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-500 to-pink-500 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/final.jpg" 
                alt="Alisha Mathias" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div 
          className="text-center lg:text-left space-y-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main Greeting */}
          <div className="mb-8">
            <VariableProximity
              label="Alisha Mathias Portfolio"
              containerRef={containerRef}
              radius={120}
              falloff="gaussian"
              fromFontVariationSettings="'wght' 700, 'opsz' 16"
              toFontVariationSettings="'wght' 1000, 'opsz' 32"
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white"
            />
          </div>

          {/* Subheading */}
          <BlurText
            text="Third-year B.Tech CSE (Data Science) Student | Full-Stack Developer & Data Engineer"
            delay={300}
            animateBy="words"
            direction="bottom"
            stepDuration={0.8}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-4"
          />

          {/* Description */}
          <BlurText
            text="Passionate about building scalable, user-friendly applications with the MERN stack and modern web technologies."
            delay={200}
            animateBy="words"
            direction="top"
            stepDuration={0.6}
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed mb-6"
          />

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
              <motion.button
                onClick={handleDownloadResume}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                <VariableProximity
                  label="Download Resume"
                  containerRef={containerRef}
                  radius={80}
                  falloff="exponential"
                  fromFontVariationSettings="'wght' 600, 'opsz' 12"
                  toFontVariationSettings="'wght' 900, 'opsz' 24"
                  className="text-white"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </motion.button>

              <motion.button
                onClick={scrollToContact}
                className="px-8 py-4 border-2 border-purple-500 text-purple-500 dark:text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white dark:hover:bg-purple-500 dark:hover:text-white transform hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <VariableProximity
                  label="Get in Touch"
                  containerRef={containerRef}
                  radius={60}
                  falloff="gaussian"
                  fromFontVariationSettings="'wght' 600, 'opsz' 12"
                  toFontVariationSettings="'wght' 800, 'opsz' 20"
                  className="text-purple-500 dark:text-purple-400"
                />
              </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center cursor-pointer" onClick={scrollToContact}>
          <motion.div 
            className="w-1 h-3 bg-purple-500 rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
