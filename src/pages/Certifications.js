import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaTrophy, FaAward, FaGraduationCap, FaCheckCircle } from 'react-icons/fa';

const certifications = [
  {
    category: 'Technical',
    icon: <FaCertificate />,
    color: 'from-blue-500 to-purple-600',
    bgColor: 'from-blue-500/10 to-purple-600/10',
    borderColor: 'border-blue-500/20',
    items: [
      {
        name: 'Android Certification',
        description: 'Comprehensive Android development certification covering app architecture, UI/UX design, and platform-specific development best practices.'
      },
      {
        name: 'Master React.js with AI: From Basics to Advanced Development',
        description: 'Advanced React.js certification focusing on modern development patterns, AI integration, and cutting-edge frontend technologies.'
      },
      {
        name: 'The Ultimate Redux Course - [LATEST Redux-toolkit]',
        description: 'Comprehensive Redux framework certification covering Redux Toolkit, state management best practices, and modern Redux development patterns.'
      }
    ]
  },
  {
    category: 'Management',
    icon: <FaGraduationCap />,
    color: 'from-green-500 to-teal-600',
    bgColor: 'from-green-500/10 to-teal-600/10',
    borderColor: 'border-green-500/20',
    items: [
      {
        name: 'Google Project Management',
        description: 'Professional project management certification from Google, covering agile methodologies, team leadership, and project delivery strategies.'
      },
      {
        name: 'Dale Carnegie Certification',
        description: 'Leadership and communication certification focusing on effective team management, public speaking, and professional development.'
      },
      {
        name: 'Do Agile Be Agile',
        description: 'Comprehensive agile methodology certification covering Scrum, Kanban, and lean development practices for modern software teams.'
      }
    ]
  },
  {
    category: 'Awards',
    icon: <FaTrophy />,
    color: 'from-yellow-500 to-orange-600',
    bgColor: 'from-yellow-500/10 to-orange-600/10',
    borderColor: 'border-yellow-500/20',
    items: [
      {
        name: 'Xebia Gems Award',
        description: 'Prestigious recognition for optimization and delivery excellence, awarded for outstanding performance in project delivery and technical innovation.'
      }
    ]
  },
  {
    category: 'Continuous Learning',
    icon: <FaAward />,
    color: 'from-purple-500 to-pink-600',
    bgColor: 'from-purple-500/10 to-pink-600/10',
    borderColor: 'border-purple-500/20',
    items: [
      {
        name: 'Professional Development',
        description: 'I believe in continuous learning and professional development. These certifications represent my commitment to staying current with industry best practices and expanding my skill set.'
      }
    ]
  }
];

function CertificationSection({ cert, index }) {
  const getItemLabel = (category, count) => {
    if (category === 'Awards') {
      return count === 1 ? 'award' : 'awards';
    } else if (category === 'Continuous Learning') {
      return 'commitment';
    } else {
      return count === 1 ? 'certification' : 'certifications';
    }
  };

  return (
    <motion.div
      key={index}
      className="relative group mb-8 sm:mb-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className={`bg-gradient-to-br ${cert.bgColor} backdrop-blur-sm border ${cert.borderColor} rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:border-blue-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 relative overflow-hidden`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Header */}
        <div className="relative z-10 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
            <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${cert.color} rounded-xl sm:rounded-2xl flex items-center justify-center text-white text-2xl sm:text-3xl lg:text-4xl shadow-xl group-hover:scale-110 transition-transform duration-300`}>
              {cert.icon}
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                {cert.category}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg mt-1 sm:mt-2 font-medium">{cert.items.length} {getItemLabel(cert.category, cert.items.length)}</p>
            </div>
          </div>
        </div>

        {/* Items - Responsive Grid Layout */}
        <div className="relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {cert.items.map((item, i) => (
              <motion.div 
                key={i} 
                className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs sm:text-sm flex-shrink-0 mt-1">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <motion.div
      className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen py-10 px-4 sm:px-8 mt-0 sm:mt-0 pt-16 sm:pt-32 pb-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-5 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-700 bg-clip-text text-transparent drop-shadow-lg">
            Certifications
          </h1>
          <div className="flex justify-center mb-4">
            <span className="block w-16 sm:w-24 h-1 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-700 opacity-70"></span>
          </div>
          <p className="text-gray-300 text-base xs:text-lg sm:text-xl max-w-xl mx-auto leading-relaxed px-2 sm:px-0 font-medium">
            Recognized achievements and <span className='text-yellow-400 font-semibold'>certifications</span> that highlight my commitment to <span className='text-orange-400 font-semibold'>professional growth</span> and expertise.
          </p>
        </motion.div>

        {/* Certifications Sections - Vertical Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {certifications.map((cert, index) => (
            <CertificationSection key={index} cert={cert} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12 sm:mt-16 lg:mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Ready to Collaborate?</h3>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              Let's work together to bring your ideas to life with cutting-edge technology and proven expertise.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
