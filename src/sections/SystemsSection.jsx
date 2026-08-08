import React from 'react';
import { motion } from 'framer-motion';

const SystemsSection = () => {
  return (
    <section id="systems" className="content-wrapper" style={{ justifyContent: 'center' }}>
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ margin: "-20%" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ maxWidth: '700px' }}
      >
        <h2 style={{ 
          fontSize: 'clamp(3rem, 6vw, 6rem)', 
          lineHeight: '1',
          color: 'var(--text-primary)',
          marginBottom: '2rem'
        }}>
          EVERYTHING IS A SYSTEM.
        </h2>
        
        <p style={{ 
          fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', 
          color: 'var(--text-secondary)',
          fontWeight: 400,
          textTransform: 'none',
          lineHeight: '1.5',
          marginBottom: '3rem'
        }}>
          Interfaces hide the machinery underneath.<br/>
          I like pulling the layers apart.
        </p>

        <ul style={{
          listStyle: 'none',
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          lineHeight: '1.6',
          marginBottom: '4rem'
        }}>
          <li>Storage.</li>
          <li>Networks.</li>
          <li>Hardware.</li>
          <li>Processes.</li>
          <li>Code.</li>
        </ul>

        <p style={{ 
          fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', 
          color: 'var(--text-primary)',
          fontWeight: 500,
          textTransform: 'none',
          lineHeight: '1.4'
        }}>
          Understand the pieces.<br/>
          Understand how they interact.<br/>
          <span style={{ color: 'var(--text-secondary)' }}>Then build something better.</span>
        </p>
      </motion.div>
    </section>
  );
};

export default SystemsSection;
