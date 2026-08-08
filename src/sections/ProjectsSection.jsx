import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: "dingus-os",
    desc: "A browser-based operating system featuring a custom Virtual File System (VFS) written in Rust and a fully-featured desktop environment.",
    url: "https://github.com/hazynyx/dingus-os",
    tags: ["Rust", "TypeScript", "Vite", "WASM"]
  },
  {
    name: "Edith-3d",
    desc: "A project which tracks your hand movements to control 3d particles based shapes on the screen.",
    url: "https://github.com/hazynyx/Edith-3d",
    tags: ["HTML", "JS", "3D", "Hand Tracking"]
  },
  {
    name: "datakeep",
    desc: "An encrypted notes app with local-only storage, client-side encryption.",
    url: "https://github.com/hazynyx/datakeep",
    tags: ["JavaScript", "Encryption", "Local Storage"]
  },
  {
    name: "rePW",
    desc: "Chrome extension that adds TrueTime, analytics, study tracking, heatmaps, dark mode, and playback enhancements.",
    url: "https://github.com/hazynyx/rePW",
    tags: ["Extension", "Analytics"]
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" style={{ padding: '4rem 0' }}>
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        style={{ fontSize: '4rem', marginBottom: '3rem', color: 'var(--text-primary)' }}
      >
        SELECTED WORKS
      </motion.h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        {projects.map((project, idx) => (
          <motion.a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            key={idx}
            className="glowing-container hover-target"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            style={{ display: 'block', minHeight: '250px' }}
          >
            <h3 style={{ fontSize: '2rem', color: 'var(--accent-glow-strong)' }}>{project.name}</h3>
            <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{project.desc}</p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              {project.tags.map(tag => (
                <span key={tag} style={{ background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
