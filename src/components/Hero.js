import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Hero.css';
import profile from '../images/profilee.jpg';

const Hero = () => {
  const { t } = useTranslation();
  
  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Youssef-Wahmid', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/youssef-wahmid/', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' }
  ];

  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
  const [currentCharIndex, setCurrentCharIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  
  const texts = useMemo(() => [t('hero.name'), t('hero.title')], [t]);

  React.useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 150;
    const pauseTime = isDeleting ? 100 : 2000;
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentCharIndex < texts[currentTextIndex].length) {
          setCurrentCharIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentCharIndex > 0) {
          setCurrentCharIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setIsTransitioning(true);
          setTimeout(() => {
            setCurrentTextIndex(prev => (prev + 1) % texts.length);
            setIsTransitioning(false);
          }, 200);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentCharIndex, isDeleting, currentTextIndex, texts]);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={letterVariants}>
              {t('hero.greeting')}{' '}
              <motion.span 
                className="highlight typing-text"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: isTransitioning ? 0.5 : 1,
                  scale: isTransitioning ? 0.98 : 1
                }}
                transition={{ duration: 0.2 }}
              >
                {texts[currentTextIndex].slice(0, currentCharIndex)}
                <motion.span
                  className="typing-cursor"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  |
                </motion.span>
              </motion.span>
            </motion.h1>
            <motion.p variants={letterVariants}>
              {t('hero.description')}
            </motion.p>
            
            <motion.div
              className="hero-buttons" 
              variants={letterVariants}
            >
              <motion.a
                href="#projects"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.viewWork')}
              </motion.a>
              <motion.a
                href="#contact"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.getInTouch')}
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="profile-placeholder">
              <div className="profile-circle">
                <img src={profile} alt="Youssef Wahmid" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="social-links"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              className="social-link"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1 }}
            >
              <social.icon />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="scroll-indicator"
          variants={floatingVariants}
          animate="animate"
        >
          <FaArrowDown />
          <span>{t('hero.scrollDown')}</span>
        </motion.div>
      </div>

      <motion.div
        className="floating-element floating-1"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="floating-element floating-2"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '1s' }}
      />
      <motion.div
        className="floating-element floating-3"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      />
    </section>
  );
};

export default Hero;