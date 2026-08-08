import React from 'react';

const Home = () => {
  return (
    <div className="scroll-container">
      <section className="scroll-section">
        <div style={{ textAlign: 'center' }}>
          <h1>Ayush Gupta</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>12th grade student & Developer</p>
        </div>
      </section>
      <section className="scroll-section">
        <div style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h2 style={{ fontSize: '3rem' }}>Philosophy</h2>
          <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>"solving my itch in the butt"</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
