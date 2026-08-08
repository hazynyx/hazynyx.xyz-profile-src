import React from 'react';
import HomeSection from './sections/HomeSection';
import ProjectsSection from './sections/ProjectsSection';
import BuildSection from './sections/BuildSection';
import SystemsSection from './sections/SystemsSection';
import BreakSection from './sections/BreakSection';
import LearnSection from './sections/LearnSection';
import NextSection from './sections/NextSection';
import ParticleBackground from './components/ParticleBackground';

import ContactPage from './pages/ContactPage';

function App() {
  if (window.location.pathname === '/contact') {
    return <ContactPage />;
  }

  return (
    <div className="app-container">
      <ParticleBackground />
      <HomeSection />
      <ProjectsSection />
      <BuildSection />
      <SystemsSection />
      <BreakSection />
      <LearnSection />
      <NextSection />
    </div>
  );
}

export default App;
