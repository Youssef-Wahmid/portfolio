import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaCogs, FaGlobe, FaDatabase, FaCodeBranch, FaProjectDiagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Expertise.css';

const Expertise = () => {
  const { t } = useTranslation();

  const expertiseAreas = [
    {
      icon: FaLaptopCode,
      title: t('expertise.frontend.title'),
      description: t('expertise.frontend.description'),
      color: '#61DAFB'
    },
    {
      icon: FaCogs,
      title: t('expertise.backend.title'),
      description: t('expertise.backend.description'),
      color: '#339933'
    },
    {
      icon: FaGlobe,
      title: t('expertise.fullstack.title'),
      description: t('expertise.fullstack.description'),
      color: '#3B82F6'
    },
    {
      icon: FaDatabase,
      title: t('expertise.database.title'),
      description: t('expertise.database.description'),
      color: '#47A248'
    },
    {
      icon: FaCodeBranch,
      title: t('expertise.versionControl.title'),
      description: t('expertise.versionControl.description'),
      color: '#F05032'
    },
    {
      icon: FaProjectDiagram,
      title: t('expertise.umlMerise.title'),
      description: t('expertise.umlMerise.description'),
      color: '#8B5CF6'
    }
  ];

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

  return (
    <section id="expertise" className="section expertise">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">{t('expertise.title')}</h2>
          <p className="section-subtitle">
            {t('expertise.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="expertise-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              className="expertise-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="expertise-icon" style={{ color: area.color }}>
                <area.icon />
              </div>
              <h3 className="expertise-title">{area.title}</h3>
              <p className="expertise-description">{area.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
