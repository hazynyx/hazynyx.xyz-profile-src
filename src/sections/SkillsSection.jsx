import React from 'react';
import PhysicsSkills from '../components/PhysicsSkills';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  return (
    <section id="skills" style={{ padding: '4rem 0' }}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glowing-container"
        style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}
      >
        <div style={{ flex: '1 1 400px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>EXPERTISE</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2rem' }}>
            Open Source Developer since the last 3 years.
          </p>
          <ul style={{ marginLeft: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            <li>Contributed to various open source projects.</li>
            <li>Developed and maintained web and system-level applications.</li>
            <li>Focused on local-first paradigms, offline storage (IndexedDB, OPFS), and encryption.</li>
            <li>Experienced in Hardware Debugging, ESP32, and Arduino.</li>
          </ul>
        </div>
        <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
          <PhysicsSkills />
          <p style={{ position: 'absolute', bottom: '-30px', color: 'var(--accent-glow-strong)', fontSize: '0.9rem', fontWeight: 'bold' }}>Drag and throw the skills around!</p>
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
