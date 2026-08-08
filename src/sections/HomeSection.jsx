import React from 'react';
import { motion } from 'framer-motion';

const HomeSection = () => {
  return (
    <section id="home" className="content-wrapper" style={{ alignItems: 'flex-start' }}>
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginTop: '20vh' }}
      >
        <h1 style={{ 
          fontSize: 'clamp(6rem, 20vw, 18rem)', 
          lineHeight: '0.8',
          letterSpacing: '-0.05em',
          marginLeft: '-1vw'
        }}>
          HAZY
        </h1>
        <p style={{ 
          fontSize: 'clamp(1rem, 2vw, 1.5rem)', 
          color: 'var(--text-secondary)',
          marginTop: '2rem',
          maxWidth: '400px',
          fontWeight: 400,
          textTransform: 'none'
        }}>
          Exploring systems, architecture, and interaction. A builder of digital structures.
        </p>
      </motion.div>
    </section>
  );
};

export default HomeSection;
