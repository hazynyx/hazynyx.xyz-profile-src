import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="scroll-container"
    >
      <section className="scroll-section">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center' }}
        >
          <h1 style={{ fontSize: '4rem' }}>Ayush Gupta</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', marginTop: '-10px' }}>12th grade student & Developer</p>
          <p style={{ color: 'var(--accent-glow)', marginTop: '1rem' }}>AKA: hazy</p>
        </motion.div>
      </section>
      <section className="scroll-section">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', maxWidth: '800px', padding: '0 2rem' }}
        >
          <h2 style={{ fontSize: '3rem', color: 'var(--text-secondary)' }}>Philosophy</h2>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>"solving my itch in the butt"</p>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;
