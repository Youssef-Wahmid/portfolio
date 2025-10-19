import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaBootstrap, FaPhp, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiLaravel, SiTypescript, SiSpringboot, SiMongodb, SiMysql, SiFlutter, SiWordpress, SiVisualstudiocode, SiPostman, SiPostgresql, SiApache } from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import './Skills.css';
import git from '../images/git.png';
import sql from '../images/sql.png';
import python from '../images/python.png';
import oracle from '../images/Oracle Cloud Infrastructure.png';
import excel from '../images/excel.png';
const Skills = () => {
  const { t } = useTranslation();
  
  const skills = [
    // Frontend Technologies
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
    
    // Backend Technologies
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Java', icon: FaJava, color: '#ED8B00' },
    { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
    { name: 'PHP', icon: FaPhp, color: '#777BB4' },
    { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
    { name: 'WordPress', icon: SiWordpress, color: '#21759B' },
    
    // Databases
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'SQL', icon: SiMysql, color: '#4479A1' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    
    // Development Tools
    { name: 'Git', icon: FaGit, color: '#F05032' },
    { name: 'VS Code', icon: SiVisualstudiocode, color: '#007ACC' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    { name: 'XAMPP', icon: SiApache, color: '#D22128' },
    
  
  ];

  const certifications = [
    { 
      name: 'Git Certification', 
      image: git,
      alt: 'Git Certification'
    },
    { 
      name: 'SQL Database Certification', 
      image: sql,
      alt: 'SQL Database Certification'
    },
    { 
      name: 'Python Programming', 
      image: python,
      alt: 'Python Programming Certification'
    },
    { 
      name: 'Oracle Cloud Infrastructure', 
      image: oracle,
      alt: 'Oracle Cloud Infrastructure Certification'
    },
    { 
      name: 'Excel Certification', 
      image: excel,
      alt: 'Excel Certification'
    }
  ];

  // Debug: Log the image paths
  console.log('Certification images:', certifications.map(cert => cert.image));
  console.log('PUBLIC_URL:', process.env.PUBLIC_URL);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedCert, setSelectedCert] = React.useState(null);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
  };

  return (
    <section id="skills" className="section skills">
      
      <div className="container">
   
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">{t('skills.title')}</h2>
          <p className="section-subtitle">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              variants={skillVariants}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                <skill.icon />
              </div>
              <h4 className="skill-name">{skill.name}</h4>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="certifications-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="certifications-title">{t('skills.certifications')}</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="certification-item"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => openModal(cert)}
              >
                <img 
                  src={cert.image} 
                  alt={cert.alt} 
                  className="certification-image"
                />
                <p className="certification-name">{cert.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certification Modal */}
        <div className={`certification-modal ${isModalOpen ? 'active' : ''}`} onClick={closeModal}>
          <div className="certification-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="certification-modal-close" onClick={closeModal}>
              ×
            </button>
            {selectedCert && (
              <>
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.alt} 
                  className="certification-modal-image"
                />
                <h4 className="certification-modal-name">{selectedCert.name}</h4>
              </>
            )}
          </div>
        </div>

        <motion.div
          className="skills-description"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="description-card">
            <h3>{t('skills.continuousLearning')}</h3>
            <p>
              {t('skills.learningDescription')}
            </p>
            <div className="learning-areas">
              <span>{t('skills.learningAreas.machineLearning')}</span>
              <span>{t('skills.learningAreas.cloudComputing')}</span>
              <span>{t('skills.learningAreas.devOps')}</span>
              <span>{t('skills.learningAreas.mobileDevelopment')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
