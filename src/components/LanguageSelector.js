import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ar', name: 'العربية', flag: '🇲🇦' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
    
    // Update document direction for Arabic
    if (languageCode === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', languageCode);
    }
  };

  return (
    <div className="language-selector">
      <motion.button
        className="language-btn"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaGlobe className="globe-icon" />
        <span className="language-text">
          {currentLanguage.flag} {currentLanguage.name}
        </span>
        <motion.div
          className={`chevron ${isOpen ? 'open' : ''}`}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FaChevronDown />
        </motion.div>
      </motion.button>

      <motion.div
        className={`language-dropdown ${isOpen ? 'open' : ''}`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          y: isOpen ? 0 : -10,
          scale: isOpen ? 1 : 0.95
        }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
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
    </div>
  );
};

export default LanguageSelector;
