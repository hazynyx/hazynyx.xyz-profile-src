import React from 'react';

const Work = () => {
  return (
    <div style={{ paddingTop: '100px', padding: '2rem', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>Work Experience</h1>
      <div className="glowing-container" style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 400px' }}>
          <h2>Open Source Developer</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Since last 3 years</p>
          <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', color: 'var(--text-secondary)' }}>
            <li>Contributed to various open source projects.</li>
            <li>Developed and maintained web and system-level applications.</li>
          </ul>
        </div>
        <div style={{ flex: '1 1 400px' }}>
          <h3>Skills</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Physics skills container will go here...</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
