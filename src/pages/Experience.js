import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaTools, FaLock, FaCalendarAlt, FaCode, FaBuilding, FaUserTie } from 'react-icons/fa';
import { SiJest, SiFirebase, SiAndroid, SiIos } from 'react-icons/si';

const experiences = [
  {
    company: 'Xebia',
    title: 'Lead Consultant',
    duration: 'Mar 2022 – July 2025',
    tech: [<FaReact />, <FaTools />, <SiJest />, <SiAndroid />, <SiIos />],
    description: [
      'Managed end-to-end delivery of complex projects focusing on timely, budget-conscious execution in Kotak Mobile banking app with React Native.',
      'Built reusable library-based components and implemented features like data visualisation, QR scanning, and animations with comprehensive unit tests.'
    ],
    highlights: ['Project Management', 'React Native', 'Team Leadership', 'Unit Testing'],
    color: 'from-violet-500 to-purple-600'
  },
  {
    company: 'Quinnox',
    title: 'Senior Consultant',
    duration: 'Nov 2021 – Feb 2022',
    tech: [<FaReact />, <SiJest />, <SiAndroid />, <SiIos />],
    description: [
      'Developed reusable components and web pages in React using atomic folder structure and integrated Storybook.',
      'Worked on a Europe-based Neo Banking app and added features like biometric authentication, animations, and unit test cases using Jest.'
    ],
    highlights: ['React', 'Storybook', 'Biometric Auth', 'Jest Testing'],
    color: 'from-blue-500 via-blue-400 to-yellow-300'
  },
  {
    company: 'GEP',
    title: 'Software Engineer',
    duration: 'Dec 2019 – Nov 2020',
    tech: [<FaReact />, <SiFirebase />, <FaTools />, <SiAndroid />, <SiIos />],
    description: [
      'Worked on Navigation and Voice over search module in Nexxe App.',
      'Added Code Push, Firebase modules, Globalisation, and other features in Smart GEP App.',
      'Built Voice Bot Assistance App.',
      'Implemented CI/CD for Apps.'
    ],
    highlights: ['React Native', 'Firebase', 'CI/CD', 'Voice Search'],
    color: 'from-sky-400 to-blue-500'
  },
  {
    company: 'Nium',
    title: 'Software Engineer',
    duration: 'Dec 2017 – Dec 2019',
    tech: [<FaLock />, <FaTools />, <SiAndroid />, <SiIos />],
    description: [
      'Built secure fintech applications with PCI DSS compliance from scratch.',
      'Implemented SSL Pinning, RSA Encryption, and collaborated with backend teams to ensure full data security.'
    ],
    highlights: ['Fintech', 'Security', 'PCI DSS', 'Encryption'],
    color: 'from-white to-gray-800'
  },
  {
    company: 'Prodio DesignWorks',
    title: 'App Developer',
    duration: 'July 2016 – Nov 2017',
    tech: [<FaReact />, <FaTools />, <SiJest />, <SiAndroid />, <SiIos />],
    description: [
      'Designed and developed hybrid apps for logistics and travel sectors using React Native and Android SDK.',
      'Integrated APIs for maps, payments, and user auth across iOS and Android platforms.'
    ],
    highlights: ['React Native', 'Android SDK', 'API Integration', 'Cross-platform'],
    color: 'from-yellow-600 to-amber-700'
  }
];

function ExperienceCard({ exp, index }) {
  return (
    <motion.div
      key={index}
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-500/10 group-hover:-translate-y-2">
        {/* Header with Gradient Border */}
        <div className="relative mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl tracking-wider shadow-lg border border-gray-200/50`} style={{ 
                color: exp.color === 'from-violet-500 to-purple-600' ? '#8b5cf6' : exp.color === 'from-blue-500 via-blue-400 to-yellow-300' ? '#3b82f6' : exp.color === 'from-sky-400 to-blue-500' ? '#0ea5e9' : exp.color === 'from-white to-gray-800' ? '#374151' : '#d97706',
                background: exp.color === 'from-violet-500 to-purple-600' ? '#ede9fe' : exp.color === 'from-blue-500 via-blue-400 to-yellow-300' ? '#dbeafe' : exp.color === 'from-sky-400 to-blue-500' ? '#e0f2fe' : exp.color === 'from-white to-gray-800' ? '#f3f4f6' : '#fef3c7'
              }}>
                {exp.company.charAt(0)}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-gray-200 transition-colors">
                  {exp.company}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <FaUserTie className="text-gray-400 text-sm" />
                  <p className="text-gray-300 font-medium">{exp.title}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm bg-gray-800/50 px-3 py-2 rounded-full">
              <FaCalendarAlt className="text-blue-400" />
              <span className="font-medium">{exp.duration}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4 mb-6">
          {exp.description.map((desc, i) => (
            <div key={i} className="flex gap-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
            <FaCode className="text-blue-400" />
            Key Highlights
          </h4>
          <div className="flex flex-wrap gap-2">
            {exp.highlights.map((highlight, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-gray-800/50 border border-gray-600/30 rounded-full text-xs text-gray-300 font-medium hover:bg-gray-700/50 transition-colors"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
          <div className="flex gap-4 text-2xl">
            {exp.tech.map((icon, i) => (
              <span key={i} className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-200">
                {icon}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium bg-gray-800/30 px-3 py-1 rounded-full">
            <FaBuilding className="text-gray-400" />
            <span>{exp.duration.split('–')[1].trim()}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <motion.div
      className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen py-12 px-4 sm:px-8 mt-0 sm:mt-0 pt-16 sm:pt-32 pb-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-5 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-700 bg-clip-text text-transparent drop-shadow-lg">
            Professional Experience
          </h1>
          <div className="flex justify-center mb-4">
            <span className="block w-16 sm:w-24 h-1 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-blue-700 opacity-70"></span>
          </div>
          <p className="text-gray-300 text-base xs:text-lg sm:text-xl max-w-xl mx-auto leading-relaxed px-2 sm:px-0 font-medium">
            A comprehensive journey through my career in software development, showcasing expertise in <span className='text-blue-400 font-semibold'>React</span>, <span className='text-purple-400 font-semibold'>React Native</span>, and modern web technologies across diverse industries.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
