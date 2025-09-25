import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink, ArrowRight } from 'lucide-react'
import VariableProximity from './VariableProximity'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      title: "NIFTY Stock Analysis",
      subtitle: "PySpark + Docker",
      description: "End-to-end data engineering project analyzing NIFTY50 stock data. Computes shock days (>2% drop) and bounce-back rates. Built with PySpark inside Docker, results saved in Parquet/CSV format.",
      technologies: ["PySpark", "Docker", "Jupyter", "Parquet", "Python"],
      github: "https://github.com/alisham30/nifty-stock-analysis",
      demo: "#",
      color: "from-blue-500 to-cyan-500"
    },
        {
          title: "Budgetix",
          subtitle: "AI Budgeting Assistant",
          description: "A collaborative AI-integrated budget manager project featuring real-time dashboards, automatic expense classification, and personalized savings plans. Built with modern web technologies and AI integration.",
          technologies: ["React", "Node.js", "JavaScript", "AI/ML", "Database"],
          github: "https://github.com/DEEP-222-N/Budgetix",
          demo: "#",
          color: "from-purple-500 to-pink-500"
        },
    {
      title: "ShopEasy",
      subtitle: "Full Stack MERN E-Commerce App",
      description: "A collaborative full-stack e-commerce platform built with MERN stack featuring user authentication, product management, shopping cart, and payment integration. Live demo available.",
      technologies: ["JavaScript", "CSS", "MERN Stack", "E-commerce", "Full-Stack"],
      github: "https://github.com/DEEP-222-N/shopEazy",
      demo: "https://shop-eazy.onrender.com/",
      color: "from-green-500 to-teal-500"
    },
        {
          title: "HealWell Hospital Website",
          subtitle: "Frontend Website",
          description: "A frontend website designed to increase the online presence of a prestigious hospital HealWell. Features modern design, responsive layout, and interactive elements.",
          technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "Frontend"],
          github: "https://github.com/alisham30/HealWell-Hospital",
          demo: "https://healwellhospital.netlify.app/",
          color: "from-orange-500 to-red-500"
        },
    {
      title: "Constructify",
      subtitle: "Figma Prototype",
      description: "A Figma prototype designed to connect builders, designers, and suppliers in a single collaboration platform. It includes 10+ wireframes and an optimized onboarding experience.",
      technologies: ["Figma", "UI/UX Design", "Prototyping", "User Research"],
      github: "#",
      demo: "#",
      color: "from-indigo-500 to-purple-500"
    }
  ]

  return (
    <section id="projects" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in full-stack development, data science, and UI/UX design.
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                {/* Project Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.color}`}></div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {project.subtitle}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 lg:flex-col">
                  {project.github !== '#' && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </motion.a>
                  )}
                  {project.demo !== '#' && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/alisham30"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-white dark:bg-gray-800 border-2 border-purple-500 text-purple-500 dark:text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white dark:hover:bg-purple-500 dark:hover:text-white transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            <VariableProximity
              label="View All Projects"
              containerRef={ref}
              radius={100}
              falloff="linear"
              fromFontVariationSettings="'wght' 600, 'opsz' 12"
              toFontVariationSettings="'wght' 900, 'opsz' 18"
              className="text-purple-500 dark:text-purple-400"
            />
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects