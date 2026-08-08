import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" style={{ padding: '4rem 0', minHeight: '80vh' }}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glowing-container"
        style={{ textAlign: 'center', padding: '4rem 2rem' }}
      >
        <h2 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>ABOUT ME</h2>
        <p style={{ fontSize: '1.5rem', marginBottom: '3rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
          Hi, I'm Ayush Gupta (hazy), a 12th grade student and an aspiring developer who loves tinkering with both software and hardware. I enjoy solving real problems and turning curiosity into impactful projects.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', marginTop: '3rem' }}>
          <a href="https://github.com/hazynyx" target="_blank" rel="noopener noreferrer" className="hover-target" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)', borderBottom: '2px solid var(--accent-glow-strong)', paddingBottom: '5px', textTransform: 'uppercase' }}>
            GitHub
          </a>
          <a href="https://instagram.com/hazy__.nyx" target="_blank" rel="noopener noreferrer" className="hover-target" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)', borderBottom: '2px solid var(--accent-glow-strong)', paddingBottom: '5px', textTransform: 'uppercase' }}>
            Instagram
          </a>
          <a href="mailto:hazynyx@gmail.com" className="hover-target" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)', borderBottom: '2px solid var(--accent-glow-strong)', paddingBottom: '5px', textTransform: 'uppercase' }}>
            Email
          </a>
        </div>
      </motion.div>
      <div style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        &copy; {new Date().getFullYear()} Ayush Gupta. Built with React & Matter.js.
      </div>
    </section>
  );
};

export default AboutSection;
