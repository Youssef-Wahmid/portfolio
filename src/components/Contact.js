import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("DrLg5THsX7t2TOU11");
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
      
    
    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_aiqrkxy', // Replace with your EmailJS service ID
        'template_bru6uv5', // Replace with your EmailJS template ID
        {
          to_email: 'ssefyou289@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email
        }
      );
      
      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: t('contact.email'),
      value: 'ssefyou289@gmail.com',
      link: 'mailto:ssefyou289@gmail.com'
    },
    {
      icon: FaPhone,
      title: t('contact.phone'),
      value: '+212 696141175',
      link: 'tel:+212696141175'
    },
    {
      icon: FaMapMarkerAlt,
      title: t('contact.location'),
      value: 'Laayoune, Morocco',
      link: '#'
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>{t('contact.letsConnect')}</h3>
            <p>
              {t('contact.description')}
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  className="contact-item"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <div className="contact-icon">
                    <info.icon />
                  </div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    <p>{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

         
          </motion.div>

          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder={t('contact.form.name')}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder={t('contact.form.email')}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder={t('contact.form.subject')}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder={t('contact.form.message')}
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <FaPaperPlane />
                  </motion.div>
                ) : (
                  <>
                    <FaPaperPlane />
                    {t('contact.form.sendMessage')}
                  </>
                )}
              </motion.button>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  className="status-message success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {t('contact.form.success')}
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  className="status-message error"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {t('contact.form.error')}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
