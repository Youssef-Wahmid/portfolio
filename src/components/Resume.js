import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGraduationCap, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCode } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section
      id="resume"
      className="section resume-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <motion.div 
          className="section-header"
          variants={itemVariants}
        >
          <h2 className="section-title">{t('resume.title')}</h2>
          <p className="section-subtitle">{t('resume.subtitle')}</p>
        </motion.div>

        <div className="resume-content">
          {/* Education Column */}
          <motion.div 
            className="resume-column education-column"
            variants={itemVariants}
          >
            <motion.div 
              className="section-header"
              variants={itemVariants}
            >
              <FaGraduationCap className="section-icon" />
              <h3>{t('resume.education.title')}</h3>
            </motion.div>

            <div className="timeline">
              {/* Licence Professionnelle */}
              <motion.div 
                className="timeline-item"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h4>{t('resume.education.licence.title')}</h4>
                    <span className="timeline-years">{t('resume.education.licence.years')}</span>
                  </div>
                  <div className="timeline-institution">
                    <FaMapMarkerAlt className="location-icon" />
                    <span>{t('resume.education.licence.institution')}</span>
                  </div>
                  <p className="timeline-description">
                    {t('resume.education.licence.description')}
                  </p>
                </div>
              </motion.div>

              {/* DTS */}
              <motion.div 
                className="timeline-item"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h4>{t('resume.education.dts.title')}</h4>
                    <span className="timeline-years">{t('resume.education.dts.years')}</span>
                  </div>
                  <div className="timeline-institution">
                    <FaMapMarkerAlt className="location-icon" />
                    <span>{t('resume.education.dts.institution')}</span>
                  </div>
                  <p className="timeline-description">
                    {t('resume.education.dts.description')}
                  </p>
                </div>
              </motion.div>

              {/* DUT */}
              <motion.div 
                className="timeline-item"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h4>{t('resume.education.dut.title')}</h4>
                    <span className="timeline-years">{t('resume.education.dut.years')}</span>
                  </div>
                  <div className="timeline-institution">
                    <FaMapMarkerAlt className="location-icon" />
                    <span>{t('resume.education.dut.institution')}</span>
                  </div>
                  <p className="timeline-description">
                    {t('resume.education.dut.description')}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Experience Column */}
          <motion.div 
            className="resume-column experience-column"
            variants={itemVariants}
          >
            <motion.div 
              className="section-header"
              variants={itemVariants}
            >
              <FaBriefcase className="section-icon" />
              <h3>{t('resume.experience.title')}</h3>
            </motion.div>

            <div className="timeline">
              {/* PIXWELL */}
              <motion.div 
                className="timeline-item experience-item"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="timeline-marker experience-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h4>{t('resume.experience.pixwell.title')}</h4>
                    <span className="timeline-years">{t('resume.experience.pixwell.duration')}</span>
                  </div>
                  <div className="timeline-company">
                    <FaMapMarkerAlt className="location-icon" />
                    <span>{t('resume.experience.pixwell.company')}</span>
                  </div>
                  <p className="timeline-description">
                    {t('resume.experience.pixwell.description')}
                  </p>
                  <div className="technologies">
                    <FaCode className="tech-icon" />
                    <span className="tech-text">{t('resume.experience.pixwell.technologies')}</span>
                  </div>
                </div>
              </motion.div>

              {/* Agence Urbaine */}
              <motion.div 
                className="timeline-item experience-item"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="timeline-marker experience-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h4>{t('resume.experience.agence.title')}</h4>
                    <span className="timeline-years">{t('resume.experience.agence.duration')}</span>
                  </div>
                  <div className="timeline-company">
                    <FaMapMarkerAlt className="location-icon" />
                    <span>{t('resume.experience.agence.company')}</span>
                  </div>
                  <p className="timeline-description">
                    {t('resume.experience.agence.description')}
                  </p>
                  <div className="technologies">
                    <FaCode className="tech-icon" />
                    <span className="tech-text">{t('resume.experience.agence.technologies')}</span>
                  </div>
                </div>
              </motion.div>

              {/* PFE Project */}
              <motion.div 
                className="timeline-item experience-item"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="timeline-marker experience-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h4>{t('resume.experience.pfe.title')}</h4>
                    <span className="timeline-years">{t('resume.experience.pfe.duration')}</span>
                  </div>
                  <p className="timeline-description">
                    {t('resume.experience.pfe.description')}
                  </p>
                  <div className="technologies">
                    <FaCode className="tech-icon" />
                    <span className="tech-text">{t('resume.experience.pfe.technologies')}</span>
                  </div>
                </div>
              </motion.div>

              {/* INRH */}
              <motion.div 
                className="timeline-item experience-item"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="timeline-marker experience-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h4>{t('resume.experience.inrh.title')}</h4>
                  </div>
                  <div className="timeline-company">
                    <FaMapMarkerAlt className="location-icon" />
                    <span>{t('resume.experience.inrh.company')}</span>
                  </div>
                  <p className="timeline-description">
                    {t('resume.experience.inrh.description')}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Resume;
