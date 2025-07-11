import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaCode, FaRocket } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen py-8 px-4 sm:px-8 mt-0 sm:mt-0 pt-16 sm:pt-32 pb-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20 sm:mb-24"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block bg-gray-900/90 rounded-xl px-6 py-4 shadow-lg font-mono text-left mx-auto max-w-full">
            <span className="block text-xs text-gray-500 mb-1 select-none">1 |</span>
            <h1 className="font-bold whitespace-nowrap sm:whitespace-pre-line">
              <span className="inline-flex items-center">
                <span className="text-green-400 select-none mr-2 text-base sm:text-lg md:text-2xl lg:text-4xl">$</span>
                <span className="block w-full bg-[#181a20] border-l-4 border-blue-500 shadow-inner px-3 py-2 rounded-md font-mono text-green-400 text-base sm:text-lg md:text-2xl lg:text-4xl max-w-full overflow-x-auto whitespace-nowrap">
                  <Typewriter
                    words={["console.log('Hello World!')", "console.log('I’m Yogi')"]}
                    cursor
                    cursorStyle="|"
                    typeSpeed={120}
                    deleteSpeed={80}
                    delaySpeed={1800}
                    loop={false}
                  />
                </span>
              </span>
            </h1>
          </div>
          <p className="text-gray-300 text-base xs:text-lg sm:text-xl max-w-xl mx-auto leading-relaxed px-2 sm:px-0 font-medium mt-8">
            Explore my journey, <span className='text-blue-500 font-semibold'>skills</span>, <span className='text-indigo-500 font-semibold'>projects</span>, and <span className='text-blue-500 font-semibold'>achievements</span> in the world of software development.
          </p>
        </motion.div>

        {/* Main Content Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {/* About Card */}
          <motion.div
            className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            onClick={() => handleCardClick('/about')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl mx-auto mb-4 shadow-lg">
                <FaUser />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">About Me</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Passionate developer with expertise in React, React Native, and modern web technologies. Focused on creating secure, scalable, and user-friendly applications.
              </p>
              <div className="mt-4 text-blue-400 text-sm font-medium">
                Click to explore →
              </div>
            </div>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            onClick={() => handleCardClick('/skills')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white text-2xl mx-auto mb-4 shadow-lg">
                <FaCode />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Technical Skills</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                React, React Native, JavaScript, TypeScript, Redux, Firebase, Jest Testing, CI/CD, and more. Explore my complete skill set.
              </p>
              <div className="mt-4 text-blue-400 text-sm font-medium">
                Click to explore →
              </div>
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            onClick={() => handleCardClick('/experience')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center text-white text-2xl mx-auto mb-4 shadow-lg">
                <FaRocket />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Experience</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                9+ years of professional experience across fintech, banking, and enterprise applications. Led teams and delivered complex projects.
              </p>
              <div className="mt-4 text-blue-400 text-sm font-medium">
                Click to explore →
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Navigation Hint */}
        {/* Removed as per user request */}
      </div>
    </motion.div>
  );
}