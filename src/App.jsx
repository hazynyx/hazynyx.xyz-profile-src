import React from 'react';
import HomeSection from './sections/HomeSection';
import ProjectsSection from './sections/ProjectsSection';
import AboutSection from './sections/AboutSection';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="app-container">
      <ParticleBackground />
      <HomeSection />
      <ProjectsSection />
      <AboutSection />
    </div>
  );
}

export default App;
