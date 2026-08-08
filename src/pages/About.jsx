import React from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Mail } from 'lucide-react';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      style={{ paddingTop: '100px', padding: '2rem', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>About Me</h1>
      <div className="glowing-container" style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
          Hi, I'm Ayush Gupta (hazy), a 12th grade student and an aspiring developer who loves tinkering with both software and hardware. I enjoy solving real problems and turning curiosity into projects.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
          <a href="https://github.com/hazynyx" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontSize: '1.2rem', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-glow)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-primary)'}>
            <Github size={24} /> github.com/hazynyx
          </a>
          <a href="https://instagram.com/hazy__.nyx" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontSize: '1.2rem', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-glow)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-primary)'}>
            <Instagram size={24} /> @hazy__.nyx
          </a>
          <a href="mailto:hazynyx@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontSize: '1.2rem', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-glow)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-primary)'}>
            <Mail size={24} /> hazynyx@gmail.com
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
