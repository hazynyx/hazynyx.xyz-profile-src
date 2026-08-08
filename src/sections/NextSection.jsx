import React from 'react';
import { motion } from 'framer-motion';

const NextSection = () => {
  return (
    <section id="next" className="content-wrapper" style={{ justifyContent: 'center', paddingBottom: '10vh' }}>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-20%" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}
      >
        <p style={{ 
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', 
          color: 'var(--text-primary)',
          fontWeight: 400,
          textTransform: 'none',
          lineHeight: '1.5',
          marginBottom: '2rem'
        }}>
          There is always something else to build.
        </p>
        
        <p style={{ 
          fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', 
          color: 'var(--text-secondary)',
          fontWeight: 300,
          textTransform: 'none',
          lineHeight: '1.6',
          marginBottom: '6rem'
        }}>
          Another system to understand.<br/>
          Another problem to solve.<br/>
          Another stupid idea worth trying.
        </p>

        <h2 style={{ 
          fontSize: 'clamp(4rem, 10vw, 10rem)', 
          lineHeight: '1',
          color: 'var(--text-primary)',
          marginBottom: '4rem',
          letterSpacing: '-0.02em'
        }}>
          SO, WHAT'S<br/>NEXT?
        </h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4vw', flexWrap: 'wrap' }}>
          <a href="https://github.com/hazynyx" target="_blank" rel="noopener noreferrer" className="link-minimal" style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
            GITHUB
          </a>
          <a href="#projects" className="link-minimal" style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
            PROJECTS
          </a>
          <a href="/contact" className="link-minimal" style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
            CONTACT
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default NextSection;
