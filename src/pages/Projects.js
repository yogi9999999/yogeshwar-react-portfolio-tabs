import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaRocket, FaCode, FaTools, FaBook, FaLightbulb } from 'react-icons/fa';

export default function Projects() {
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
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
            Featured Projects
          </h1>
          <div className="flex justify-center mb-4">
            <span className="block w-16 sm:w-24 h-1 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-70"></span>
          </div>
          <p className="text-gray-300 text-base xs:text-lg sm:text-xl max-w-xl mx-auto leading-relaxed px-2 sm:px-0 font-medium">
            A showcase of my technical expertise through <span className="text-blue-400 font-semibold">innovative projects</span> and <span className="text-purple-400 font-semibold">creative solutions</span>.<br className="hidden xs:block" />
          </p>
        </motion.div>

        {/* Project Card */}
        <motion.div
          className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 sm:p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Project Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl sm:text-2xl shadow-lg">
                <FaRocket />
              </div>
              <div>
                <h2 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2">React Boilerplate Template</h2>
                <p className="text-gray-300 font-medium text-xs sm:text-base">Comprehensive React Development Template</p>
              </div>
            </div>
            <a
              href="https://github.com/yoginair/react-boilerplate"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 hover:bg-blue-500/20 transition-all duration-300 text-xs sm:text-sm w-full sm:w-auto justify-center"
            >
              <FaGithub />
              <span>View on GitHub</span>
            </a>
          </div>

          {/* Project Description */}
          <div className="mb-6 sm:mb-8">
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-2 sm:mb-4">
              A comprehensive <span className="text-blue-400 font-semibold">modular React template</span> following 
              <span className="text-purple-400 font-semibold"> Atomic Design principles</span>, built with 
              <span className="text-green-400 font-semibold"> scalability</span>, 
              <span className="text-yellow-400 font-semibold"> testing</span>, and 
              <span className="text-pink-400 font-semibold"> maintainability</span> in mind.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              This template provides a solid foundation for building scalable React applications with proper component architecture, 
              comprehensive testing setup, and modern development tools. Perfect for teams looking to maintain consistent code quality 
              and accelerate development workflows.
            </p>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Getting Started */}
            <motion.div
              className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-4 sm:p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-base sm:text-lg">
                  <FaRocket />
                </div>
                <h4 className="font-bold text-white text-sm sm:text-base">Getting Started</h4>
              </div>
              <pre className="bg-gray-800 text-green-300 rounded-lg p-2 sm:p-3 text-xs sm:text-sm font-mono overflow-x-auto">
npm install<br />
npm start
              </pre>
            </motion.div>

            {/* Scripts */}
            <motion.div
              className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-4 sm:p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-base sm:text-lg">
                  <FaTools />
                </div>
                <h4 className="font-bold text-white text-sm sm:text-base">Available Scripts</h4>
              </div>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li className="flex items-center gap-2 text-gray-300">
                  <FaCode className="text-blue-400" />
                  <code className="text-blue-300">npm start</code> – Run dev server
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <FaCode className="text-blue-400" />
                  <code className="text-blue-300">npm run build</code> – Build for production
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <FaCode className="text-blue-400" />
                  <code className="text-blue-300">npm test</code> – Run tests
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <FaCode className="text-blue-400" />
                  <code className="text-blue-300">npm run storybook</code> – Launch Storybook
                </li>
              </ul>
            </motion.div>

            {/* Folder Structure */}
            <motion.div
              className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-4 sm:p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white text-base sm:text-lg">
                  <FaBook />
                </div>
                <h4 className="font-bold text-white text-sm sm:text-base">Folder Structure</h4>
              </div>
              <code className="bg-gray-800 inline-block p-2 sm:p-3 rounded-lg text-blue-300 text-xs sm:text-sm font-mono overflow-x-auto">
src/components/atoms<br />
src/components/molecules<br />
src/components/organisms
              </code>
            </motion.div>

            {/* Best Practices */}
            <motion.div
              className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-4 sm:p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center text-white text-base sm:text-lg">
                  <FaLightbulb />
                </div>
                <h4 className="font-bold text-white text-sm sm:text-base">Best Practices</h4>
              </div>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Atomic Design with PropTypes
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  Storybook for component isolation
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Clean, scalable structure
                </li>
              </ul>
            </motion.div>
          </div>

          {/* VS Code Extensions */}
          <motion.div
            className="mt-4 sm:mt-6 bg-gray-900/50 border border-gray-700/50 rounded-xl p-4 sm:p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-white mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xs sm:text-sm">
                <FaCode />
              </div>
              Recommended VS Code Extensions
            </h4>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="px-2 py-1 sm:px-3 sm:py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-300 font-medium">
                ES7+ React Snippets
              </span>
              <span className="px-2 py-1 sm:px-3 sm:py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-300 font-medium">
                Prettier
              </span>
              <span className="px-2 py-1 sm:px-3 sm:py-1 bg-green-500/10 border border-green-500/20 rounded-full text-xs text-green-300 font-medium">
                Auto Import
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
