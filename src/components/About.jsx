import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })


  return (
    <section id="about" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  I am a third-year B.Tech Computer Science (Data Science) student at{' '}
                  <span className="text-purple-500 dark:text-purple-400 font-semibold">
                    Dwarkadas J. Sanghvi College of Engineering
                  </span>{' '}
                  with strong skills in full-stack web development and a passion for building scalable, 
                  user-friendly applications.
                </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              I have hands-on experience with the MERN stack (MongoDB, Express.js, React, Node.js), 
              along with proficiency in Python, Java, SQL, and UI/UX design using Figma. Through 
              projects like ShopEasy and Budgetix, I have gained practical experience in front-end 
              design, back-end APIs, authentication, database management, and deployment workflows.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Alongside technical skills, I bring strong teamwork, analytical thinking, and 
              problem-solving abilities, which help me adapt quickly to new challenges.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
