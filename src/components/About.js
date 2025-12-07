import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaRocket, FaUsers, FaDownload, FaBriefcase } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './About.css';
import imgAbout from '../images/img_about.jpg';
import resumePdf from '../resum/resum.pdf';

const About = () => {
  const { t } = useTranslation();
 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    {
      icon: FaCode,
      title: t('about.features.cleanCode.title'),
      description: t('about.features.cleanCode.description')
    },
    {
      icon: FaPalette,
      title: t('about.features.creativeDesign.title'),
      description: t('about.features.creativeDesign.description')
    },
    {
      icon: FaRocket,
      title: t('about.features.performance.title'),
      description: t('about.features.performance.description')
    },
    {
      icon: FaUsers,
      title: t('about.features.userFocused.title'),
      description: t('about.features.userFocused.description')
    }
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'resum.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewWork = () => {
    window.location.href = '/#projects';
  };

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="section-subtitle">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-content">
              <h3>{t('about.whoIAm')}</h3>
              <p>
                {t('about.description1')}
              </p>
              <p>
                {t('about.description2')}
              </p>
            </div>
           
            <motion.div
              className="about-features"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="feature-card"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="feature-icon">
                    <feature.icon />
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
           
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={imgAbout}
              alt="About me"
              className="about-img"
            />
          </motion.div>
        </div>

        {/* Action Buttons */}
        <motion.div
          className="about-actions"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.button
            className="btn btn-primary"
            onClick={handleViewWork}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBriefcase /> View My Work
          </motion.button>
          <motion.button
            className="btn btn-secondary"
            onClick={handleDownloadResume}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload /> Download Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;