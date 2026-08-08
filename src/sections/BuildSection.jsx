import React from 'react';
import { motion } from 'framer-motion';

const BuildSection = () => {
  return (
    <section id="build" className="content-wrapper" style={{ justifyContent: 'center' }}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-20%" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ maxWidth: '800px', marginLeft: 'auto' }}
      >
        <h2 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 5rem)', 
          lineHeight: '1.1',
          color: 'var(--text-primary)',
          marginBottom: '3rem'
        }}>
          Ideas are cheap.<br/>
          <span style={{ color: 'var(--text-secondary)' }}>Making them exist isn't.</span>
        </h2>
        
        <p style={{ 
          fontSize: 'clamp(1.2rem, 2.5vw, 2rem)', 
          color: 'var(--text-primary)',
          fontWeight: 400,
          textTransform: 'none',
          lineHeight: '1.4'
        }}>
          I build to understand.<br/>
          I break things to understand them better.<br/>
          Sometimes the result is useful.<br/>
          <span style={{ color: 'var(--text-secondary)' }}>Sometimes it's just fucking interesting.</span>
        </p>
      </motion.div>
    </section>
  );
};

export default BuildSection;
