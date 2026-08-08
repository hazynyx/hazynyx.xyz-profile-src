import React from 'react';
import { motion } from 'framer-motion';

const BreakSection = () => {
  return (
    <section id="break" className="content-wrapper" style={{ justifyContent: 'center' }}>
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-20%" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ maxWidth: '800px', marginLeft: 'auto', textAlign: 'right' }}
      >
        <h2 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 5rem)', 
          lineHeight: '1.2',
          color: 'var(--text-primary)',
          marginBottom: '3rem'
        }}>
          The first version is<br/>
          <span style={{ color: 'var(--text-secondary)' }}>supposed to be wrong.</span>
        </h2>
        
        <p style={{ 
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', 
          color: 'var(--text-primary)',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          lineHeight: '1.5',
          marginBottom: '3rem'
        }}>
          Build it.<br/>
          Test it.<br/>
          <span style={{ color: 'var(--text-secondary)' }}>Break it.</span><br/>
          Find out why.
        </p>

        <p style={{ 
          fontSize: 'clamp(2rem, 4vw, 4rem)', 
          color: 'var(--text-primary)',
          fontWeight: 900,
          lineHeight: '1'
        }}>
          THEN BUILD IT AGAIN.
        </p>
      </motion.div>
    </section>
  );
};

export default BreakSection;
