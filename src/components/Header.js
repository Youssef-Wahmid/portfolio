import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import logo from '../images/logo.png';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentHash, setCurrentHash] = useState('#home');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { t, i18n } = useTranslation();

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
    { name: t('navigation.resume'), href: '#resume' },
    { name: t('navigation.projects'), href: '#projects' },
    { name: t('navigation.contact'), href: '#contact' }
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ar', name: 'العربية', flag: '🇲🇦' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setIsLanguageOpen(false);
    
    // Update document direction for Arabic
    if (languageCode === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', languageCode);
    }
  };

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
      <div className="navbar-container">
        {/* Left Section - Logo */}
        <div className="navbar-left">
          <motion.div
            className="logo"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={logo} alt="Wahmid Youssef" className="logo-image" />
          </motion.div>
        </div>

        {/* Center Section - Navigation Links */}
        <nav className="navbar-center">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                navigateTo(item.href);
              }}
              className={`nav-link ${currentHash === item.href ? 'active' : ''}`}
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

        {/* Right Section - Language Selector */}
        <div className="navbar-right">
          <div className="language-selector">
            <motion.button
              className="language-btn"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="language-flag">{currentLanguage.flag}</span>
              <span className="language-name">{currentLanguage.name}</span>
              <motion.div
                className={`chevron ${isLanguageOpen ? 'open' : ''}`}
                animate={{ rotate: isLanguageOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaChevronDown />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {isLanguageOpen && (
                <motion.div
                  className="language-dropdown"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {languages.map((language) => (
                    <motion.button
                      key={language.code}
                      className={`language-option ${i18n.language === language.code ? 'active' : ''}`}
                      onClick={() => changeLanguage(language.code)}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="flag">{language.flag}</span>
                      <span className="name">{language.name}</span>
                      {i18n.language === language.code && (
                        <motion.div
                          className="checkmark"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          ✓
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="hamburger"
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaBars />
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.nav
              className="mobile-nav"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mobile-nav-header">
                <div className="mobile-logo">
                  <img src={logo} alt="Wahmid Youssef" className="logo-image" />
                </div>
                <motion.button
                  className="mobile-close-btn"
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTimes />
                </motion.button>
              </div>

              <div className="mobile-nav-links">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo(item.href);
                    }}
                    className={`mobile-nav-link ${currentHash === item.href ? 'active' : ''}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>

              <div className="mobile-language-section">
                <h4>Language / اللغة / Langue</h4>
                <div className="mobile-language-options">
                  {languages.map((language) => (
                    <motion.button
                      key={language.code}
                      className={`mobile-language-option ${i18n.language === language.code ? 'active' : ''}`}
                      onClick={() => changeLanguage(language.code)}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="flag">{language.flag}</span>
                      <span className="name">{language.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
