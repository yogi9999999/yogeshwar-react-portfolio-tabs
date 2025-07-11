import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const recommendations = [
  {
    name: "Ravikumar V",
    title: "Engineering Manager at Kotak (ex-Target)",
    relationship: "Managed Yogeshwar directly",
    date: "July 7, 2025",
    text: "Yogeshwar is a hard working guy, where he consistently impressed me with his strong problem-solving skills and dedication. As a Senior Front-End Engineer, he demonstrated deep expertise in front-end technologies and always delivered clean, efficient, and scalable code. His ability to handle complex projects and mentor team members made him an invaluable asset to our team.",
    highlights: ['Problem Solving', 'Frontend Expertise', 'Code Quality', 'Team Mentoring']
  },
  {
    name: "Vaishnav Naik",
    title: "Lead Consultant @ Xebia",
    relationship: "Worked with Yogeshwar on the same team",
    date: "June 10, 2025",
    text: "Excellent team player with deep understanding of React, React Native, and JavaScript. Yogeshwar consistently delivered high-quality work and was always willing to help team members. His technical expertise and collaborative approach made him a pleasure to work with.",
    highlights: ['Team Player', 'React Native', 'JavaScript', 'Collaboration']
  },
  {
    name: "Shashikant Sharma",
    title: "Product, Strategy & Success",
    relationship: "Senior to Yogeshwar but didn't manage directly",
    date: "January 7, 2019",
    text: "Yogeshwar's ability to handle multiple projects was unlike any I've seen before and made a dramatic increase in the productivity level of our company. His systematic approach to problem-solving and attention to detail significantly improved our development processes.",
    highlights: ['Multi-tasking', 'Productivity', 'Problem Solving', 'Process Improvement']
  },
  {
    name: "Rahul Jain",
    title: "Co-Founder & CTO at Ajackus",
    relationship: "Managed Yogeshwar directly",
    date: "January 6, 2019",
    text: "Yogeshwar joined our team during a crucial time... He proved himself to be a reliable and hardworking employee with solid problem-solving and technical skills. His contributions were instrumental in meeting our project deadlines and maintaining high code quality standards.",
    highlights: ['Reliability', 'Technical Skills', 'Problem Solving', 'Code Quality']
  },
  {
    name: "Abhishek Kumar Singh",
    title: "Senior Software Engineer at Personatech",
    relationship: "Senior to Yogeshwar but didn't manage directly",
    date: "September 3, 2018",
    text: "Yogeshwar is a good team player, always willing to learn and improve. I really enjoyed working with him. His positive attitude and eagerness to take on new challenges made him a valuable member of our development team.",
    highlights: ['Team Player', 'Learning Mindset', 'Positive Attitude', 'Adaptability']
  }
];

function RecommendationCard({ rec, index }) {
  return (
    <motion.div
      key={index}
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 group-hover:-translate-y-1">
        {/* Quote Icon */}
        <div className="absolute top-4 left-4 text-blue-400 text-2xl opacity-60">
          <FaQuoteLeft />
        </div>

        {/* Content */}
        <div className="pl-8">
          {/* Recommendation Text */}
          <div className="mb-6">
            <p className="text-gray-300 text-sm leading-relaxed italic">
              "{rec.text}"
            </p>
          </div>

          {/* Highlights */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
              <FaStar className="text-blue-400" />
              Key Strengths
            </h4>
            <div className="flex flex-wrap gap-2">
              {rec.highlights.map((highlight, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-300 font-medium"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          {/* Author Info */}
          <div className="pt-4 border-t border-gray-600">
            <div>
              <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                {rec.name}
              </h3>
              <p className="text-gray-300 text-sm">{rec.title}</p>
              <p className="text-gray-500 text-xs">{rec.relationship} • {rec.date}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Recommendations() {
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
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
            Recommendations
          </h1>
          <div className="flex justify-center mb-4">
            <span className="block w-16 sm:w-24 h-1 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 opacity-70"></span>
          </div>
          <p className="text-gray-300 text-base xs:text-lg sm:text-xl max-w-xl mx-auto leading-relaxed px-2 sm:px-0 font-medium">
            Words from colleagues and clients about my <span className='text-blue-500 font-semibold'>work ethic</span>, <span className='text-blue-400 font-semibold'>collaboration</span>, and <span className='text-blue-500 font-semibold'>impact</span>.
          </p>
        </motion.div>

        {/* Recommendation Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-8">
            {recommendations.map((rec, index) => (
              <RecommendationCard key={index} rec={rec} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
