import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Award, Star } from 'lucide-react'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const achievements = [
    {
      icon: Trophy,
      title: "1st Runner-Up",
      subtitle: "CodeCraft UI/UX Hackathon",
      description: "Achieved 1st runner-up position among 30+ competing teams in the CodeCraft UI/UX Hackathon",
      date: "2024"
    },
    {
      icon: Award,
      title: "Virtual Forage Internships",
      subtitle: "Tata, AWS, Electronic Arts",
      description: "Completed internships at Tata (Data Visualization), AWS (Solutions Architecture), and Electronic Arts (Software Engineering)",
      date: "2023-2024"
    },
    {
      icon: Star,
      title: "AWS Cloud Practitioner",
      subtitle: "Certified Cloud Computing",
      description: "Certified in foundational cloud computing concepts and AWS services",
      date: "2024"
    },
    {
      icon: Star,
      title: "Figma UI/UX Design",
      subtitle: "Zero to Mastery",
      description: "Certified in Figma UI/UX Design with 10+ interactive prototypes created",
      date: "2024"
    }
  ]

  return (
    <section id="certifications" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recognition and certifications that showcase my commitment to continuous learning and excellence.
          </p>
        </motion.div>

        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <achievement.icon className="w-8 h-8 text-purple-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {achievement.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {achievement.date}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    {achievement.subtitle}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Certifications