import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="content-wrapper" style={{ justifyContent: 'flex-end', paddingBottom: '15vh' }}>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-20%" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
      >
        <p style={{ 
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', 
          lineHeight: '1.4', 
          color: 'var(--text-primary)',
          fontWeight: 300,
          marginBottom: '4rem'
        }}>
          Solving my itch in the butt. I build systems, dissect hardware, and write low-level code because I have to know how it works.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3vw', flexWrap: 'wrap' }}>
          <a href="https://github.com/hazynyx" target="_blank" rel="noopener noreferrer" className="link-minimal" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            GitHub
          </a>
          <a href="https://instagram.com/hazy__.nyx" target="_blank" rel="noopener noreferrer" className="link-minimal" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Instagram
          </a>
          <a href="mailto:hazynyx@gmail.com" className="link-minimal" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Email
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
