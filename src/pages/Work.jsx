import React from 'react';
import PhysicsSkills from '../components/PhysicsSkills';
import { motion } from 'framer-motion';

const Work = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      style={{ paddingTop: '100px', padding: '2rem', minHeight: '100vh' }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>Work Experience</h1>
      <div className="glowing-container" style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 400px' }}>
          <h2>Open Source Developer</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Since last 3 years</p>
          <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', color: 'var(--text-secondary)' }}>
            <li>Contributed to various open source projects.</li>
            <li>Developed and maintained web and system-level applications using a wide variety of technologies.</li>
            <li>Focused on local-first paradigms, offline storage (IndexedDB, OPFS), and encryption.</li>
          </ul>
        </div>
        <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h3 style={{ marginBottom: '1rem' }}>Technical & Soft Skills</h3>
          <PhysicsSkills />
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '1rem' }}>Drag and throw the skills around!</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
