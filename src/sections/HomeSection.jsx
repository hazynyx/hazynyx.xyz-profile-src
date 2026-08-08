import React from 'react';
import { motion } from 'framer-motion';

const HomeSection = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 style={{ fontSize: 'clamp(4rem, 8vw, 8rem)', lineHeight: '1', color: 'var(--text-primary)' }}>
          AYUSH<br/>GUPTA.
        </h1>
        <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginTop: '1rem', letterSpacing: '4px', textTransform: 'uppercase' }}>
          Developer / 12th Grade / <span style={{ color: 'var(--accent-glow-strong)' }}>Hazy</span>
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ marginTop: '4rem', maxWidth: '800px' }}
      >
        <h2 style={{ fontSize: '2rem', color: 'var(--text-secondary)' }}>Philosophy</h2>
        <p style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1.2' }}>
          "SOLVING MY ITCH IN THE BUTT."
        </p>
      </motion.div>
    </section>
  );
};

export default HomeSection;
