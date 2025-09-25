import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink } from 'lucide-react'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const achievements = [
    {
      title: "Winner",
      subtitle: "CodeCraft UI/UX Frontend Hackathon",
      description: "Won the CodeCraft UI/UX Frontend Hackathon among 500+ participants, showcasing exceptional design and development skills",
      date: "January 2025",
      certificate: null,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Solutions Architecture",
      subtitle: "AWS Virtual Experience Program",
      description: "Completed AWS Solutions Architecture virtual internship, designing scalable hosting architectures and cloud solutions",
      date: "September 2025",
      certificate: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_ZXp32rCsAvyKinw6C_1757245564745_completion_certificate.pdf",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data Visualization",
      subtitle: "Tata Virtual Experience Program",
      description: "Empowering Business with Effective Insights - completed practical tasks in framing business scenarios, choosing visuals, and communicating insights",
      date: "August 2025",
      certificate: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_ZXp32rCsAvyKinw6C_1756661395483_completion_certificate.pdf",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "AWS Cloud Practitioner",
      subtitle: "Certified Cloud Computing",
      description: "Certified in foundational cloud computing concepts and AWS services",
      date: "2024",
      certificate: "https://media.licdn.com/dms/image/v2/D4D2DAQE48BIwG_wJXA/profile-treasury-document-cover-images_800/B4DZfMYA90HMBA-/0/1751480541668?e=1759431600&v=beta&t=Eg0Ay96IHe3FjfG65NH-Xiu5YH-4nUb2bLqPDJt67mg",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Figma UI/UX Design",
      subtitle: "Zero to Mastery",
      description: "Certified in Figma UI/UX Design with 10+ interactive prototypes created",
      date: "2024",
      certificate: null,
      color: "from-indigo-500 to-purple-500"
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

        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Gradient Background Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Special styling for the winner card */}
              {achievement.title === "Winner" && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
              )}
              
              <div className="relative p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                          {achievement.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-base font-semibold mb-3">
                          {achievement.subtitle}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full font-medium">
                        {achievement.date}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-4">
                      {achievement.description}
                      {/* Special content for the winner - inline text */}
                      {achievement.title === "Winner" && (
                        <span className="block mt-2 text-sm font-medium text-yellow-600 dark:text-yellow-400">
                          Among 500+ participants
                        </span>
                      )}
                    </p>
                    
                    {achievement.certificate && (
                      <motion.a
                        href={achievement.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                        View Certificate
                      </motion.a>
                    )}
                  </div>
                  
                  {/* Special content for the winner - small image on the side */}
                  {achievement.title === "Winner" && (
                    <div className="flex-shrink-0">
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src="/win.jpg" 
                          alt="CodeCraft UI/UX Hackathon Win"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      </div>
                    </div>
                  )}
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