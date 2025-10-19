import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaJs, FaHtml5 } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Projects.css';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t('projects.items.ecommerce.title'),
      description: t('projects.items.ecommerce.description'),
      image: 'https://via.placeholder.com/400x250/667eea/ffffff?text=E-Commerce',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#',
      icon: FaReact
    },
    {
      id: 2,
      title: t('projects.items.taskManagement.title'),
      description: t('projects.items.taskManagement.description'),
      image: 'https://via.placeholder.com/400x250/764ba2/ffffff?text=Task+App',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
      github: '#',
      live: '#',
      icon: FaReact
    },
    {
      id: 3,
      title: t('projects.items.weatherDashboard.title'),
      description: t('projects.items.weatherDashboard.description'),
      image: 'https://via.placeholder.com/400x250/f093fb/ffffff?text=Weather+App',
      category: 'frontend',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Weather API'],
      github: '#',
      live: '#',
      icon: FaJs
    },
    {
      id: 4,
      title: t('projects.items.portfolioWebsite.title'),
      description: t('projects.items.portfolioWebsite.description'),
      image: 'https://via.placeholder.com/400x250/4facfe/ffffff?text=Portfolio',
      category: 'frontend',
      technologies: ['React', 'Framer Motion', 'CSS3', 'Responsive'],
      github: '#',
      live: '#',
      icon: FaReact
    },
    {
      id: 5,
      title: t('projects.items.blogPlatform.title'),
      description: t('projects.items.blogPlatform.description'),
      image: 'https://via.placeholder.com/400x250/43e97b/ffffff?text=Blog+Platform',
      category: 'fullstack',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Markdown'],
      github: '#',
      live: '#',
      icon: FaReact
    },
    {
      id: 6,
      title: t('projects.items.landingPage.title'),
      description: t('projects.items.landingPage.description'),
      image: 'https://via.placeholder.com/400x250/fa709a/ffffff?text=Landing+Page',
      category: 'frontend',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
      github: '#',
      live: '#',
      icon: FaHtml5
    }
  ];

  const categories = [
    { id: 'all', name: t('projects.categories.all') },
    { id: 'frontend', name: t('projects.categories.frontend') },
    { id: 'fullstack', name: t('projects.categories.fullstack') }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="section-subtitle">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="category-filter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedCategory}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={projectVariants}
                layout
                whileHover={{ y: -10, scale: 1.02 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <motion.a
                        href={project.github}
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <div className="project-header">
                    <div className="project-icon">
                      <project.icon />
                    </div>
                    <h3>{project.title}</h3>
                  </div>
                  
                  <p>{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
