import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentHash, setCurrentHash] = useState('#home');
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#home');
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navItems = [
    { name: t('navigation.home'), href: '#home' },
    { name: t('navigation.about'), href: '#about' },
    { name: t('navigation.projects'), href: '#projects' },
    { name: t('navigation.contact'), href: '#contact' }
  ];

  const navigateTo = (href) => {
    const id = href.replace('#', '');
    if (typeof window !== 'undefined') {
      if (window.location.hash !== `#${id}`) {
        window.location.hash = id;
      } else {
        // force hashchange for same-hash clicks
        window.dispatchEvent(new HashChangeEvent('hashchange'));
      }
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        <div className="logo">
          <motion.div
            className="logo-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="logo-first">Wahmid</span>
            <span className="logo-last">Youssef</span>
          </motion.div>
          <motion.div
            className="logo-underline"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        <nav className="nav-desktop">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                navigateTo(item.href);
              }}
              className={currentHash === item.href ? 'active' : ''}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        <motion.button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              className="nav-mobile"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(item.href);
                  }}
                  className={currentHash === item.href ? 'active' : ''}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
