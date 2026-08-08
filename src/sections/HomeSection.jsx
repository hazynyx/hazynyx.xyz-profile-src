import React from 'react';
import { motion } from 'framer-motion';

const HomeSection = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 10 }}>
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="glitch-text hover-target" data-text="HAZY" style={{ 
          fontSize: 'clamp(5rem, 18vw, 15rem)', 
          lineHeight: '1', 
          color: 'var(--text-primary)',
          margin: 0,
          textShadow: '0 0 30px rgba(0, 150, 255, 0.5)'
        }}>
          HAZY
        </h1>
        <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginTop: '0.5rem', letterSpacing: '4px', textTransform: 'uppercase' }}>
          Open Source Developer / Innovator
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
