import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="toggle-icon"
        animate={{ rotate: isDarkMode ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {isDarkMode ? (
          <FaSun className="sun-icon" />
        ) : (
          <FaMoon className="moon-icon" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
