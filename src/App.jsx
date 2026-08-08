import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeSection from './sections/HomeSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import AboutSection from './sections/AboutSection';
import { motion } from 'framer-motion';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'button' || e.target.closest('a') || e.target.closest('.hover-target')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="app-container">
      <div className="noise-overlay"></div>
      
      {/* Custom Cursor */}
      <motion.div 
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        animate={{ x: cursorPos.x, y: cursorPos.y }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />

      <Navbar />
      
      <main>
        <HomeSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
      </main>
    </div>
  );
}

export default App;
