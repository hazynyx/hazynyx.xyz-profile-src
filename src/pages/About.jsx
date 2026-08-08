import React from 'react';

const About = () => {
  return (
    <div style={{ paddingTop: '100px', padding: '2rem', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>About Me</h1>
      <div className="glowing-container" style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
          Hi, I'm Ayush Gupta (hazy), a 12th grade student and aspiring developer.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.2rem' }}>
          <a href="https://github.com/hazynyx" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-glow)' }}>GitHub: hazynyx</a>
          <a href="https://instagram.com/hazy__.nyx" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-glow)' }}>Instagram: @hazy__.nyx</a>
          <a href="mailto:hazynyx@gmail.com" style={{ color: 'var(--accent-glow)' }}>Email: hazynyx@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default About;
