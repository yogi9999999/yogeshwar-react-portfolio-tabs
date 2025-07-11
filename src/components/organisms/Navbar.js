
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaHome, FaBriefcase, FaStar, FaCertificate, FaProjectDiagram, FaThumbsUp } from 'react-icons/fa';

const navItems = [
  { name: 'Home', path: '/', icon: <FaHome /> },
  { name: 'Experience', path: '/experience', icon: <FaBriefcase /> },
  { name: 'Skills', path: '/skills', icon: <FaStar /> },
  { name: 'Certifications', path: '/certifications', icon: <FaCertificate /> },
  { name: 'Projects', path: '/projects', icon: <FaProjectDiagram /> },
  { name: 'Recommendations', path: '/recommendations', icon: <FaThumbsUp /> }
];

export default function Navbar() {
  const location = useLocation();
  
  // Hide navbar on About page
  if (location.pathname === '/about') {
    return null;
  }

  return (
    <nav
      className="fixed bottom-2 left-1/2 -translate-x-1/2 z-40 w-[98vw] max-w-xl mx-auto bg-white/80 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200/40 dark:border-gray-700/40 rounded-2xl shadow-xl px-2 py-4 sm:py-3 flex items-center justify-center
      sm:top-0 sm:bottom-auto sm:w-[95vw] sm:max-w-2xl sm:px-4 sm:mt-4"
      style={{
        transition: 'all 0.2s',
      }}
    >
      <div className="flex flex-row justify-between items-center w-full gap-0 sm:gap-3 md:gap-5">
        {navItems.map(({ name, path, icon }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              'flex flex-col items-center justify-center gap-0.5 px-1.5 py-1 sm:px-3 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ' +
              (isActive
                ? 'bg-gradient-to-r from-blue-500/20 to-blue-400/10 text-blue-600 dark:text-blue-400 shadow-md'
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 hover:bg-blue-400/10')
            }
            style={{ minWidth: 48 }}
          >
            <span className="text-xl sm:text-lg mb-0.5">{icon}</span>
            <span className="hidden xs:inline-block sm:inline-block">{name}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
