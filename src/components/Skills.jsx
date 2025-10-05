import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skillCategories = [
    {
      title: "Programming",
      skills: ["C", "Java", "Python", "JavaScript"]
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "Tailwind CSS", "React.js", "Figma (UI/UX)"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Flask"]
    },
    {
      title: "Databases/Storage",
      skills: ["MySQL", "PostgreSQL", "IBM Db2", "SQL", "MongoDB", "Cassandra", "Supabase", "Cloudant"]
    },
    {
      title: "Data Eng/Big Data",
      skills: ["PySpark", " Spark ", "Hadoop", "ETL", "Data Pipelines",  "Jupyter", "Docker"]
    },
    {
      title: "Data Science",
      skills: ["Data Analysis", "EDA", "Feature Engineering", "Predictive Modeling", "Machine Learning"]
    },
    {
      title: "Visualization/BI",
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Power BI", "Tableau", "Excel"]
    },
    {
      title: "Tools/Platforms",
      skills: ["Git/GitHub", "Netlify", "Streamlit", "AWS"]
    }
  ]

  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise across different domains.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="px-3 py-2 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-100 dark:border-purple-800/30"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(139, 92, 246, 0.1)" }}
                    >
                      <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills
