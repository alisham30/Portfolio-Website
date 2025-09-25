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
                  , passionate about building scalable applications and data-driven solutions. My core skills span full-stack web development with the MERN stack (MongoDB, Express.js, React, Node.js) and data engineering, where I have worked with PySpark, DuckDB, SQL, Docker, and Streamlit to design efficient data pipelines and analytics dashboards.
                </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              On the development side, I have built projects like ShopEasy, a full-stack e-commerce platform, and Budgetix, an AI-powered financial planner with Supabase integration. On the data side, I developed Nifty Stock Analysis, a Dockerized PySpark pipeline that processes NIFTY50 stock data, stores results in Parquet/CSV, and visualizes insights through an interactive dashboard.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Alongside my technical expertise, I bring strong problem-solving, teamwork, and analytical thinking skills, which help me adapt quickly to new challenges. I am eager to apply my combined knowledge of web development and data engineering in real-world projects, while continuously learning industry best practices to grow into a versatile engineer.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
