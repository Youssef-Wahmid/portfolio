import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/youssef-wahmid/',
      label: 'LinkedIn',
      color: '#0077B5'
    },
    {
      icon: FaFacebook,
      href: 'https://www.facebook.com/melissa.l.1401',
      label: 'Facebook',
      color: '#1877F2'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:youssefwaahmid@gmail.com',
      label: 'Email',
      color: '#EA4335'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer
      className="footer"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="footer-container">
        {/* Copyright Text */}
        <motion.div
          className="footer-copyright"
          variants={itemVariants}
        >
          <p className="copyright-text">
            © 2025 Youssef Wahmid. All rights reserved.
          </p>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          className="footer-social"
          variants={itemVariants}
        >
          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={social.label}
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                style={{ '--icon-color': social.color }}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
