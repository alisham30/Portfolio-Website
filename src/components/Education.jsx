import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, BookOpen, Calendar, MapPin } from 'lucide-react'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const educationData = [
    {
      institution: "Dwarkadas J. Sanghvi College of Engineering",
      degree: "B.Tech in Computer Science & Engineering (Data Science)",
      duration: "2021 - 2025",
      location: "Mumbai, India",
      gpa: "9.165/10",
      status: "current",
      color: "from-blue-500 to-cyan-500",
      achievements: [
        "Specialized in Data Science and Analytics",
        "Strong foundation in Machine Learning and AI",
        "Active participant in coding competitions",
        "Member of Data Science club"
      ]
    },
    {
      institution: "St. Francis ICSE School",
      degree: "Higher Secondary School Certificate (HSC)",
      duration: "2019 - 2021",
      location: "Mumbai, India",
      gpa: "96.33%",
      status: "completed",
      color: "from-purple-500 to-pink-500",
      achievements: [
        "Outstanding academic performance",
        "Active in extracurricular activities",
        "Strong foundation in Mathematics and Science",
        "Leadership roles in school events"
      ]
    }
  ]

  return (
    <section id="education" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey and educational achievements that have shaped my foundation in technology.
          </p>
        </motion.div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
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
                  <GraduationCap className="w-8 h-8 text-purple-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {edu.institution}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    {edu.degree}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span><strong>GPA:</strong> {edu.gpa}</span>
                    <span><strong>Location:</strong> {edu.location}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      edu.status === 'current' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                    }`}>
                      {edu.status === 'current' ? 'Current' : 'Completed'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Stats */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: "9.165/10", label: "Current GPA" },
            { number: "96.33%", label: "HSC Score" },
            { number: "4", label: "Years of Study" },
            { number: "2", label: "Institutions" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl font-bold text-purple-500 dark:text-purple-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education
