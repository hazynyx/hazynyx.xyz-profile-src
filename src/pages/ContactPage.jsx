import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const links = [
    { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/ayush-gupta-620052360/' },
    { name: 'GITHUB', url: 'https://github.com/hazynyx' },
    { name: 'INSTAGRAM', url: 'https://instagram.com/hazy__.nyx' },
    { name: 'EMAIL', url: 'mailto:hazynyx@gmail.com' },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000000',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem'
    }}>
      <motion.a 
        href="/"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          position: 'absolute',
          top: '2rem',
          left: '2rem',
          color: 'var(--text-secondary)',
          fontSize: '1rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          fontWeight: 700
        }}
        className="link-minimal"
      >
        [ RETURN ]
      </motion.a>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4vh', width: '100%', maxWidth: '800px' }}>
        {links.map((link, idx) => (
          <motion.a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'block',
              fontSize: 'clamp(3rem, 8vw, 8rem)',
              fontWeight: 900,
              lineHeight: '1',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
              textAlign: idx % 2 === 0 ? 'left' : 'right'
            }}
            whileHover={{ scale: 1.05, color: '#ffffff' }}
            className="link-minimal"
          >
            {link.name}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
