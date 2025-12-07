import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaJs, FaHtml5, FaPlayCircle, FaWordpress, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Projects.css';
import wordpressImg1 from '../images/wordpress_project/1.png';
import wordpressImg2 from '../images/wordpress_project/2.png';
import wordpressImg3 from '../images/wordpress_project/3.png';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);
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
    },
    {
      id: 7,
      title: t('projects.items.wordpress.title'),
      description: t('projects.items.wordpress.description'),
      image: wordpressImg1,
      images: [wordpressImg1, wordpressImg2, wordpressImg3],
      category: 'wordpress',
      technologies: ['WordPress', 'PHP', 'CSS', 'JavaScript'],
      github: '#',
      video: 'https://drive.google.com/file/d/1yfobTPCk3QzhixDHZVUYX4SF0XyI2qrx/view',
      icon: FaWordpress
    }
  ];

  const categories = [
    { id: 'all', name: t('projects.categories.all') },
    { id: 'frontend', name: t('projects.categories.frontend') },
    { id: 'fullstack', name: t('projects.categories.fullstack') },
    { id: 'wordpress', name: t('projects.categories.wordpress') }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Handle image carousel rotation on hover
  useEffect(() => {
    if (hoveredProject === null) return;

    const project = projects.find(p => p.id === hoveredProject);
    if (!project || !project.images || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        return (prevIndex + 1) % project.images.length;
      });
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [hoveredProject, projects]);

  // Handle modal image carousel
  useEffect(() => {
    if (!selectedProject || !selectedProject.images || selectedProject.images.length <= 1) return;

    const interval = setInterval(() => {
      setModalImageIndex((prevIndex) => {
        return (prevIndex + 1) % selectedProject.images.length;
      });
    }, 3000); // Change image every 3 seconds in modal

    return () => clearInterval(interval);
  }, [selectedProject]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight' && selectedProject.images) {
        setModalImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length);
      } else if (e.key === 'ArrowLeft' && selectedProject.images) {
        setModalImageIndex((prevIndex) => 
          prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const openModal = (project) => {
    if (project.images && project.images.length > 1) {
      setSelectedProject(project);
      setModalImageIndex(0);
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setModalImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setModalImageIndex((prevIndex) => 
        prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
      );
    }
  };

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
                onClick={() => openModal(project)}
                style={{ cursor: project.images && project.images.length > 1 ? 'pointer' : 'default' }}
                onMouseEnter={() => {
                  if (project.images && project.images.length > 1) {
                    setHoveredProject(project.id);
                    setCurrentImageIndex(0);
                  }
                }}
                onMouseLeave={() => {
                  setHoveredProject(null);
                  setCurrentImageIndex(0);
                }}
              >
                <div className="project-image">
                  {project.images && project.images.length > 1 ? (
                    <div className="project-image-carousel">
                      {project.images.map((img, index) => {
                        const isActive = hoveredProject === project.id 
                          ? currentImageIndex === index 
                          : index === 0;
                        return (
                          <motion.img
                            key={index}
                            src={img}
                            alt={`${project.title} - Image ${index + 1}`}
                            className={`carousel-image ${isActive ? 'active' : ''}`}
                            initial={{ opacity: index === 0 ? 1 : 0 }}
                            animate={{
                              opacity: isActive ? 1 : 0,
                              zIndex: isActive ? 1 : 0
                            }}
                            transition={{ duration: 0.5 }}
                          />
                        );
                      })}
                    </div>
                  ) : (
                    <img src={project.image} alt={project.title} />
                  )}
                  <div className="project-links-container">
                    <div className="project-links">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub />
                      </motion.a>
                      {project.video ? (
                        <motion.a
                          href={project.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaPlayCircle />
                        </motion.a>
                      ) : (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt />
                        </motion.a>
                      )}
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

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && selectedProject.images && selectedProject.images.length > 1 && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="project-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-btn" onClick={closeModal}>
                <FaTimes />
              </button>
              
              <div className="modal-header">
                <h3>{selectedProject.title}</h3>
                <div className="modal-links">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub />
                  </motion.a>
                  {selectedProject.video ? (
                    <motion.a
                      href={selectedProject.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaPlayCircle />
                    </motion.a>
                  ) : selectedProject.live ? (
                    <motion.a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  ) : null}
                </div>
              </div>

              <div className="modal-image-container">
                <button className="modal-nav-btn modal-nav-prev" onClick={prevImage}>
                  ‹
                </button>
                
                <div className="modal-image-wrapper">
                  {selectedProject.images.map((img, index) => (
                    <motion.img
                      key={index}
                      src={img}
                      alt={`${selectedProject.title} - Image ${index + 1}`}
                      className={`modal-image ${modalImageIndex === index ? 'active' : ''}`}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: modalImageIndex === index ? 1 : 0,
                        scale: modalImageIndex === index ? 1 : 0.95
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  ))}
                </div>

                <button className="modal-nav-btn modal-nav-next" onClick={nextImage}>
                  ›
                </button>
              </div>

              <div className="modal-indicators">
                {selectedProject.images.map((_, index) => (
                  <button
                    key={index}
                    className={`modal-indicator ${modalImageIndex === index ? 'active' : ''}`}
                    onClick={() => setModalImageIndex(index)}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
