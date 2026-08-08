import React from 'react';
import { motion } from 'framer-motion';

const LearnSection = () => {
  return (
    <section id="learn" className="content-wrapper" style={{ justifyContent: 'center' }}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ margin: "-20%" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
      >
        <h2 style={{ 
          fontSize: 'clamp(3rem, 6vw, 6rem)', 
          lineHeight: '1.1',
          color: 'var(--text-primary)',
          marginBottom: '4rem'
        }}>
          Curiosity is a<br/>
          pretty good debugger.
        </h2>
        
        <p style={{ 
          fontSize: 'clamp(1.2rem, 2.5vw, 2rem)', 
          color: 'var(--text-secondary)',
          fontWeight: 400,
          textTransform: 'none',
          lineHeight: '1.5',
          marginBottom: '2rem'
        }}>
          If I don't understand something,<br/>
          I don't want the abstraction to hide it.
        </p>

        <p style={{ 
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', 
          color: 'var(--text-primary)',
          fontWeight: 500,
          textTransform: 'none',
          lineHeight: '1.4'
        }}>
          I want to know what's underneath.
        </p>
      </motion.div>
    </section>
  );
};

export default LearnSection;
