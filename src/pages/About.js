import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaCode, FaGamepad, FaBook, FaMusic, FaCamera, FaPlane, FaCoffee, FaRocket, FaArrowLeft } from 'react-icons/fa';
import { SiReact, SiJavascript, SiTypescript } from 'react-icons/si';

const hobbies = [
  {
    icon: <FaCode />,
    name: 'Coding',
    description: 'Building side projects and exploring new technologies'
  },
  {
    icon: <FaGamepad />,
    name: 'Gaming',
    description: 'Strategy games and puzzle solving'
  },
  {
    icon: <FaBook />,
    name: 'Reading',
    description: 'Tech blogs, sci-fi novels, and self-development books'
  },
  {
    icon: <FaMusic />,
    name: 'Music',
    description: 'Listening to various genres while coding'
  },
  {
    icon: <FaCamera />,
    name: 'Photography',
    description: 'Capturing moments and landscapes'
  },
  {
    icon: <FaPlane />,
    name: 'Travel',
    description: 'Exploring new places and cultures'
  }
];

const timeline = [
  {
    year: '2016',
    title: 'Started My Journey',
    description: 'Began my career in software development with a passion for creating impactful applications.'
  },
  {
    year: '2019',
    title: 'Mobile Development',
    description: 'Dived deep into React Native and mobile app development, building cross-platform solutions.'
  },
  {
    year: '2021',
    title: 'Team Leadership',
    description: 'Started leading development teams and mentoring junior developers.'
  },
  {
    year: '2025',
    title: 'Current Focus',
    description: 'Focusing on modern web technologies, AI integration, and scalable architecture.'
  }
];

export default function About() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            onClick={handleBackClick}
            className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl text-blue-400 hover:bg-blue-500/20 transition-all duration-300 hover:scale-105"
          >
            <FaArrowLeft className="text-lg" />
            <span className="font-medium">Back to Home</span>
          </button>
        </motion.div>

        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-5 bg-gradient-to-r from-blue-300 via-gray-400 to-gray-700 bg-clip-text text-transparent drop-shadow-lg">
            About Me
          </h1>
          <div className="flex justify-center mb-4">
            <span className="block w-16 sm:w-24 h-1 rounded-full bg-gradient-to-r from-blue-300 via-gray-400 to-gray-700 opacity-70"></span>
          </div>
          <p className="text-gray-300 text-base xs:text-lg sm:text-xl max-w-xl mx-auto leading-relaxed px-2 sm:px-0 font-medium">
            Get to know the person behind the code – my <span className='text-blue-400 font-semibold'>journey</span>, <span className='text-gray-400 font-semibold'>values</span>, and what drives me to create amazing digital experiences.
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 sm:p-12 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 items-center">
              {/* Profile Picture */}
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="relative inline-block">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 overflow-hidden">
                    <img
                      src="/profile.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white text-xl">
                    <FaCoffee />
                  </div>
                </div>
              </motion.div>

              {/* Personal Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Yogeshwar Nair</h2>
                <p className="text-gray-300 text-sm sm:text-base mb-0 leading-relaxed">
                  A passionate React & React Native developer with 9+ years of experience crafting digital solutions that make a difference. I believe in writing clean, maintainable code and creating user experiences that delight.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">My Journey</h2>
          <div className="relative">
            {/* Animated Timeline Line - Ends at Current Focus */}
            <motion.div 
              className="absolute left-6 sm:left-8 top-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              style={{ 
                transformOrigin: "top",
                height: "calc(100% - 6rem)" // Adjust to connect to 2025 entry
              }}
            />
            
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start gap-4 sm:gap-6"
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    className="relative z-10 flex-shrink-0 flex items-center justify-center"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.2 + 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 20
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-xl border-4 border-gray-900 relative">
                      {item.year}
                      {/* Glow Effect */}
                      <motion.div 
                        className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-xl opacity-30"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div 
                    className="flex-1 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 sm:p-6 relative overflow-hidden"
                    initial={{ opacity: 0, x: 100, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.2 + 0.2,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {/* Content */}
                    <div className="relative z-10">
                      <motion.div 
                        className="flex items-center gap-2 mb-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: index * 0.2 + 0.3
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <h3 className="text-white font-bold text-lg sm:text-xl">{item.title}</h3>
                      </motion.div>
                      <motion.p 
                        className="text-gray-300 text-sm leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: index * 0.2 + 0.4
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        {item.description}
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Experience Summary Section */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 sm:p-6 overflow-hidden">
            <div className="text-center">
              <motion.div
                className="inline-flex flex-col sm:flex-row items-center gap-3 mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white text-base sm:text-lg shadow-lg">
                  <FaRocket />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">9+ Years of Growth & Innovation</h2>
              </motion.div>
              
              <motion.p 
                className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-4 px-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                From mobile development to team leadership, I've evolved through various roles and technologies, always staying ahead of industry trends and delivering exceptional results.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-2 sm:gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 font-medium text-xs sm:text-sm">
                  React & React Native
                </span>
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 font-medium text-xs sm:text-sm">
                  Team Leadership
                </span>
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 font-medium text-xs sm:text-sm">
                  Mobile Development
                </span>
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 font-medium text-xs sm:text-sm">
                  Project Management
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Hobbies Section */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Hobbies & Interests</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center text-white text-xl mx-auto mb-4">
                  {hobby.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{hobby.name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{hobby.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Connect!</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, or just chat about technology and development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm">
                React Development
              </span>
              <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm">
                Team Leadership
              </span>
              <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm">
                Problem Solving
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 