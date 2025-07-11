import React from 'react';
import { motion } from 'framer-motion';
import {
  SiRedux, SiTypescript, SiFirebase, SiPostman,
  SiJest, SiTailwindcss, SiVisualstudiocode
} from 'react-icons/si';
import {
  FaReact, FaAndroid, FaApple, FaJs, FaGitAlt,
  FaCodeBranch, FaTools, FaFingerprint, FaLock
} from 'react-icons/fa';

const skills = [
  { name: 'React', icon: <FaReact className="text-blue-400" /> },
  { name: 'React Native', icon: <FaReact className="text-purple-400" /> },
  { name: 'Redux', icon: <SiRedux className="text-purple-300" /> },
  { name: 'Redux Toolkit', icon: <SiRedux className="text-indigo-400" /> },
  { name: 'Context API', icon: <FaCodeBranch className="text-pink-300" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
  { name: 'Android', icon: <FaAndroid className="text-green-400" /> },
  { name: 'iOS', icon: <FaApple className="text-gray-300" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-300" /> },
  { name: 'CodePush', icon: <FaTools className="text-teal-300" /> },
  { name: 'React Navigation', icon: <FaReact className="text-blue-200" /> },
  { name: 'REST API', icon: <FaCodeBranch className="text-gray-400" /> },
  { name: 'Jest Testing', icon: <SiJest className="text-red-400" /> },
  { name: 'CI/CD', icon: <FaTools className="text-green-300" /> },
  { name: 'Biometric Auth', icon: <FaFingerprint className="text-red-300" /> },
  { name: 'SSL Pinning', icon: <FaLock className="text-blue-300" /> },
  { name: 'RSA Encryption', icon: <FaLock className="text-purple-200" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-300" /> },
  { name: 'VS Code', icon: <SiVisualstudiocode className="text-blue-300" /> },
];

function CircleSkill({ skill, index }) {
  const circleStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    margin: '0 auto',
  };

  const contentStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '20px 16px',
  };

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.5,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.1,
        transition: { duration: 0.3 }
      }}
    >
      <div 
        style={circleStyle}
        className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border-2 border-gray-600 hover:border-blue-400 transition-all duration-300 hover:bg-gray-700/90 hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-1"
      >
        <div style={contentStyle}>
          <div className="text-2xl sm:text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
            {skill.icon}
          </div>
          <div className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors duration-300 leading-tight">
            {skill.name}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <motion.div
      className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen py-10 px-4 sm:px-8 mt-0 sm:mt-0 pt-16 sm:pt-32 pb-28"
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
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-5 bg-gradient-to-r from-green-400 via-teal-400 to-green-700 bg-clip-text text-transparent drop-shadow-lg">
            Technical Skills
          </h1>
          <div className="flex justify-center mb-4">
            <span className="block w-16 sm:w-24 h-1 rounded-full bg-gradient-to-r from-green-400 via-teal-400 to-green-700 opacity-70"></span>
          </div>
          <p className="text-gray-300 text-base xs:text-lg sm:text-xl max-w-xl mx-auto leading-relaxed px-2 sm:px-0 font-medium">
            A snapshot of my <span className='text-green-400 font-semibold'>core skills</span> and <span className='text-teal-400 font-semibold'>technologies</span> I use to build modern, scalable applications.
          </p>
        </motion.div>
        
        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 sm:gap-10 md:gap-12 justify-items-center">
            {skills.map((skill, index) => (
              <div key={index} className="w-full flex justify-center">
                <CircleSkill skill={skill} index={index} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
